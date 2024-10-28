import React, { useEffect, useState } from "react";
import newsmain1 from "../../Images/newsMain1.png";
import "./news.css";
import axios from "axios";

const LatestNews = () => {
  const [data, setData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null); // State for selected news

  const getApiData = async () => {
    try {
      const res = await axios.get("https://api.nimteducation.com/api/get-news");
      const DataReverse = res.data;
      setData(DataReverse.reverse());
      // Set the default selected news to the first item
      if (DataReverse.length > 0) {
        setSelectedNews(DataReverse[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // Function to format date in dd/mm/yyyy format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad with zero
    const year = date.getFullYear(); // Get full year
    return `${day}/${month}/${year}`; // Return formatted date
  };

  // Handler to update selected news on click
  const handleNewsClick = (item) => {
    setSelectedNews(item);
  };

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
                  <img src={selectedNews ? selectedNews.newsImage : newsmain1} className="w-100" alt="" />
                </div>
                <div className="p-2 mt-3">
                  <p>
                    <span>
                      <i className="bi bi-calendar-check"></i> &nbsp;
                    </span>
                    {selectedNews ? formatDate(selectedNews.newsDate) : '15/09/2024'}
                  </p>
                  <h3>{selectedNews ? selectedNews.newsHeading : 'New Course Launch'}</h3>
                  <p>
                    {selectedNews ? selectedNews.newsDetails : 'Exciting new courses in AI and Digital Marketing are available.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              {data.map((item, index) => (
                <div className="row newsSection" key={index} onClick={() => handleNewsClick(item)} style={{cursor:"pointer"}}>
                  <div className="col-md-4">
                    <img src={item.newsImage} className="w-100" alt={item.newsHeading} />
                  </div>
                  <div className="col-md-8">
                    <div>
                      <h5>{item.newsHeading}</h5>
                      <p>
                        <span>
                          <i className="bi bi-calendar-check"></i> &nbsp;
                        </span>
                        {formatDate(item.newsDate)}
                      </p>
                      <p>{item.newsDetails}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
