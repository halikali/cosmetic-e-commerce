import { useDispatch } from "react-redux";
import {
  getFilteredProducts,
  getProducts,
} from "../../../store/actions/actions";
import ProductType from "../ProductType/ProductType";

export default function ProductTypes() {
  const dispatch = useDispatch();

  const filtered = () => {
    dispatch(getProducts());
  };
  return (
    <section className="mb-4 product-type">
      <h6 className="font-weight-bold mb-3 text-left text-uppercase">
        Product Types
      </h6>
      <ProductType productType="blush" />
      <ProductType productType="bronzer" />
      <ProductType productType="eyebrow" />
      <ProductType productType="eyeliner" />
      <ProductType productType="eyeshadow" />
      <ProductType productType="foundation" />
      <ProductType productType="lip-liner" />
      <ProductType productType="lipstick" />
      <ProductType productType="mascara" />
      <ProductType productType="nail-polish" />
      <button className="btn btn-large btn-outline-dark" onClick={filtered}>
        {" "}
        RESET
      </button>
    </section>
  );
}
