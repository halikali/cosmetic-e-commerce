import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./Pages/Shop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/actions";
import Details from "./components/ShopPage/Details/Details";

import ProductInCart from "./components/CartComponents/ProductInCart/ProductInCart";

import Cart from "./Pages/Cart";
import Checkout from "./components/CartComponents/Checkout/Checkout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("", ""));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/details">
            <Details />
          </Route>

          <Route path="/cart">
            <ProductInCart />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
