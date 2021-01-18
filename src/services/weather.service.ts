import axios from "axios";
import { env } from "../environment";
import { stringFormat } from "../utils/utils";
const API_KEY = `c409c7f96d24f295df95060eeffdeb0f`;
export class Weather {
  static getWeatherByCapital(capital: string) {
    return axios.get(stringFormat(env.weather.capital, API_KEY, capital));
  }
}
