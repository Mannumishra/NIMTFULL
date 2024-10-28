import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import teacher from "../../Images/teacher1.png";
import ReserveSeatForm from "../../Components/ReserveSeatForm/ReserveSeatForm";
import "./webdesigning.css";
import axios from "axios";

const WebDesigning = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://ins.api.digiindiasolutions.com/api/get-single-course-details/" +
          id
      );
      console.log(res);
      setData(res.data.data); // Set API response data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <>
          <div className="breadcrump">
            <div className="breadcrumbOverlay">
              <div className="container">
                <h2>{data?.courseName?.courseName || "Loading..."}</h2>
                <p className="m-0">
                  <span>
                    <Link to="/">Home</Link>{" "}
                  </span>{" "}
                  / <span>Courses</span> /{" "}
                  <span>{data?.courseName?.courseName || "Loading..."}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-9">
                <div>
                  {data?.image && (
                    <img
                      src={data.image}
                      className="w-100"
                      alt={data?.courseName?.courseName}
                    />
                  )}
                  <div className="contentWidth">
                    <h2>Introduction</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.introduction }}
                    />
                  </div>
                  <div className="contentWidth">
                    <h2>Objectives</h2>
                    <p dangerouslySetInnerHTML={{ __html: data?.objectives }} />
                  </div>
                  <div className="contentWidth">
                    <h2>Brief Contents</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.briefContents }}
                    />
                  </div>
                  <div className="contentWidth">
                    <h2>Course Project</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.courseProject }}
                    />
                  </div>
                  <div className="contentWidth">
                    <h2>Certificate</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.certificate }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="webdesignSideSection">
              <img src={teacher} className="w-100" alt="Teacher" />
              <h3>Miss Maria</h3>
              <p>
                <b>Monthly Price:$28.55</b>
              </p>
              <button className="registerbtn">REGISTER YOURSELF</button>
            </div> */}
                <div className="webdesignSideSection">
                  <h2>Audience</h2>
                  <hr />
                  <p>{data.audience}</p>
                </div>
                <div className="webdesignSideSection">
                  <h2>Training Methodology</h2>
                  <hr />
                  <p>{data.trainingMethodology}</p>
                </div>
                <div className="webdesignSideSection">
                  <h2>Duration & Frequency</h2>
                  <hr />
                  <p>
                    <i className="bi bi-chevron-double-right"></i>{" "}
                    {data?.courseName?.courseDuration} Months
                  </p>
                  <p>
                    <i className="bi bi-chevron-double-right"></i> 3 sessions of
                    2 hours in a week.
                  </p>
                </div>
              </div>
            </div>
            <ReserveSeatForm />
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-center mt-5 mb-5">
            {" "}
            "Looks Like We Have No Courses Right Now"{" "}
          </h1>
        </div>
      )}
    </>
  );
};

export default WebDesigning;
