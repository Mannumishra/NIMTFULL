import axios from "axios";
import React, { useEffect, useState } from "react";

const ReserveSeatForm = () => {
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
      const res = await axios.get("https://ins.api.digiindiasolutions.com/api/get-all-course");
      if (res.status === 200) {
        setCourseData(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getApiCategory = async () => {
    try {
      const res = await axios.get("https://ins.api.digiindiasolutions.com/api/get-course-category");
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
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.branch) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://ins.api.digiindiasolutions.com/api/send-query", formData);
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
      <section className="reserve mt-3">
        <div className="container">
          <div className="text-center">
            <h2>RESERVE YOUR SEAT</h2>
            <p>Fill In The Form Below To Reserve Your Seat Asap!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="enquiry_form">
                <select className="form-control" name="branch" id="" onChange={handleChange} value={formData.branch}>
                  <option value="" selected disabled>Select Course Category</option>
                  {
                    courseCategory.map((item, index) =>
                      <option value={item.courseCategoryName}>{item.courseCategoryName}</option>
                    )
                  }
                </select>
              </div>
              <div className="enquiry_form">
                <select className="form-control" name="course" id="" onChange={handleChange} value={formData.course}>
                  <option value="" selected disabled>Select Course</option>
                 {
                  filteredCourses.length>0? (
                    filteredCourses.map((item, index) =>
                      <option value={item.courseName}>{item.courseName}</option>
                    )
                  ):(
                  <option value="NO Course Available">---NO Course Available---</option>
                )
                 }
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your Message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-md-12 mb-3 text-center">
                <button type="submit" className="button" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>

          {/* Show success/error message */}
          {success === true && <h2 className="text-success text-center">Inquiry Send successfully!</h2>}
          {success === false && <h2 className="text-danger text-center">Something went wrong. Please try again.</h2>}
        </div>
      </section>
    </>
  );
};

export default ReserveSeatForm;
