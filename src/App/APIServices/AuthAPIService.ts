// import axios from 'axios';
import { parseJsonString, axiosFetch } from "@api/axiosFetch";
import { ENDPOINT, WEBURL } from "../Configs/constants";

import { http } from "./fetch";

import { LoggerService } from "@libs/LoggerService";

export class AuthAPIService {
  public static async login(email: string, password: string) {
    try {
      AuthAPIService.logger.info("AuthService.login() ", { email, password });
      const res = await axiosFetch.post("/auth/login", {
        password,
        username: email
      });
      AuthAPIService.logger.info("Login successfully ", res);
      return res;
    } catch (err) {
      AuthAPIService.logger.info("Login unsuccessful ", err);
      throw err;
    }
  }

  private static logger = new LoggerService();
}
