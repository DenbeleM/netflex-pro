import React, { useState, useEffect } from "react";
import axios from "../../urals/axios";
import "./row.css";
const baseURL = "https://image.tmdb.org/t/p/original";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ url, title, islargerow }) => {
  const [row, setrow] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responses = await axios.get(url);
        setrow(responses.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [url]);
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || movie.title || movie.original_name)
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          setTrailerUrl(params.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="title">{title}</div>
      <div className="posters">
        {row.map((movie) => (
          <>
            <img
              onClick={() => handleClick(movie)}
              className={`poster ${islargerow && "islargerow"}`}
              src={`${baseURL}${
                islargerow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          </>
        ))}
      </div>

      <div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
};

export default Row;
