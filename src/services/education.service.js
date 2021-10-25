import http from "../http-common";

class EducationDataService {
  get() {
    return http.get("/education");
  }
}

export default new EducationDataService();