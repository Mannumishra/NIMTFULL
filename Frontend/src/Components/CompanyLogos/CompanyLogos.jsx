import React from "react";
import companylogo1 from "../../Images/companyImage1.png";
import companylogo2 from "../../Images/companyImage2.png";
import companylogo3 from "../../Images/companyImage3.png";
import companylogo4 from "../../Images/companyImage4.png";
import companylogo5 from "../../Images/companyImage5.png";

const CompanyLogos = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5 justify-content-center">
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <img src={companylogo1} className="img-fluid" alt="brand Images" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <img src={companylogo2} className="img-fluid" alt="brand Images" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <img src={companylogo3} className="img-fluid" alt="brand Images" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <img src={companylogo4} className="img-fluid" alt="brand Images" />
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <img src={companylogo5} className="img-fluid" alt="brand Images" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogos;
