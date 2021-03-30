import { Range } from "rc-slider";
import ProductTypes from "../ProductTypes/ProductTypes";
import "./Filter.scss";
import "rc-slider/assets/index.css";

const Filter = () => {
  return (
    <div className="container bg-white mt-4">
      <section className="filter-bar">
        <h5 className="text-left text-uppercase">Product Categories</h5>
        <ProductTypes />
        <section className="price mb-4">
          <h6 className="font-weight-bold mb-3 text-left">Price</h6>
          <form>
            <Range />
          </form>
        </section>
      </section>
    </div>
  );
};

export default Filter;
