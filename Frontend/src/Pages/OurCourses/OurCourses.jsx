import React, { useEffect } from "react";

const OurCourses = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }, []); 
  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>OUR COURSES</h2>
            <p className="m-0">
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>OUR COURSES</span>
            </p>
          </div>
        </div>
      </div>
      <section className="coursesPage">
        <div className="row justify-content-center">
          {courses.map((course, index) => (
            <div className="col-md-6 col-lg-4 mb-3" key={index}>
              <div className="card border-0 shadow-sm">
                
                <img
                  src={course.imageUrl} 
                  alt={course.title}
                  className="card-img-top"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h6 className="card-title font-weight-bold text-center">
                    {course.title}
                  </h6>
                  <ul className="list-unstyled">
                    {course.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer d-flex justify-content-evenly text-center border-0">
                  <div>
                    <p>
                      <b>Course Duration</b>
                      <br />
                      {course.duration}
                    </p>
                  </div>
                  <div>
                    <b>Course Enrollment</b>
                    <br />
                    {course.enrollment}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-3">
            <button className="button">View all</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCourses;
