import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/actions";
import "./style.scss";

export default function ProductType({ productType }) {
  // const dispatch = useDispatch();
  // const [product, setProduct] = useState("");

  // const onClickHandler = (p) => {
  //   setProduct(() => p);
  //   // setProduct(p);
  //   // console.log(p);
  //   dispatch(getProducts("product_type", product));
  //   console.log(p);
  // };

  // useEffect(() => {
  //   dispatch(getProducts("product_type", product));
  //   console.log("useEffect", product);
  // }, []);

  return (
    <div className="form-check pl-0 mb-3 text-left">
      <div className="cursor">
        <p className="text-uppercase">{productType}</p>
      </div>
    </div>
  );
}
