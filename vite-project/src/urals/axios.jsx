import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Corrected property name to 'baseURL'
});

export default instance;
