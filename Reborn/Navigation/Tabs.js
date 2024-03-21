import React from "react";
import { Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TestIntroScreen from '../Screens/SelfTestScreens/TestIntroScreen';
import MainScreen from '../Screens/MainScreen';
import ShareBoardScreen from '../Screens/ShareboardScreens/MainShareScreen';
import RediaryMain from "../Screens/ReDiaryScreens/RediaryMainScreen";
import MypageMainScreen from "../Screens/MyPageScreens/MypageMainScreen";


const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator screenOptions={{headerTitleAlign:"center"}}>
        <Tab.Screen name='Main' component={MainScreen} options={{ 
            headerTitleAlign: 'left',
            headerTitleStyle: { fontWeight: 'bold', },
            title: "REBORN 시작하기"}}/>
        <Tab.Screen name='Shared' component={ShareBoardScreen} options={{ tabBarStyle: { display: 'none'}, title: "나눔 게시판"}} />
        <Tab.Screen name='RediaryMain' component={RediaryMain} options={{ tabBarStyle: { display: 'none'}, title: "RE: Diary"}} />
        <Tab.Screen name='MypageMain' component={MypageMainScreen} options={{ tabBarStyle: { display: 'none'}, title: "마이페이지"}} />
    </Tab.Navigator>
)

export default Tabs;