import axios from "axios";
import { env } from "../environment";
import { stringFormat } from "../utils/utils";

export class Country {
  static getCountryInfo(name: string) {
    return axios.get(stringFormat(env.country.info, name));
  }
}
