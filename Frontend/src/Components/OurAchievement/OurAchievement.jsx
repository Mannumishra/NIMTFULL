import React from "react";
import "./our_achievement.css";
import CountUp from "react-countup";
const OurAchievement = () => {
  return (
    <>
      <div className="our_achievement">
        <div className="overlay">
          <div className="container p-5">
            <div className="text-center">
              <h2>Our Achivement</h2>
              <p>
                Considering desire as primary motivation for the generation of
                narratives is a useful concept.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="text-center achievement">
                  <i className="bi bi-person-fill"></i>
                  <h3>
                    <CountUp duration={8} delay={1} end={2} />
                  </h3>
                  <h3>Teachers</h3>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center achievement">
                  <i className="bi bi-journals"></i>
                  <h3>
                    <CountUp duration={8} delay={1} end={2} />
                  </h3>
                  <h3>Courses</h3>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center achievement">
                  <i className="bi bi-mortarboard-fill"></i>
                  <h3>
                    <CountUp duration={8} delay={1} end={84} />
                  </h3>
                  <h3>Students</h3>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="text-center achievement">
                  <i className="bi bi-person-fill"></i>
                  <h3>
                    <CountUp duration={8} delay={1} end={441} />
                  </h3>
                  <h3>Companies</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAchievement;
