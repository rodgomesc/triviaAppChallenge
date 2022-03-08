import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

export type RootStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const defaultScreenOptions = {
  headerShown: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
