import React from "react";
import "./style.scss";
import Bag from "../../assets/header/bag-check.svg";
import Person from "../../assets/header/person.svg";
import Search from "../../assets/header/search.svg";
import Heart from "../../assets/header/suit-heart.svg";
import Logout from "../../assets/header/logout.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const onClickHandler = () => {
    dispatch(getProducts("", ""));
  };

  let lastKnownScrollPosition = 0;

  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 150) {
      document.getElementById("header").classList.add("navbar-after-scroll");
    } else {
      document.getElementById("header").classList.remove("navbar-after-scroll");
    }
  });
  const toggler = () => {
    document.getElementById("nav-wrapper").classList.toggle("d-none-nav");
  };
  return (
    <section>
      <div className="header-nav " id="header">
        <div className="logo">
          <p id="logo">PETRICHOR</p>
        </div>
        <div className="d-lg-none d-block x" onClick={toggler}>
          <i class="fas fa-bars"></i>
        </div>
        <div className="nav-wrapper" id="nav-wrapper">
          <nav className="nav justify-content-center " id="nav">
            <Link className="nav-item nav-link active" id="home" to="/">
              <span className="a">HOME</span>
            </Link>

            <Link className="nav-item nav-link active" id="shop" to="/shop">
              <span className="a" onClick={onClickHandler}>
                SHOP
              </span>
            </Link>
            {/* <Link className="nav-item nav-link active" id="headers" to="/headers">
            <span className="a">HEADERS</span>
          </Link> */}
            <Link className="nav-item nav-link active" id="blog" to="/blog">
              <span className="a">BLOG</span>
            </Link>
            {/* <Link className="nav-item nav-link active" id="pages" to="/pages">
            <span className="a">PAGES</span>
          </Link> */}
            <Link className="nav-item nav-link active" id="faq" to="/faq">
              <span className="a">FAQ</span>
            </Link>
            <Link
              className="nav-item nav-link active"
              id="contact"
              to="/contact"
            >
              <span className="a">CONTACT</span>
            </Link>
          </nav>
          <div className="icon-wrapper">
            <div className="personicon">
              <a href="/myaccount">
                <img width="28" height="22" src={Person} alt="person" />
              </a>
            </div>

            <div className="searchicon">
              <a href="/">
                <img width="28" height="22" src={Search} alt="search" />
              </a>
            </div>

            <div className="hearticon">
              <Link to="/wishlist">
                <img width="28" height="22" src={Heart} alt="hearth" />
                {wishlist && wishlist.length > 0 && (
                  <div className="like-count">{wishlist.length}</div>
                )}
              </Link>
            </div>

            <div className="bagicon">
              <Link to="/cart">
                <img width="28" height="22" src={Bag} alt="bag" />
                {cartItems && cartItems.length > 0 && (
                  <div className="like-count">
                    {cartItems.reduce((a, b) => +a + +b.count, 0)}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
