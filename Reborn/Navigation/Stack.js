import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text,View} from 'react-native';

import ScreenOne from '../Screens/SelfTestScreens/ScreenOne';
import ScreenTwo from '../Screens/SelfTestScreens/ScreenTwo';

//const ScreenOne = ({navigation: {navigate}}) => <View><Text>One</Text></View>
//const ScreenTwo = ({navigation: {navigate}}) => <View><Text>Two</Text></View>

const NativeStack = createNativeStackNavigator();

const Stack = () =>
<NativeStack.Navigator>
    <NativeStack.Screen name ='One' component={ScreenOne} />
    <NativeStack.Screen name ='Two' component={ScreenTwo} />
</NativeStack.Navigator>;

export default Stack;