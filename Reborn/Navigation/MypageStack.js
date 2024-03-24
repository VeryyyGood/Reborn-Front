import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountManagementScreen from "../Screens/MyPageScreens/AccountManagementScreen";
import PetProfileManagementScreen from "../Screens/MyPageScreens/PetProfileManagementScreen";
import ReviewMainScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewMainScreen";
import ExpertScreen from "../Screens/MyPageScreens/ExpertScreen";

const NativeStack = createNativeStackNavigator();

const MypageStack = () =>
<NativeStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <NativeStack.Screen name = 'AccountManagement' component={AccountManagementScreen} options={{title: "계정관리"}}/>
    <NativeStack.Screen name = 'PetProfileManagement' component={PetProfileManagementScreen} options={{title: "반려동물프로필"}}/>
    <NativeStack.Screen name = 'ReviewMain' component={ReviewMainScreen} options={{title: "리뷰메인"}}/>
    <NativeStack.Screen name = 'Expert' component={ExpertScreen} options={{title: "전문가상담"}}/>
</NativeStack.Navigator>;

export default MypageStack;