import { Range } from "rc-slider";
import ProductTypes from "../ProductTypes/ProductTypes";
import "./Filter.scss";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsForPriceFilter } from "../../../store/actions/actions";

const Filter = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    setFirstValue(event[0]);
    setSecondValue(event[1]);
    dispatch(getProductsForPriceFilter(firstValue, secondValue));
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
      </section>
    </div>
  );
};

export default Filter;
