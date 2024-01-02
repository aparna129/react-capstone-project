import React from "react";
import "./Notesnews.css";
import Profile from "./Profile";
import Weather from "./Weather";
import Notes from "./Notes";
import Timer from "./Timer";
import News from "./News";
import { useNavigate } from "react-router-dom";

function Notesnews() {
  const navigate = useNavigate();

  function navigator() {
    navigate("/movies");
  }

  return (
    <div className="notes-news-timer">
      <div className="flex1">
        <div className="flex2">
          <div className="flex1">
            <div>
              <Profile />
              <Weather />
            </div>
            <div>
              <Notes />
            </div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <div>
          <News />
        </div>
      </div>
      <button onClick={navigator} className="browse-btn">
        Browse
      </button>
    </div>
  );
}

export default Notesnews;
