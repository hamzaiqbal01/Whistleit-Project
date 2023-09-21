import axios from "axios";

const BASE_URL = "http://10.0.10.112:8000";

export default class UserApis {
  // 1. to get all the posts from the database
  static async getAllUsers() {
    const res = await axios.get(`${BASE_URL}/show`);
    return res.data;
  }
}
