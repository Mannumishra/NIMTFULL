import React, { useEffect, useState } from "react";
import "./Gallery.css"
import image1 from "../../Images/teamMember1.jpg";
import image2 from "../../Images/teamMember2.jpg";
import image3 from "../../Images/teamMember3.jpg";
import image4 from "../../Images/news1.png";
import image5 from "../../Images/news2.png";
import image6 from "../../Images/news3.png";
import { Link } from "react-router-dom";
import axios from "axios"

const Gallery = () => {
  const [data,setData] = useState([])

  const getApiData = async()=>{
    try {
      const res = await axios.get("https://api.nimteducation.com/api/get-gallery")
      const Datareverse = res.data.data 
      setData(Datareverse.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{getApiData()},[])

  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>Gallery</h2>
            <p className="m-0">
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>Gallery</span>
            </p>
          </div>
        </div>
      </div>

      <section className="container mt-3">
        <div className="row">
          {data.map((image, index) => (
            <div className="col-md-4 col-6 mb-3" key={index}>
              <img src={image.image} alt={`Gallery item ${index + 1}`} className="img-fluid selfcss" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
