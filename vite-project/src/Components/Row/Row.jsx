import React, { useState, useEffect } from "react";
import axios from "../../urals/axios";
import "./row.css";
const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({ url }) => {
  const [row, setrow] = useState([]);
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

  return (
    <div className="posters">
      {row.map((movie) => (
        <img className="poster" src={`${baseURL}${movie.poster_path}`} />
      ))}
    </div>
  );
};

export default Row;
