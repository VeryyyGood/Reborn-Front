import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RemindIntroScreen from "../Screens/RebornScreens/dog/RemindIntroScreen";
import FeedScreen from "../Screens/RebornScreens/dog/FeedScreen";
import PetScreen from "../Screens/RebornScreens/dog/PetScreen";
import SnackScreen from "../Screens/RebornScreens/dog/SnackScreen";
import WalkScreen from "../Screens/RebornScreens/dog/WalkScreen";

const NativeRebornDogStack = createNativeStackNavigator();

const RebornDogStack = () => (
  <NativeRebornDogStack.Navigator
    screenOptions={{ headerTitleAlign: "center" }}
  >
    <NativeRebornDogStack.Screen
      name="Intro"
      component={RemindIntroScreen}
      options={{ title: "Day 00" }}
    />
    <NativeRebornDogStack.Screen
      name="Pet"
      component={PetScreen}
      options={{ title: "Day 00" }}
    />
    <NativeRebornDogStack.Screen
      name="Feed"
      component={FeedScreen}
      options={{ title: "Day 00" }}
    />
    <NativeRebornDogStack.Screen
      name="Snack"
      component={SnackScreen}
      options={{ title: "Day 00" }}
    />
    <NativeRebornDogStack.Screen
      name="Walk"
      component={WalkScreen}
      options={{ title: "Day 00" }}
    />
  </NativeRebornDogStack.Navigator>
);

export default RebornDogStack;
