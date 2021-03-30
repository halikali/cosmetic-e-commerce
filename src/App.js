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
