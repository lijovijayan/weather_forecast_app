import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppForm} from '../components/form';
import { AppFormData } from '../components/country-details';

const Stack = createStackNavigator();

export function NavigationWrapper() {
  return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="form" component={AppForm}></Stack.Screen>
        <Stack.Screen name="country-data" component={AppFormData}></Stack.Screen>
        <Stack.Screen name="weather-data" component={AppFormData}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
