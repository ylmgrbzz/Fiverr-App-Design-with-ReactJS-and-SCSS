import React, { useState } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "ylm",
    isSeller: true,
  };

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
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button> Join </button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://www.okutanhobi.com/hr28-y-harfi-biblo-ahsap-obje-624-53-B.jpg"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Gigs</span>
                </div>
              )}
            </div>
          )}
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
