import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://anapioficeandfire.com/api",
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axios;
