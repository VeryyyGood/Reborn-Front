import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from "../Screens/RememberScreens/dog/FeedScreen";
import PetScreen from "../Screens/RememberScreens/dog/PetScreen";
import SnackScreen from "../Screens/RememberScreens/dog/SnackScreen";
import WalkScreen from "../Screens/RememberScreens/dog/WalkScreen";

const NativeRememberDogStack = createNativeStackNavigator();

const RememberDogStack = () => 
    <NativeRememberDogStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
        <NativeRememberDogStack.Screen name ='Pet' component={PetScreen} options={{title: "Day 00"}} />
        <NativeRememberDogStack.Screen name ='Feed' component={FeedScreen} options={{title: "Day 00"}} />
        <NativeRememberDogStack.Screen name ='Snack' component={SnackScreen} options={{title: "Day 00"}} />
        <NativeRememberDogStack.Screen name ='Walk' component={WalkScreen} options={{title: "Day 00"}} />
    </NativeRememberDogStack.Navigator>;

export default RememberDogStack;