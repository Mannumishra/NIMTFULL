import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [courseData, setCourseData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courseCategory, setCourseCategory] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://ins.api.digiindiasolutions.com/api/get-all-course"
      );
      if (res.status === 200) {
        setCourseData(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getApiCategory = async () => {
    try {
      const res = await axios.get(
        "https://ins.api.digiindiasolutions.com/api/get-course-category"
      );
      if (res.status === 200) {
        setCourseCategory(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
    getApiCategory();
  }, []);

  useEffect(() => {
    if (formData.branch) {
      const relatedCourses = courseData.filter(
        (x) => x.courseCtegory.courseCategoryName === formData.branch
      );
      setFilteredCourses(relatedCourses);
    } else {
      setFilteredCourses([]);
    }
  }, [formData.branch, courseData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(""); // Reset error message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form before submission
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course ||
      !formData.branch
    ) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://ins.api.digiindiasolutions.com/api/send-query",
        formData
      );
      setLoading(false);
      if (res.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          branch: "",
          message: "",
        });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    }
  };
  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>CONTACT US</h2>
            <p className="m-0">
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h1>CONTACT US</h1>
            <p>
              Have questions or need assistance? Connect with the NIMT team via
              phone, email, or the form below. We're here to support your
              journey toward a brighter future.
            </p>
          </div>

          <div className="contact">
            <div className="row">
              <div className="col-md-6 p-4">
                <h2>Our Contacts</h2>
                <hr />
                <p>
                  We provide free pick up and drop off at home or school for all
                  behind-the-wheel lessons. And, we offer a payment plan at no
                  additional charge.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-3">
                        <i class="bi bi-hourglass-split"></i>
                      </div>
                      <div>
                        <h5>Phone 24/7</h5>
                        <p className="mb-0">
                          <a
                            className="text-decoration-none text-black"
                            href="tel:+919871655701"
                          >
                            +91 9871655701
                          </a>
                        </p>
                        <p className="mb-0">
                          <a
                            className="text-decoration-none text-black"
                            href="tel:+919354801970"
                          >
                            +91 9354801970
                          </a>
                        </p>
                        <p className="mb-0">
                          <a
                            className="text-decoration-none text-black"
                            href="tel:+919899520627"
                          >
                            +91 9899520627
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-3">
                        <i class="bi bi-stopwatch"></i>
                      </div>

                      <div>
                        <h5>Operating Hours</h5>
                        <p>Mon-Fri: 9:00 am - 5:00 pm </p>
                        <p>Sat-Sun: 11:00 am - 16:00 pm</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-3">
                        <i class="bi bi-geo-alt"></i>
                      </div>

                      <div>
                        <h5>Our address</h5>
                        <p>
                          1. 315, Daroga Market, Burari Chowk, 1st floor, Burari
                          Delhi-84
                        </p>
                        <p>2. Main Bus Stand, Nathupura , Burari Delhi -84</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-3">
                        <i class="bi bi-envelope"></i>
                      </div>

                      <div>
                        <h5>Email address</h5>
                        <p>support@nimteducation.com</p>
                        <p>info@nimteducation.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-light">
                <div className="p-4">
                  <h2>For any inquiry</h2>
                  <hr />
                  <form onSubmit={handleSubmit}>
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  fullwidth
                  id=""
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  fullwidth
                  id=""
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  fullwidth
                  id=""
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="enquiry_form">
                <select
                  className="form-control"
                  name="branch"
                  id=""
                  onChange={handleChange}
                  value={formData.branch}
                >
                  <option value="" selected disabled>
                    Select Course Category
                  </option>
                  {courseCategory.map((item, index) => (
                    <option value={item.courseCategoryName}>
                      {item.courseCategoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="enquiry_form">
                <select
                  className="form-control"
                  name="course"
                  id=""
                  onChange={handleChange}
                  value={formData.course}
                >
                  <option value="" selected disabled>
                    Select Course
                  </option>
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((item, index) => (
                      <option value={item.courseName}>{item.courseName}</option>
                    ))
                  ) : (
                    <option value="NO Course Available">
                      ---NO Course Available---
                    </option>
                  )}
                </select>
              </div>

              <div className="enquiry_form">
                <textarea
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  id=""
                  className="form-control"
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="enquiry_form">
                <button className="button">
                  {loading ? "Please Wait.." : "Submit"}
                </button>
              </div>
            </form>
            {/* Show success/error message */}
            {success === true && (
              <h2 className="text-success text-center">
                Inquiry Send successfully!
              </h2>
            )}
            {success === false && (
              <h2 className="text-danger text-center">
                Something went wrong. Please try again.
              </h2>
            )}
                </div>
              </div>
            </div>
          </div>
          <div className="map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22115.249720148975!2d77.17136578886911!3d28.760335988059776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe2b9536a307%3A0x6e3d2b2ae88ace44!2sNIMT%20Computer%20Institute!5e1!3m2!1sen!2sin!4v1730108515872!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="anyQuestion p-3 bg-light mt-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-10">
                  <h5>
                    <span>
                      <i class="bi bi-tablet"></i>
                    </span>{" "}
                    &nbsp; If you Have Any Questions Call Us On &nbsp;
                    <a style={{ color: `var(--color-heading)` }} href="tel:+919871655701">
                      <b>+91 9871655701</b>
                    </a>
                  </h5>
                </div>
                <div className="col-md-2">
                  <button className="button">
                  <a href="tel:+919871655701" >Appointment</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
