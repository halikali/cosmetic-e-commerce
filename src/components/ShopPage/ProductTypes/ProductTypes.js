import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/actions";
import ProductType from "../ProductType/ProductType";
import "./style.scss";
export default function ProductTypes() {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    product.length > 1 && dispatch(getProducts("product_type", product));
  }, [product]);

  return (
    <section className="mb-4 product-type">
      <h6 className="font-weight-bold mb-3 text-left text-uppercase">
        Product Types
      </h6>
      <li className="text-left " onClick={() => setProduct("=blush")}>
        <ProductType productType="blush" />
      </li>
      <li onClick={() => setProduct("=eyebrow")}>
        <ProductType productType="eyebrow" />
      </li>
      <li onClick={() => setProduct("=bronzer")}>
        <ProductType productType="bronzer" />
      </li>
      <li onClick={() => setProduct("=eyeshadow")}>
        <ProductType productType="eyeshadow" />
      </li>
      <li onClick={() => setProduct("=eyeliner")}>
        <ProductType productType="eyeliner" />
      </li>
      <li onClick={() => setProduct("=foundation")}>
        <ProductType productType="foundation" />
      </li>
      <li onClick={() => setProduct("=lip_liner")}>
        <ProductType productType="lip-liner" />
      </li>
      <li onClick={() => setProduct("=lipstick")}>
        <ProductType productType="lipstick" />
      </li>
      <li onClick={() => setProduct("=mascara")}>
        <ProductType productType="mascara" />
      </li>
      <li onClick={() => setProduct("=nail_polish")}>
        <ProductType productType="nail-polish" />
      </li>
    </section>
  );
}
