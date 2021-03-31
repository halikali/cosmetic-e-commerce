import { useEffect } from "react";
import Filter from "../components/ShopPage/Filter/Filter";
import Product from "../components/ShopPage/Product/Product";
import TopComponent from "../components/TopComponent/TopComponent";
const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      {/* <div style={{ backgroundColor: "red", height: "500px" }}></div> */}
      <TopComponent text="SHOP" />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filter />
          </div>
          <div className="col-md-9">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
