import React from "react";
import newsmain1 from "../../Images/newsMain1.png";
import newsmain2 from "../../Images/news1.png";
import newsmain3 from "../../Images/news2.png";
import newsmain4 from "../../Images/news3.png";

import "./news.css";
const LatestNews = () => {
  return (
    <>
      <div className="latestNews">
        <div className="container my-5">
          <h2 className="text-center">OUR LATEST NEWS</h2>
          <p className="text-center text-muted">
            Stay informed with the latest updates and insights from NIMT! We are
            dedicated to bringing you relevant information to help you navigate
            your educational journey.
          </p>
          <hr className="w-25 mx-auto" />

          <div className="row mt-4">
            {/* Left large news card */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="newsBigImage">
                <div>
                  <img src={newsmain1} className="w-100" alt="" />
                </div>
                <div className="p-2 mt-3">
                  <p>
                    <span>
                      <i class="bi bi-calendar-check"></i> &nbsp;
                    </span>
                    September 15, 2024
                  </p>
                  <h3>New Course Launch</h3>
                  <p>
                    Exciting new courses in AI and Digital Marketing are
                    available.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain2} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>Upcoming Career Fair</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      October 1, 2024
                    </p>
                    <p>Join us on October 15 for our Annual Career Fair.</p>
                  </div>
                </div>
              </div>
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain3} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>Student Competition Success</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      October 10, 2024
                    </p>
                    <p>
                      Congratulations to our team for winning the Business Case
                      Competition!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain4} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>Skill Enhancement Workshop</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      October 12, 2024
                    </p>
                    <p>
                      Join our Effective Communication Skills workshop on
                      October 20.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
