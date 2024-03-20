import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text,View} from 'react-native';

import TestOneScreen from '../Screens/SelfTestScreens/TestOneScreen';
import ScreenTwo from '../Screens/SelfTestScreens/ScreenTwo';

//const ScreenOne = ({navigation: {navigate}}) => <View><Text>One</Text></View>
//const ScreenTwo = ({navigation: {navigate}}) => <View><Text>Two</Text></View>

const NativeStack = createNativeStackNavigator();

const Stack = () =>
<NativeStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <NativeStack.Screen name ='TestOne' component={TestOneScreen} options={{ title: "펫로스 증후군 자가 진단하기"}}/>
    <NativeStack.Screen name ='Two' component={ScreenTwo} options={{ title: "펫로스 증후군 자가 진단하기"}}/>
</NativeStack.Navigator>;

export default Stack;