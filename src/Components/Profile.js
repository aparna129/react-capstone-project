import React, { useState, useEffect } from "react";
import "./Notesnews.css";
import profilepic from "../images/profilepic.png";

function Profile() {
  const [userData, setUserData] = useState({});
  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    const storedSelectedGenre = JSON.parse(
      localStorage.getItem("selectedGenre")
    );
    if (storedSelectedGenre) {
      setSelectedGenre(storedSelectedGenre);
    }
  }, []);

  return (
    <div>
      <div className="profile">
        <div className="user-info">
          <div style={{ backgroundColor: "#5746ea" }}>
            <img alt="profilepic"
              className="profilepic"
              style={{ backgroundColor: "#5746ea" }}
              height="170px"
              width="100px"
              src={profilepic}
            ></img>
          </div>
          <div className="userData" style={{ backgroundColor: "#5746ea" }}>
            <div style={{ backgroundColor: "#5746ea" }}>
              <p className="commonstyle">{userData.name}</p>
              <p className="commonstyle">{userData.email}</p>
              <p className="profile-username commonstyle">
                {userData.username}
              </p>
            </div>
            <div
              className="selectedgenre"
              style={{ backgroundColor: "#5746ea" }}
            >
              {selectedGenre.map((genre, index) => (
                <p className="genres">{genre}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
