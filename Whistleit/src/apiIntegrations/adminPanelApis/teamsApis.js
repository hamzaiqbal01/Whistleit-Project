import axios from "axios";
import {BASE_URL} from "./usersApis"

export default class TeamsApis {
  // 1. to get all the teams from the database
  static async getAllTeams() {
    const res = await axios.get(`${BASE_URL}/getTeams`);
    return res.data;
  }
}
