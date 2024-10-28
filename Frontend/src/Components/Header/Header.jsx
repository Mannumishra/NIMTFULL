import React, { useRef, useEffect } from "react";
import logo from "../../Images/logo.png";
import "../../Components/Header/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const collapseRef = useRef(null);

  useEffect(() => {
    const collapseElement = collapseRef.current;

    if (collapseElement) {
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (collapseElement.classList.contains("show")) {
            // Close the navbar collapse after a link click
            const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
              toggle: false,
            });
            bsCollapse.hide();
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div className="container py-2">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-2 col-2">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-md-10 col-10 text-center">
            <h2 className="heading homeTopheading">
              Narayan Institute Of Management & Technology
            </h2>
            <h5 className="heading navbartitle">
              (A Unit Of Sri Shiv Narayan Education Society)
            </h5>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar_menu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white border-0"></i>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/computer-courses">
                  COMPUTER COURSES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/university-courses">
                  UNIVERSITY COURSES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  GALLERY
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  ACADEMICS
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
