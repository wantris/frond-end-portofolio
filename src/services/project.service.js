import http from "../http-common";

class ProjectDataService {
  get() {
    return http.get("/project");
  }
}

export default new ProjectDataService();