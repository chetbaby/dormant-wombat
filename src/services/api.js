import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_MOVIES_PATH = "/search/movie";

const instantiateAxios = (baseURL) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.create({
    baseURL,
    headers,
    timeout: 30000,
    crossDomain: true,
    withCredentials: false,
  });
};

const create = () => {
  const axiosInstance = instantiateAxios(BASE_URL);

  const searchMovies = ({ query, currentPage }) => {
    console.log("==eh", query);
    const params = {
      query,
      api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
      page: currentPage || 1,
    };
    return axiosInstance.get(SEARCH_MOVIES_PATH, { params });
  };

  return {
    searchMovies,
  };
};

export default {
  create,
};
