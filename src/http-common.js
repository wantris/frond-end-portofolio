import axios from "axios";

export default axios.create({
  baseURL: "https://portofolio.bytetech.my.id/public/api",
  // headers: {
  //   "Content-type": "application/json"
  // }
});