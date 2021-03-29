import Filter from "../components/ShopPage/Filter/Filter";
import Product from "../components/ShopPage/Product";

const Shop = () => {
  return (
    <>
      {" "}
      <div style={{ backgroundColor: "red", height: "500px" }}></div>
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