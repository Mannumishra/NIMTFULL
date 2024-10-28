import React from "react";
import Hero from "../Hero/Hero";
import WelcomeNimt from "../WelcomeNimt/WelcomeNimt";
import OurCourses from "../OurCourses/OurCourses";
import OurAchievement from "../OurAchievement/OurAchievement";
import OurTeam from "../OurTeam/OurTeam";
import WhatStudentSays from "../WhatStudentSays/WhatStudentSays";
import LatestNews from "../LatestNews/LatestNews";
import CompanyLogos from "../CompanyLogos/CompanyLogos";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeNimt />
      <OurCourses />
      <OurAchievement />
      <OurTeam />
      <WhatStudentSays />
      <LatestNews />
      <CompanyLogos />
    </div>
  );
};

export default Home;
