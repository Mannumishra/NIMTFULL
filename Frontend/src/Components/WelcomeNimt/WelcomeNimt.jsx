import React from "react";
import welcomeImage from "../../Images/welcomeNimt.png";
import "./welcome.css";
const WelcomeNimt = () => {
  return (
    <>
      <div className="welcome_Nimt py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="heading mb-5">
                WELCOME <span className="text-black">TO NIMT</span>
              </h2>
              <p>
                The ship set ground on the shore of this uncharted desert isle
                with Gilligan the Skipper too the millionaire and his wife.
                These days are all Happy and Free. These days are all share them
                with me.
              </p>
              <p>
                It’s time to put on makeup. It’s time to dress up right. It’s
                time to raise the curtain on the Muppet Show tonight.
              </p>
              <div className="nimtExperienced">
                <div>
                  <i class="bi bi-pencil-fill"></i>
                  <p className="mb-0 mt-3">
                    <b>Experienced</b>
                  </p>
                  <p>
                    <b>Faculity</b>
                  </p>
                </div>
                <div>
                  <i class="bi bi-mortarboard-fill"></i>
                  <p className="mb-0 mt-3">
                    <b>Popular Online</b>
                  </p>
                  <p>
                    <b>Courses</b>
                  </p>
                </div>
                <div>
                  <i class="bi bi-mic-fill"></i>
                  <p className="mb-0 mt-3">
                    <b>Guranteed</b>
                  </p>
                  <p>
                    <b>Career Security</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={welcomeImage} className="w-100" alt="Welcome NIMT" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeNimt;
