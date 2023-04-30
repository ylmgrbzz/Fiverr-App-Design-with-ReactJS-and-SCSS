import React, { useState } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button> Join </button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            {/* <Link className="link menuLink" to="/">
          Graphics & Design
        </Link>
        <Link className="link menuLink" to="/">
          Video & Animation
        </Link>
        <Link className="link menuLink" to="/">
        Writing & Translation
        </Link>
        <Link className="link menuLink" to="/">
        AI Services
        </Link>
        <Link className="link menuLink" to="/">
        Digital Marketing
        </Link>
        <Link className="link menuLink" to="/">
        Music & Audio
        </Link>
        <Link className="link menuLink" to="/">
          Programming & Tech
        </Link>
        <Link className="link menuLink" to="/">
          Business
        </Link>
        <Link className="link menuLink" to="/">
          Lifestyle
        </Link> */}
            <span>ylm</span>
            <span>ylm2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
