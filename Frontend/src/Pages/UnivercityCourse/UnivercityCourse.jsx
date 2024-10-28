import React, { useEffect, useState } from "react";
import "../../Components/OurCourses/courses.css";
import { Link } from "react-router-dom";
import axios from "axios";

const UnivercityCourse = () => {
  // State for courses
  const [courses, setCourses] = useState([]);

  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Fetch course data from the API
  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.nimteducation.com/api/get-all-course");
      console.log(res); // Log response for debugging
      if (res.status === 200) {
        // Set the courses state with the data received
        setCourses(res.data.data);
      }
    } catch (error) {
      console.error(error); // Use console.error for errors
    }
  };

  const filterData = courses.filter(x => x.courseCtegory.courseCategoryName==="UNIVERSITY COURSES")

  // Use effect to fetch data once on component mount
  useEffect(() => {
    getApiData();
  }, []); // Dependency array should be empty to avoid infinite loop

  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>University Courses</h2>
            <p className="m-0">
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>University Courses</span>
            </p>
          </div>
        </div>
      </div>
      <div className="our_courses py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our University Courses</h2>
            <p>Join Today For a Successful Tomorrow</p>
          </div>
          <div className="row justify-content-center">
            {filterData.map((course, index) => (
              <div className="col-md-6 col-lg-4 mb-3" key={index} >
                <div className="card border-0 shadow-sm">
                  <Link to={`/our-courses/${course.courseName.replace(/\s+/g, '-').toLowerCase()}`}>
                    <img
                      src={course.image}
                      alt={course.courseName}
                      className="card-img-top"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                  <div className="card-body">
                    <Link
                      to={`/our-courses/${course.courseName.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-dark text-decoration-none"
                    >
                      <h6 className="card-title font-weight-bold text-center">
                        {course.courseName}
                      </h6>
                      <ul className="list-unstyled">
                        {course.courseTopic.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </Link>
                  </div>
                  <div className="card-footer d-flex justify-content-evenly text-center border-0">
                    <div>
                      <p>
                        <b>Course Duration</b>
                        <br />
                        {course.courseDuration} Weeks
                      </p>
                    </div>
                    <div>
                      <b>Course Enrollment</b>
                      <br />
                      {course.courseEnrollment}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-3">
              <button className="button">
                <Link
                  className="text-white text-decoration-none"
                  to="/our-courses"
                >
                  View all
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnivercityCourse;
