import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text,View} from 'react-native';

import { colors } from "../theme";

import RediaryMainScreen from "../Screens/ReDiaryScreens/RediaryMainScreen";
import RediaryWriteScreen from "../Screens/ReDiaryScreens/RediaryWriteScreen";

const RediaryStacks = createNativeStackNavigator();

const RediaryTitle = () => (
    <Text>
      <Text style={{ color: colors.palette.Brown, fontFamily: 'Poppins-Bold', fontSize: 18 }}>RE:</Text>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18 }}> Diary</Text>
    </Text>
  );

const RediaryStack = () =>
<RediaryStacks.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <RediaryStacks.Screen name = 'RediaryMain' component={RediaryMainScreen} options={{headerTitle: () => <RediaryTitle/>}} />
    <RediaryStacks.Screen name = 'RediaryWrite' component={RediaryWriteScreen} options={{headerTitle: () => <RediaryTitle/>}} />
</RediaryStacks.Navigator>

export default RediaryStack;