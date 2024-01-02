import React, { useState, useEffect } from "react";
import "./movies.css";
import profileicon from "../images/profileicon.png";
import { useNavigate } from "react-router-dom";
import Fetchmovies from "./Fetchmovies";

function Movies() {
  const [selectedGenre, setSelectedGenre] = useState([]);
  useEffect(() => {
    const storedSelectedGenre = JSON.parse(
      localStorage.getItem("selectedGenre")
    );
    if (storedSelectedGenre) {
      setSelectedGenre(storedSelectedGenre);
    }
  }, []);

  const navigate = useNavigate();

  function navigator() {
    navigate("/notesnews");
  }

  return (
    <div className="movie">
      <div className="header-movies">
        <div>
          <p className="heading-movies">Super App</p>
        </div>
        <div>
          <img alt="profileicon"
            onClick={navigator}
            className="profile-icon"
            height="40px"
            width="40px"
            src={profileicon}
          />
        </div>
      </div>
      <div className="subheading">
        <p className="subheading-movies">
          Entertainment according to your choice
        </p>
      </div>
      <div style={{ overflow: "auto", height: "88vh" }}>
        {selectedGenre.map((genre, index) => (
          <Fetchmovies genre={genre} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
