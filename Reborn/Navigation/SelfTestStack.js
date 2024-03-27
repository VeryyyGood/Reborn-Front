import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text,View} from 'react-native';

import TestOneScreen from '../Screens/SelfTestScreens/TestOneScreen';
import TestResultScreen from "../Screens/SelfTestScreens/TestResultScreen";
import TestIntroScreen from "../Screens/SelfTestScreens/TestIntroScreen";

//const ScreenOne = ({navigation: {navigate}}) => <View><Text>One</Text></View>
//const ScreenTwo = ({navigation: {navigate}}) => <View><Text>Two</Text></View>

const NativeStack = createNativeStackNavigator();

const SelfTestStack = () =>
<NativeStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <NativeStack.Screen name ='TestIntro' component={TestIntroScreen} options={{ title: "펫로스 증후군 자가 진단하기"}}/>
    <NativeStack.Screen name ='TestOne' component={TestOneScreen} options={{ title: "펫로스 증후군 자가 진단하기"}}/>
    <NativeStack.Screen name ='TestResult' component={TestResultScreen} options={{ title: "펫로스 증후군 자가 진단하기"}}/>
</NativeStack.Navigator>;

export default SelfTestStack;