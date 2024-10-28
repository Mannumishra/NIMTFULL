import React, { useEffect, useState } from "react";
import "./hero.css";
import axios from "axios";
import Slider from 'react-slick';
import image from '../../Images/heroTopBg.png'
import { Link } from "react-router-dom";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
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
      <section className="container-fluid hero">
        <div className="row career-bg">
          <div className="col-md-7">
            <div className="forCareerbg">
              <Slider {...settings}>
                <div>
                  <img
                    src={image}
                    alt="Career Slide 1"
                    className="slider-image"
                  />
                </div>
                <div>
                  <img
                    src={image}
                    alt="Career Slide 2"
                    className="slider-image"
                  />
                </div>
                {/* Add more slides as needed */}
              </Slider>
              <div className="career_content">
                <p className="career-para">FOR YOUR CAREER</p>
                <button className="button"><Link to='/contact-us'> Enroll Now</Link></button>
              </div>
            </div>
          </div>
          <div className="col-md-5 homeEnquiry">
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
      </section>
      <section className="card-section">
        <div className="card_sections">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <h3>Trending Courses</h3>
                  <p>
                    Top courses for skills needed in today’s competitive job
                    market.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-file-earmark-text"></i>
                  </div>
                  <h3>Books & Liberary</h3>
                  <p>
                    Explore extensive resources for academic and personal
                    knowledge growth.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <h3>Certified Teachers</h3>
                  <p>
                    Certified professionals committed to guiding your
                    educational journey.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-mortarboard-fill"></i>
                  </div>
                  <h3>Certification</h3>
                  <p>
                    Gain recognized certifications that empower you with
                    specialized skills and credibility in your field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
