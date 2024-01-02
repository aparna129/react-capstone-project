import React, { useState, useEffect } from "react";
import "./Notesnews.css";
import line from "../images/line.png";
import pressureicon from "../images/pressureicon.png";
import humidityicon from "../images/humidityicon.png";
import windicon from "../images/windicon.png";

function Weather() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=9eba8487c0b8425d9e4131249233112&q=London&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  }, []);
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = mm + "-" + dd + "-" + yyyy;
    setDate(formattedToday);
  }, []);
  return (
    <div>
      <div className="weather">
        <div className="section-1">
          <div className="date-time">
            <p className="weather-date-time">{date}</p>
          </div>
          <div className="date-time">
            <p className="weather-date-time">{time}</p>
          </div>
        </div>
        <div>
          {weather ? (
            <div className="section-2">
              <div className="icon-text" style={{ backgroundColor: "#101744" }}>
                <img alt="weathericon"
                  style={{
                    backgroundColor: "#101744",
                    height: "30px",
                    width: "30px",
                  }}
                  src={weather.current.condition.icon}
                />
                <p style={{ backgroundColor: "#101744" }}>
                  {weather.current.condition.text}
                </p>
              </div>
              <div className="line" style={{ backgroundColor: "#101744" }}>
                <img style={{ backgroundColor: "#101744" }} alt="line" src={line} />
              </div>
              <div className="pressure" style={{ backgroundColor: "#101744" }}>
                <p
                  style={{
                    backgroundColor: "#101744",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginLeft: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  {weather.current.temp_c}°C
                </p>
                <div
                  style={{ backgroundColor: "#101744" }}
                  className="pressure-icon-text"
                >
                  <div style={{ backgroundColor: "#101744" }}>
                    <p style={{ backgroundColor: "#101744" }}>
                      <img
                        style={{ backgroundColor: "#101744", marginTop: "5px" }}
                        src={pressureicon} alt="pressureicon"
                      />
                    </p>
                  </div>
                  <div style={{ marginLeft: "8px" }}>
                    {" "}
                    <p style={{ backgroundColor: "#101744" }}>
                      {weather.current.pressure_mb} mbar
                    </p>
                    <p style={{ backgroundColor: "#101744" }}>Pressure</p>
                  </div>
                </div>
              </div>
              <div className="line" style={{ backgroundColor: "#101744" }}>
                <img style={{ backgroundColor: "#101744" }}  alt="line" src={line} />
              </div>
              <div className="wind" style={{ backgroundColor: "#101744" }}>
                <div style={{ backgroundColor: "#101744" }} className="wind-icon-text">
                  <div style={{ backgroundColor: "#101744" }}>
                    <p style={{ backgroundColor: "#101744" }}>
                      <img
                        style={{ backgroundColor: "#101744" }}
                        src={windicon} alt="windicon"
                      />
                    </p>
                  </div>
                  <div style={{marginLeft:"10px", backgroundColor: "#101744" }}>
                    <p style={{ backgroundColor: "#101744" }}> {weather.current.wind_kph} km/hr</p>
                    <p style={{ backgroundColor: "#101744" }}>Wind</p>
                  </div>
                </div>
                <div style={{ backgroundColor: "#101744" }} className="humidity-icon-text">
                  <div style={{ backgroundColor: "#101744" }}>
                    <p style={{ backgroundColor: "#101744" }}>
                      <img
                        style={{ backgroundColor: "#101744",marginLeft:"5px" }}
                        src={humidityicon} alt="humidityicon"
                      />
                    </p>
                  </div>
                  <div style={{marginLeft:"18px", backgroundColor: "#101744" }}>
                    <p style={{ backgroundColor: "#101744" }}> {weather.current.humidity}%</p>
                    <p style={{ backgroundColor: "#101744" }}>Humidity</p>
                  </div>
                </div>
               
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;

