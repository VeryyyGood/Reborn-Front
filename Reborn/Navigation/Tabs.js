import React from "react";
import { Text, View,TouchableOpacity,Image } from "react-native";
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
      options={{ tabBarLabel: "메인화면", headerShown: false, tabBarIcon: ({color}) => (
        <Image
          source={ require('../Assets/icons/tabIcons/homeicon.png') }
          style={{
            width: 20,
            height: 20,
            tintColor: color,
          }}
        /> )
      }}
    />
    <Tab.Screen
      name="Shared"
      component={ShareDrawers}
      options={{ headerShown: false,  tabBarLabel: "나눔게시판", tabBarStyle: { display: "none" }, tabBarIcon: ({color}) => (
        <Image
          source={ require('../Assets/icons/tabIcons/shardboardicon.png') }
          style={{
            width: 25,
            height: 25,
            tintColor: color,
          }}
        /> )}}
    />
    <Tab.Screen
      name="RediaryMain"
      component={RediaryMain}
      options={({navigation}) => ({
        tabBarStyle: { display: "none" }, title: "RE: DIARY",
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../Assets/icons/tabIcons/homeicon.png')}
                style={{marginLeft: "5%",width: 25, height: 25, tintColor: colors.palette.Brown}}
              />
          </TouchableOpacity>
        ),
        tabBarIcon: ({color}) => (
          <Image
            source={ require('../Assets/icons/tabIcons/rediaryicon.png') }
            style={{
              width: 18,
              height: 20,
              tintColor: color,
            }}
          /> )
        })}
    />
    <Tab.Screen
      name="MypageMain"
      component={MypageMainScreen}
      options={({navigation}) => ({
        tabBarStyle: { display: "none" }, title: "마이페이지",
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../Assets/icons/tabIcons/homeicon.png')}
                style={{marginLeft: "5%",width: 25, height: 25, tintColor: colors.palette.Brown}}
              />
          </TouchableOpacity>
        ),
        tabBarIcon: ({color}) => (
          <Image
            source={ require('../Assets/icons/tabIcons/mypageicon.png') }
            style={{
              width: 20,
              height: 20,
              tintColor: color,
            }}
          /> )
      })}
    />
  </Tab.Navigator>
);

export default Tabs;
