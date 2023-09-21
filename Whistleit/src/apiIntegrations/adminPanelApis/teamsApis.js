import axios from "axios";

const BASE_URL = "http://10.0.10.112:8000";

export default class TeamsApis {
  // 1. to get all the teams from the database
  static async getAllTeams() {
    const res = await axios.get(`${BASE_URL}/getTeams`);
    return res.data;
  }
}
