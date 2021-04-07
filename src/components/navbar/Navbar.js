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
  console.log(wishlist);
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

  return (
    <section>
      <div className="header-nav " id="header">
        <div className="logo">
          <img
            width="205"
            height="18"
            src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3056882909.svg"
            alt="Luchiana"
          />
        </div>

        <nav className="nav justify-content-center " id="nav">
          <Link className="nav-item nav-link active" id="home" to="/">
            <span className="a">HOME</span>
          </Link>

          <Link className="nav-item nav-link active" id="shop" to="/shop">
            <span className="a" onClick={onClickHandler}>
              SHOP
            </span>
          </Link>
          <Link className="nav-item nav-link active" id="headers" to="/headers">
            <span className="a">HEADERS</span>
          </Link>
          <Link className="nav-item nav-link active" id="blog" to="/blog">
            <span className="a">BLOG</span>
          </Link>
          <Link className="nav-item nav-link active" id="pages" to="/pages">
            <span className="a">PAGES</span>
          </Link>
          <Link className="nav-item nav-link active" id="mega" to="/mega">
            <span className="a">MEGA</span>
          </Link>
          <Link className="nav-item nav-link active" id="contact" to="/contact">
            <span className="a">CONTACT</span>
          </Link>
        </nav>

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
          </Link>
          {wishlist && wishlist.length > 0 && (
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "whitesmoke",
                borderRadius: "50%",
                fontSize: "14px",
                fontWeight: "700",
                width: "100%",
                position: "relative",
                top: "-30px",
                left: "13px",
              }}
            >
              {wishlist.length}
            </div>
          )}
        </div>

        <div className="bagicon">
          <Link to="/cart">
            <img width="28" height="22" src={Bag} alt="bag" />
          </Link>
        </div>

        {/* <div className="logouticon">
          <Link to="/logout">
            <img width="28" height="22" src={Logout} alt="bag" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
