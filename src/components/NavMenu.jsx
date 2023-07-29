import React, { useState, useEffect } from "react";
import "../css/NavMenu.css";

export default function NavMenu({
  navButtonClicked,
  setPage,
  handleNavButton,
  handleBarClicked,
}) {
  const [isOut, setIsOut] = useState(false);

  useEffect(() => {
    if (!isOut) {
      setIsOut((prevValue) => !prevValue);
    }
  }, [navButtonClicked]);

  const loadPage = (e) => {
    setPage(e);
    handleNavButton(false);
    handleBarClicked(false);
    if (!isOut) {
      setIsOut((prevValue) => !prevValue);
    }
  };

  return (
    <>
      <div className="nav-menu">
        <div
          className={`menu-fade ${
            navButtonClicked ? "fade-in" : isOut ? "fade-out" : ""
          }`}
        ></div>
        <ul className="nav-menu-ul">
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-a" : isOut ? "slide-out" : ""
            }`}
          >
            {" "}
            <a href="#" onClick={(e) => loadPage("home")}>
              Home
            </a>{" "}
          </li>
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-b" : isOut ? "slide-out" : ""
            }`}
          >
            {" "}
            <a href="#" onClick={(e) => loadPage("about")}>
              About Us
            </a>{" "}
          </li>
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-c" : isOut ? "slide-out" : ""
            }`}
          >
            {" "}
            <a href="#" onClick={(e) => loadPage("contact")}>
              Contact
            </a>{" "}
          </li>
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-d" : isOut ? "slide-out" : ""
            }`}
          >
            {" "}
            <a href="#" onClick={(e) => loadPage("gallery")}>
              Gallery
            </a>{" "}
          </li>
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-e" : isOut ? "slide-out" : ""
            }`}
          >
            {" "}
            <div className={`social-media`}>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/" target="_blank">
                <i className="fa-brands fa-square-pinterest"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
            </div>
          </li>
          <li
            className={`nav-menu-li ${
              navButtonClicked ? "slide-in-social" : isOut ? "slide-out" : ""
            }`}>
            <a href="#" onClick={(e) => loadPage("credit")}><h6>Image Credits</h6></a>
            <h6>Site designed by Eric Collard © 2023</h6></li>
        </ul>
        
      </div>
    </>
  );
}
