import React, { useEffect } from "react";
import { Text, TextInput, TouchableNativeFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
  navigation: any,
}
export function AppFormData({ route, navigation }: Props) {
  function renderCounties() {
    return route.params.countries.map((country, index) => (
      <CountryCard
        key={`country-${index}`}
        country={country}
        navigation={navigation}
      />
    ));
  }
  return (
    <ScrollView>
      <View style={[styles["d-flex"], styles["flex-column"]]}>
        {renderCounties()}
      </View>
    </ScrollView>
  );
}
