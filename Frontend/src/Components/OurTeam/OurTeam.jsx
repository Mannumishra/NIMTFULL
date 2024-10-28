import React from "react";
import team1 from "../../Images/teamMember1.jpg";
import team2 from "../../Images/teamMember2.jpg";
import team3 from "../../Images/teamMember3.jpg";
const OurTeam = () => {
  return (
    <>
      <div className="our_team py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>
              <b>Our team</b>
            </h2>
            <p>
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed
              nec molestie justo.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="card">
                <div>
                  <img className="w-100" src={team1} alt="team member images" />
                </div>
                <div className="text-center mt-2">
                  <h4>Aden Hezard</h4>
                  <p>Ast. Professior</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div>
                  <img className="w-100" src={team2} alt="team member images" />
                </div>
                <div className="text-center mt-2">
                  <h4>Jordan Lukako</h4>
                  <p>Professior</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div>
                  <img className="w-100" src={team3} alt="team member images" />
                </div>
                <div className="text-center mt-2">
                  <h4>Luis Figo</h4>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
