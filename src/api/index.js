import axios from "axios";

const instance = axios.create({
  baseURL: "https://dao-json-server.herokuapp.com/",
});

export default instance;
