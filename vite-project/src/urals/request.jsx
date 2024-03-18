import axios from "./axios";
const apikey = "2d717dd4a3389518752605e096cbdebd";

const requests = {
  netflex_orignals: `/discover/tv?api_key=${apikey}&with_networks=213`,
  popular: `/movie/popular?api_key=${apikey}`,
  top: `/movie/top_rated?api_key=${apikey}`,
  movie: `/discover/movie?api_key=${apikey}&with_genres=28`,
};
export default requests;
