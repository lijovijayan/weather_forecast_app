import { ICountry } from "../types";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";
import { SvgUri } from "react-native-svg";
interface Props {
  country: ICountry;
}
export function CountryCard({ country }: Props) {
  console.log(country.flag);
  return (
    <View style={[styles["d-flex"], styles["flex-row"], styles["w-100"]]}>
      <View style={[styles["d-flex"], styles["flex-column"]]}>
        <Text> capital : {country.capital}</Text>
        <Text> latlang : {country.latlng}</Text>
        <Text> population : {country.population}</Text>
      </View>
      <View
        style={{ width: 100, height: 100 }}>
      <SvgUri
        width="100%"
        height="100%"
        uri={country.flag}
      />
      </View>
    </View>
  );
}
