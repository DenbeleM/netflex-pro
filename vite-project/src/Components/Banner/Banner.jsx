import React, { useEffect, useState } from "react";
import requests from "../../urals/request";
import axios from "../../urals/axios";
import "./banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    const fethdata = async () => {
      try {
        const responses = await axios.get(requests.netflex_orignals); // Potential issue here
        setmovie(
          responses.data.results[
            Math.floor(Math.random() * responses.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error, "error");
      }
    };

    fethdata();
  }, []);
  console.log(movie);
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="mov">
        <div className="title">
          {movie?.name || movie?.title || movie?.original_name}
        </div>
        <div className="mov-button">
          <button className="play">Play</button>
          <button className="mylist">My List</button>
        </div>
      </div>
    </>
  );
};
export default Banner;
