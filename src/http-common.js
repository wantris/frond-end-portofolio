import axios from "axios";

export default axios.create({
  baseURL: "http://portofolio.bytetech.my.id/public/api",
  // headers: {
  //   "Content-type": "application/json"
  // }
});