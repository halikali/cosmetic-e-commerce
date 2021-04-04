import { Range } from "rc-slider";
import ProductTypes from "../ProductTypes/ProductTypes";
import "./Filter.scss";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByBrand,
  getProductsForPriceFilter,
} from "../../../store/actions/actions";
import ProductType from "../ProductType/ProductType";

const Filter = () => {
  const products = useSelector((state) => state.productsReducer.data);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();
  const productType = useSelector((state) => state.filterReducer.product);
  useEffect(() => {
    setBrands(getBrands());
  }, [products]);

  const onChangeHandler = (event) => {
    setFirstValue(event[0]);
    setSecondValue(event[1]);
    dispatch(getProductsForPriceFilter(firstValue, secondValue));
  };

  const getBrands = () => {
    let allBrands = {};
    products.map((product) => {
      return allBrands[product.brand]
        ? allBrands[product.brand]++
        : (allBrands[product.brand] = 1);
    });
    return Object.entries(allBrands);
  };

  const onClickHandler = (brand) => {
    let br = encodeURI(brand);
    dispatch(getProductsByBrand(productType, br));
  };
  let tık = 0;
  const togglerHandler = () => {
    tık++;
    console.log(tık);
    tık % 2 === 0
      ? document.getElementById("toggle-filter").classList.add("close")
      : document.getElementById("toggle-filter").classList.remove("close");
  };

  return (
    <div className="container bg-white mt-4">
      <button
        className="close-toggler  d-block d-lg-none "
        onClick={togglerHandler}
      >
        FILTER{" "}
      </button>
      <section className="filter-bar " id="toggle-filter">
        <h5 className="text-left text-uppercase ">Product Categories</h5>
        <ProductTypes />
        <section className="price mb-4">
          <h6 className="font-weight-bold mb-3 text-left">Price</h6>
          <form>
            <Range min={0} max={100} onChange={onChangeHandler} />
          </form>
          {firstValue} - {secondValue}
        </section>
        <section className="text-left text-uppercase">
          <h6>Brands</h6>
          {brands.length > 1 &&
            brands.map((brand) => (
              <ProductType
                productType={brand[0]}
                onClick={() => onClickHandler(brand[0])}
                count={brand[1]}
              />
            ))}
        </section>
      </section>
    </div>
  );
};

export default Filter;
