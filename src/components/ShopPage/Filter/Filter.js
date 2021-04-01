import { Range } from "rc-slider";
import ProductTypes from "../ProductTypes/ProductTypes";
import "./Filter.scss";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsForPriceFilter } from "../../../store/actions/actions";

const Filter = () => {
  const products = useSelector((state) => state.productsReducer.data);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

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

  return (
    <div className="container bg-white mt-4">
      <section className="filter-bar">
        <h5 className="text-left text-uppercase">Product Categories</h5>
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
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={brand[0]}
                  id={brand[0]}
                />
                <label class="form-check-label" htmlFor={brand[0]}>
                  {brand[0]}
                  <span> ({brand[1]})</span>
                </label>
              </div>
            ))}
        </section>
      </section>
    </div>
  );
};

export default Filter;
