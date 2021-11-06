import axios from "axios";

export default axios.create({
  baseURL: "https://wacikapi.bytetech.my.id/public/api",
  // headers: {
  //   "Content-type": "application/json"
  // }
});