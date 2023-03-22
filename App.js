import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screen/Home";
import Detailitem from "./screen/Detailitem";
import Profile from "./screen/Profile";
import Informasi from "./screen/Informasi";
import SejarahITERA from "./screen/SejarahITERA";
import FasilitasITERA from "./screen/FasilitasITERA";
import MarsITERA from "./screen/MarsITERA";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Informasi"
          component={Informasi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detailitem"
          component={Detailitem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SejarahITERA"
          component={SejarahITERA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MarsITERA"
          component={MarsITERA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FasilitasITERA"
          component={FasilitasITERA}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}