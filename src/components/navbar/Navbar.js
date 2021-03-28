import React from "react";
import "./style.scss";
import Bag from "../../assets/header/bag-check.svg";
import Person from "../../assets/header/person.svg";
import Search from "../../assets/header/search.svg";
import Heart from "../../assets/header/suit-heart.svg";

const Navbar = () => {
  let lastKnownScrollPosition = 0;

  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 200) {
      document.getElementById("header").classList.add("navbar-after-scroll");
    } else {
      document.getElementById("header").classList.remove("navbar-after-scroll");
    }
  });

  return (
    <section className="header-nav" id="header">
      <div>
        <div className="logo">
          <img
            width="205"
            height="18"
            src="https://parkofideas.com/luchiana/demo/wp-content/uploads/2020/10/luchiana-3056882909.svg"
            alt="Luchiana"
          />
        </div>

        <nav className="nav justify-content-center" id="nav">
          <a href="/" className="nav-item nav-link active" id="home">
            HOME
          </a>
          <a href="/" className="nav-item nav-link active" id="shop">
            SHOP
          </a>
          <a href="/" className="nav-item nav-link active" id="headers">
            HEADERS
          </a>
          <a href="/" className="nav-item nav-link active" id="blog">
            BLOG
          </a>
          <a href="/" className="nav-item nav-link active " id="pages">
            PAGES
          </a>
          <a href="/" className="nav-item nav-link active" id="mega">
            MEGA
          </a>
          <a href="/" className="nav-item nav-link active" id="contact">
            CONTACT
          </a>
        </nav>

        <div className="personicon">
          <a href="/">
            <img width="28" height="22" src={Person} alt="person" />
          </a>
        </div>

        <div className="searchicon">
          <a href="/">
            <img width="28" height="22" src={Search} alt="search" />
          </a>
        </div>

        <div className="hearticon">
          <a href="/">
            <img width="28" height="22" src={Heart} alt="hearth" />
          </a>
        </div>

        <div className="bagicon">
          <a href="/">
            {" "}
            <img width="28" height="22" src={Bag} alt="bag" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
