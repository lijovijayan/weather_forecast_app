import React, { useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import { Country } from "../services/country.service";
import { Weather } from "../services/weather.service";
import { styles } from "../styles";
import { ICountry, IWeather } from "../types";
import { CountryCard } from "./country_card";
interface Props {
  route: {
    params: {
      weather: IWeather;
    };
  };
}
export function WeatherData({ route }: Props) {
  const weather = route.params.weather;
  return (
    <View
      style={[
        styles["d-flex"],
        styles["flex-row"],
        styles["w-100"],
        styles.card,
      ]}
    >
      <View style={[styles["d-flex"], styles["flex-column"]]}>
        <Text> precip : {weather.precip}</Text>
        <Text> temperature : {weather.temperature}</Text>
        <Text> wind_speed : {weather.wind_speed}</Text>
      </View>
      <View style={styles["flex-1"]} />
      <Image
        source={{
          uri: weather.weather_icon,
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
