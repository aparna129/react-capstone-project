import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import action from "../images/action.png";
import drama from "../images/drama.png";
import romance from "../images/romance.png";
import thriller from "../images/thriller.png";
import western from "../images/western.png";
import horror from "../images/horror.png";
import fantasy from "../images/fantasy.png";
import music from "../images/music.png";
import fiction from "../images/fiction.png";
import errorimage from "../images/errorimage.png";

function Category() {
  const [genre, setGenre] = useState([
    {
      id: "Action",
      color: "#ff5209",
      image: <img src={action} />,
      isClicked: false,
    },
    {
      id: "Drama",
      color: "#d7a4ff",
      image: <img src={drama} />,
      isClicked: false,
    },
    {
      id: "Romance",
      color: "#11b800",
      image: <img src={romance} />,
      isClicked: false,
    },
    {
      id: "Thriller",
      color: "#84c2ff",
      image: <img src={thriller} />,
      isClicked: false,
    },
    {
      id: "Western",
      color: "#902500",
      image: <img src={western} />,
      isClicked: false,
    },
    {
      id: "Horror",
      color: "#7358ff",
      image: <img src={horror} />,
      isClicked: false,
    },
    {
      id: "Fantasy",
      color: "#ff4ade",
      image: <img src={fantasy} />,
      isClicked: false,
    },
    {
      id: "Music",
      color: "#e61e32",
      image: <img src={music} />,
      isClicked: false,
    },
    {
      id: "Fiction",
      color: "#6cd061",
      image: <img src={fiction} />,
      isClicked: false,
    },
  ]);

  const [selectedGenre, setSelectedGenre] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function navigator() {
    localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
    navigate("/notesnews");
  }

  function handleNextPageButton() {
    if (selectedGenre.length < 3) {
      setError(true);
    } else {
      setError(false);
      navigator();
    }
  }

  const handleSelectedCategory = (index) => {
    const updatedGenre = [...genre];
    updatedGenre[index] = {
      ...updatedGenre[index],
      isClicked: !updatedGenre[index].isClicked,
    };
    const selectedId = updatedGenre[index].id;
    if (!selectedGenre.includes(selectedId) && updatedGenre[index].isClicked) {
      setSelectedGenre([...selectedGenre, selectedId]);
    } else {
      setSelectedGenre((prevSelected) =>
        prevSelected.filter((id) => id !== selectedId)
      );
    }
    setGenre(updatedGenre);
  };

  const handleCross = (selectedGenreName) => {
    setSelectedGenre((prevSelectedGenre) =>
      prevSelectedGenre.filter((genreName) => genreName !== selectedGenreName)
    );
    setGenre((prevGenre) =>
      prevGenre.map((genres) =>
        genres.id === selectedGenreName
          ? { ...genres, isClicked: false }
          : genres
      )
    );
  };

  return (
    <div className="category-body">
      <div className="flex1">
        <div>
          <p className="t1">Super App</p>
          <p className="t2">
            Choose your <p>entertainment</p>
            <p>category</p>{" "}
          </p>
          <div className="selected-genre">
            {selectedGenre.map((genreName, index) => (
              <span key={index} className="genre-item">
                <p className="genre-name" key={index}>
                  {genreName}{" "}
                  <span
                    onClick={() => handleCross(genreName)}
                    className="cross"
                  >
                    X
                  </span>
                </p>
              </span>
            ))}
          </div>
          {error ? (
            <div className="error">
              {" "}
              <img src={errorimage} height="19px" width="20px" />
              <span className="error-text">Minimum 3 category required</span>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div className="genres-container">
          {genre.map((genreItem, index) => (
            <div key={index} onClick={() => handleSelectedCategory(index)}>
              <div
                className="genre-box"
                style={{
                  backgroundColor: genreItem.color,
                  border: genreItem.isClicked ? "5px solid green" : "none",
                }}
              >
                <p className="genre-id">{genreItem.id}</p>
                <div className="genre-image">{genreItem.image}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextPageButton} className="btn">
        Next Page{" "}
      </button>
    </div>
  );
}

export default Category;
