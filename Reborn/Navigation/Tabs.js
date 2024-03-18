import React from "react";
import { Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TestIntroScreen from '../Screens/TestIntroScreen';
import MainScreen from '../Screens/MainScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator>
        <Tab.Screen name='Main' component={MainScreen}/>
        <Tab.Screen name='TestInstro' component={TestIntroScreen}/>
    </Tab.Navigator>
)

export default Tabs;