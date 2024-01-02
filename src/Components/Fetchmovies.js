import React, { useState, useEffect } from "react";
import "./movies.css";

function Fetchmovies({ genre }) {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  });

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <p
          style={{
            color: "#878787",
            marginLeft: "70px",
            fontSize: "19px",
            fontFamily: "Roboto",
            letterSpacing: "0.5px",
          }}
        >
          {genre}
        </p>

        <div style={{ overflow: "auto" }}>
          <div style={{ display: "flex", marginLeft: "43px" }}>
            {movies.map((movie, index) => {
              return (
                <div key={index} style={{ width: "20vw", margin: "2vw" }}>
                  <img
                    alt="movieimage"
                    src={movie?.primaryImage?.url}
                    style={{
                      objectFit: "cover",
                      width: "20vw",
                      height: "15vh",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetchmovies;
