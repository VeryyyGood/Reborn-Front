import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReviewReconnectScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewReconnectScreen";
import ReviewRemindScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewRemindScreen";
import ReviewRevealScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewRevealScreen";
import ReviewRememberScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewRememberScreen";
import ReviewRebornScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewRebornScreen";

const NativeStack = createNativeStackNavigator();

const ReviewStack = () =>
<NativeStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <NativeStack.Screen name = 'ReviewReconnect' component={ReviewReconnectScreen} options={{title: "리커넥트"}}/>
    <NativeStack.Screen name = 'ReviewRemind' component={ReviewRemindScreen} options={{title: "리마인드"}}/>
    <NativeStack.Screen name = 'ReviewReveal' component={ReviewRevealScreen} options={{title: "리빌"}}/>
    <NativeStack.Screen name = 'ReviewRemember' component={ReviewRememberScreen} options={{title: "리멤버"}}/>
    <NativeStack.Screen name = 'ReviewReborn' component={ReviewRebornScreen} options={{title: "리본"}}/>
</NativeStack.Navigator>;

export default ReviewStack;