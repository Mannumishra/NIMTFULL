import React from "react";
import Slider from "react-slick";
import "./studentsays.css";
import student1 from "../../Images/priya.avif"; // Ensure this path is correct
import student2 from "../../Images/gourav.jpeg"; // Ensure this path is correct
import student3 from "../../Images/neha.avif"; // Ensure this path is correct
import student4 from "../../Images/harsh.jpeg"; // Ensure this path is correct

const WhatStudentSays = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screens smaller than 480px (mobile phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Priya",
      role: "Business Management Graduate",
      feedback:
        "NIMT helped me gain the confidence and skills I needed to excel in my career. The courses are practical, and the support from instructors is unmatched!",
      image: student1,
    },
    {
      name: "Gourav",
      role: "Computer Science Student",
      feedback:
        "The resources and library access at NIMT are invaluable! I was able to deepen my understanding of complex topics, which made a huge difference in my studies.",
      image: student2,
    },
    {
      name: "Neha",
      role: "Marketing Certification Program",
      feedback:
        "Earning my certification at NIMT opened doors I hadn’t imagined. The flexibility and quality of the program made learning convenient and effective.",
      image: student3,
    },
    {
      name: "Harsh",
      role: "Engineering Student",
      feedback:
        "I loved the hands-on approach! My teachers were knowledgeable and encouraging, and I felt prepared to jump right into my industry.",
      image: student4,
    },
  ];

  return (
    <>
      <div className="studentsays">
        <div className="overlaystudent">
          <div className="container py-5">
            <div className="text-center text-white mb-5">
              <h2>
                <b>What Students Say</b>
              </h2>
              <p>Join a community where students achieve more, together!</p>
            </div>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <div
                    className="testimonial-card p-4"
                    style={{
                      backgroundColor: "rgb(23 31 50 / 55%)",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="quote d-flex justify-content-center">
                      <i
                        style={{
                          color: "hsl(14 98% 57% / 1)",
                          fontSize: "80px",
                        }}
                        className="bi bi-quote"
                      ></i>
                    </div>
                    <p className="mb-4">{testimonial.feedback}</p>
                    <div className="testimonial d-flex align-items-center text-start">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatStudentSays;
