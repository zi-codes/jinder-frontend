import globalUrl from "./globalUrl";

let axios = require("axios");

let axiosClient = axios.create({
  baseURL: globalUrl
});

export default axiosClient;
