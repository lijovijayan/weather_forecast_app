import React, { useEffect } from "react";
import { Text, TextInput, TouchableNativeFeedback, View } from "react-native";
import { Country } from "../services/country.service";
import { Weather } from "../services/weather.service";
import { styles } from "../styles";
import { ICountry } from "../types";
import { CountryCard } from "./country_card";
interface Props {
  route: {
    params: {
      countries: ICountry[];
    };
  };
}
export function AppFormData({ route }: Props) {
  useEffect(() => {
    Weather.getWeatherByCapital('India');
  }, []);
  function renderCounties() {
    return route.params.countries.map((country, index) => (
      <CountryCard key={`country-${index}`} country={country} />
    ));
  }
  return (
    <View style={[styles["d-flex"], styles["flex-column"]]}>
      <Text> form data</Text>
      {renderCounties()}
    </View>
  );
}
