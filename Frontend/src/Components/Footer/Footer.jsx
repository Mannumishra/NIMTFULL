import React from "react";
import "./Footer.css"; // Import the CSS file for custom styles if needed
import insta1 from "../../Images/footer1.png";
import insta2 from "../../Images/footer2.png";
import insta3 from "../../Images/footer3.png";
import insta4 from "../../Images/footer4.png";
import insta5 from "../../Images/footer5.png";
import insta6 from "../../Images/footer6.png";
import insta7 from "../../Images/footer7.png";
import insta8 from "../../Images/footer8.png";
import insta9 from "../../Images/footer9.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const images = [
    { src: insta1 },
    { src: insta2 },
    { src: insta3 },
    { src: insta4 },
    { src: insta5 },
    { src: insta6 },
    { src: insta7 },
    { src: insta8 },
    { src: insta9 },
  ];

  return (
    <>
      <div className="container">
        <div className="footertopSection">
          <div className="row">
            <div className="col-md-3">
              <h5>
                <b>Address</b>
              </h5>
              <p>
                1. 315, Daroga Market, Burari Chowk, 1st floor, Burari Delhi-84
              </p>
              <p className="m-0">
                2. Main Bus Stand, Nathupura , Burari Delhi -84
              </p>
            </div>
            <div className="col-md-3">
              <h5>
                <b>Email</b>
              </h5>
              <p>
                <Link
                  className="text-white text-decoration-none"
                  to="mailto:support@nimteducation.com"
                >
                  support@nimteducation.com
                </Link>
                <br />
                <Link
                  className="text-white text-decoration-none"
                  to="mailto:info@nimteducation.com"
                >
                  info@nimteducation.com
                </Link>
              </p>
            </div>
            <div className="col-md-2">
              <h5>
                <b>Phone</b>
              </h5>
              <p>
                <Link
                  className="text-white text-decoration-none"
                  to="tel:+919899520627"
                >
                  +91 98995 20627
                </Link>
                <br />
                <Link
                  className="text-white text-decoration-none"
                  to="tel:+919871655701"
                >
                  +91 98716 55701
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <b>Important Link</b>
              </h5>
              <Link
                className="m-0"
                to="https://www.ugc.gov.in/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                UGC ENTITLED
              </Link>
              <br />
              <Link
                className="m-0"
                to="https://deb.ugc.ac.in/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                AICTE APPROVED
              </Link>{" "}
              <br />
              <Link
                className="m-0"
                to="https://www.aicte-india.org/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                MEMBER OF DISTANCE EDUCATION COUNCIL
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white">
        <div className="container">
          {/* Upper Section */}

          {/* Lower Section */}
          <div className="row">
            {/* About Us */}
            <div className="col-md-3 mb-4">
              <h5>About Us</h5>
              <p>
                NIMT is dedicated to providing quality education with a focus on
                creating promising career paths for our students.
              </p>
              <div className="social-icons">
                <Link to="#" className="text-white me-3">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="text-white me-3">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="text-white me-3">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="#" className="text-white">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            {/* Quick Menu */}
            <div className="col-md-2 mb-4">
              <h5>Quick Menu</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/computer-courses" className="text-white">
                  Computer Course
                  </Link>
                </li>
                <li>
                  <Link to="/university-courses" className="text-white">
                  University Courses
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-white">
                  Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Instagram Feed */}
            <div className="col-md-4 mb-4">
              <h5>Instagram Feed</h5>
              <div className="row">
                {images.map((item, index) => (
                  <div className="col-4 mb-2" key={index}>
                    <img
                      src={item.src}
                      alt={`img${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <h5>Newsletter</h5>
              <p>
              Join our community today and never miss a beat!
              </p>
              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-primary w-100">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
