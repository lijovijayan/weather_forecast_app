import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { IData, useFormInput } from "../hooks/form.hooks";
import { Country } from "../services/country.service";
import { styles } from "../styles";
import { ICountry } from "../types";

interface Props {
  navigation: any;
}
export function AppForm({ navigation }: Props) {
  const [formData, setCountryValue]: any = useFormInput();
  const onSubmitForm = async () => {
    try {
      const { data } = await Country.getCountryInfo(formData.inputText);
      const resultSet: ICountry[] = [];

      data?.forEach((country: any) => {
        resultSet.push({
          capital: country.capital,
          population: country.population,
          latlng: country.latlng,
          flag: country.flag,
        });
      });
      navigation.navigate("country-data", {
        countries: resultSet,
        navigation: navigation,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={[styles["d-flex"], styles["flex-column"], styles["p-10"]]}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter country"
          style={styles.input}
          value={formData.inputText}
          onChangeText={setCountryValue}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback onPress={onSubmitForm}>
          <View style={[styles.button]}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
