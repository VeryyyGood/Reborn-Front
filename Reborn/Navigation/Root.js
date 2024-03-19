import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Text,View} from "react-native";

import Tabs from "./Tabs";
import Stack from "./Stack";
import IntroStack from "./InstroStack";

const Nav = createNativeStackNavigator();

const Root = () => (
<Nav.Navigator screenOptions={{headerShown: false}}>
    <Nav.Screen name='IntroStack' component={IntroStack}/>
    <Nav.Screen name="Tabs" component={Tabs}/>
    <Nav.Screen name="Stack" component={Stack}/>
</Nav.Navigator>
);
export default Root;