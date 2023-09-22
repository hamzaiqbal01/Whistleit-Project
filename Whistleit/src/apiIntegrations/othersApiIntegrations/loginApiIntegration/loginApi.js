import axios from "axios";
import { BASE_URL } from "../../adminPanelApis/usersApis";

export default class LoginApis {
  // 1. to login the user
  static async loginUser(loggedInUserCredentials) {
    const res = await axios.post(`${BASE_URL}/login`, loggedInUserCredentials);
    console.log(res.data);
    return res.data;
  }
}
