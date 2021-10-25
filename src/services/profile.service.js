import http from "../http-common";

class ProfileDataService {
  get() {
    return http.get("/profile");
  }
}

export default new ProfileDataService();