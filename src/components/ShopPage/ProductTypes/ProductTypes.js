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
      <ProductType productType="blush" onClick={() => setProduct("=blush")} />

      <ProductType
        productType="eyebrow"
        onClick={() => setProduct("=eyebrow")}
      />

      <ProductType
        productType="bronzer"
        onClick={() => setProduct("=bronzer")}
      />

      <ProductType
        productType="eyeshadow"
        onClick={() => setProduct("=eyeshadow")}
      />

      <ProductType
        productType="eyeliner"
        onClick={() => setProduct("=eyeliner")}
      />

      <ProductType
        productType="foundation"
        onClick={() => setProduct("=foundation")}
      />

      <ProductType
        productType="lip liner"
        onClick={() => setProduct("=lip_liner")}
      />

      <ProductType
        productType="lipstick"
        onClick={() => setProduct("=lipstick")}
      />

      <ProductType
        productType="mascara"
        onClick={() => setProduct("=mascara")}
      />

      <ProductType
        productType="nail polish"
        onClick={() => setProduct("=nail_polish")}
      />
    </section>
  );
}
