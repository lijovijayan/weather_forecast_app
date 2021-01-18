import { ICountry } from "../types";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";
import { SvgUri } from "react-native-svg";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Weather } from "../services/weather.service";
interface Props {
  country: ICountry;
  navigation: any;
}
export function CountryCard({ country, navigation }: Props) {
  async function getWeatherData(capital: string) {
    try {
      const { data } = await Weather.getWeatherByCapital(capital);
      console.log(data.current);
      const weather = {
        temperature: data.current.temperature,
        weather_icon: data.current.weather_icons[0],
        wind_speed: data.current.wind_speed,
        precip: data.current.precip,
      };
      navigation.navigate("weather-data", {
        weather: weather,
      });
      console.log(weather);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.cardContainer}>
      <View style={[styles["d-flex"], styles["flex-column"]]}>
        <View
          style={[
            styles["d-flex"],
            styles["flex-row"],
            styles["w-100"],
            styles.card,
          ]}
        >
          <View style={[styles["d-flex"], styles["flex-column"]]}>
            <Text> capital : {country.capital}</Text>
            <Text> latlang : {country.latlng}</Text>
            <Text> population : {country.population}</Text>
          </View>
          <View style={styles["flex-1"]} />
          <View style={{ width: 100, height: 100 }}>
            <SvgUri width="100%" height="100%" uri={country.flag} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              getWeatherData(country.capital);
            }}
          >
            <View style={[styles.button]}>
              <Text style={styles.buttonText}>Capital Weather</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}
