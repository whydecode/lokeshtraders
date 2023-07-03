import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navLinks = open ? "nav-links open" : "nav-links";
  const link = open ? "fade" : "";
  const hamburger = open ? "hamburger toggle" : "hamburger";
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    console.log("SCREEN DOWN");
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <Link to="/" id="name" className={link}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className={hamburger} onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={navLinks}>
        <li className={link} onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li className={link} onClick={handleClick}>
          <Link to="/about">About</Link>
        </li>
        <li className={link} onClick={handleClick}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
