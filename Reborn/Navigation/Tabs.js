import React from "react";
import { Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TestIntroScreen from '../Screens/SelfTestScreens/TestIntroScreen';
import MainScreen from '../Screens/MainScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator screenOptions={{headerTitleAlign:"center"}}>
        <Tab.Screen name='Main' component={MainScreen} options={{ title: "메인 화면"}}/>
        <Tab.Screen name='TestIntro' component={TestIntroScreen} 
        options={{tabBarStyle: { display: 'none'},
        title: "펫로스 증후군 자가진단하기"}}/>
    </Tab.Navigator>
)

export default Tabs;