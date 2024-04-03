import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import ReturnScreen from "../Screens/ReturnScreen";
import { colors } from "../theme";

const NativeReturnStack = createNativeStackNavigator();

const CustomHeaderTitle = () => (
    <Text>
      <Text style={{ color: colors.palette.Brown, fontFamily: 'Poppins-Bold', fontSize: 18 }}>RE</Text>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18 }}>TURN</Text>
    </Text>
  );

const ReturnStack = () => 
    <NativeReturnStack.Navigator screenOptions={{headerShown: true}}>
        <NativeReturnStack.Screen name ='Return' component={ReturnScreen} options={{headerTitle: () => <CustomHeaderTitle/>}}/>
    </NativeReturnStack.Navigator>;

export default ReturnStack;