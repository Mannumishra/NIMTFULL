import React from "react";
import { Link } from "react-router-dom";

const DiplomaCourses = () => {
  return (
    <div>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>Diploma Courses</h2>
            <p className="m-0">
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>Courses</span> / <span>Diploma Courses</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaCourses;
