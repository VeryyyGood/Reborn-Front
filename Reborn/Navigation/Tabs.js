import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme";

import TestIntroScreen from "../Screens/SelfTestScreens/TestIntroScreen";
import MainScreen from "../Screens/MainScreen";
import ShareBoardScreen from "../Screens/ShareboardScreens/MainShareScreen";
import RediaryMain from "../Screens/ReDiaryScreens/RediaryMainScreen";
import MypageMainScreen from "../Screens/MyPageScreens/MypageMainScreen";

import ShareDrawers from "./ShareDrawer";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.palette.Brown,
      headerTitleAlign: "center",
    }}
  >
    <Tab.Screen
      name="Main"
      component={MainScreen}
      options={{ tabBarLabel: "Home", headerShown: false }}
    />
    <Tab.Screen
      name="Shared"
      component={ShareDrawers}
      options={{ headerShown: false, tabBarStyle: { display: "none" } }}
    />
    <Tab.Screen
      name="RediaryMain"
      component={RediaryMain}
      options={{ tabBarStyle: { display: "none" }, title: "RE: Diary" }}
    />
    <Tab.Screen
      name="MypageMain"
      component={MypageMainScreen}
      options={{ tabBarStyle: { display: "none" }, title: "마이페이지" }}
    />
  </Tab.Navigator>
);

export default Tabs;
