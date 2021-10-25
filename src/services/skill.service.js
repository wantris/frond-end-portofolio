import http from "../http-common";

class SkillDataService {
  get() {
    return http.get("/skill");
  }
}

export default new SkillDataService();