import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Text,View} from "react-native";

import Tabs from "./Tabs";
import Stack from "./Stack";

const Nav = createNativeStackNavigator();

const Root = () => (
<Nav.Navigator ScreenOptions={{headerShown: false}}>
    <Nav.Screen name="Tabs" component={Tabs}/>
    <Nav.Screen name="Stack" component={Stack}/>
</Nav.Navigator>
);
export default Root;