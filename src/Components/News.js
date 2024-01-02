import React, { useState, useEffect } from "react";
import line2 from "../images/line2.png";

function News() {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=77249fd35ea840bba12b52bc72403e7f"
        );
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
    console.log(news);
  });

  useEffect(() => {
    const dateObj = new Date();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = formattedHours + ":" + formattedMinutes + " " + ampm;
    setTime(strTime);
  }, []);

  useEffect(() => {
    const dateObj = new Date();
    const yyyy = dateObj.getFullYear();
    let mm = dateObj.getMonth() + 1;
    let dd = dateObj.getDate();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  }, []);

  return (
    <div>
      <div className="news">
        {news ? (
          <div style={{ backgroundColor: "white" }}>
            <div style={{ backgroundColor: "white" }}>
              <div className="news-image">
                <img
                  height="100%"
                  width="100%"
                  src={news.urlToImage}
                  alt="News"
                />

                <div>
                  <div
                    style={{ background: "rgba(0, 0, 0, 0.74)" }}
                    className="news-title"
                  >
                    <p
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "20px",
                        marginTop: "18px",
                        marginRight: "20px",
                      }}
                    >
                      {news.title}
                    </p>

                    <div
                      style={{
                        backgroundColor: "transparent",
                      }}
                      className="date-time-news"
                    >
                      <div
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <p
                          style={{
                            marginLeft: "22px",
                            backgroundColor: "transparent",
                          }}
                        >
                          {date}
                        </p>
                      </div>

                      <div
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <img
                          alt="line2"
                          style={{
                            backgroundColor: "transparent",
                          }}
                          src={line2}
                        />
                      </div>

                      <div
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <p
                          style={{
                            backgroundColor: "transparent",
                          }}
                        >
                          {time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="news-description"
            >
              <p style={{ backgroundColor: "white", color: "black" }}>
                {news.description}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default News;
