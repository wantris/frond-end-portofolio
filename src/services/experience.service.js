import http from "../http-common";

class ExperienceDataService {
  get() {
    return http.get("/experience");
  }
}

export default new ExperienceDataService();