import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountManagementScreen from "../Screens/MyPageScreens/AccountManagementScreens/AccountManagementScreen";
import AccountModifyScreen from "../Screens/MyPageScreens/AccountManagementScreens/AccountModifyScreen";
import PetProfileManagementScreen from "../Screens/MyPageScreens/PetProfileManagementScreen";
import ReviewMainScreen from "../Screens/MyPageScreens/ReviewScreens/ReviewMainScreen";
import ExpertScreen from "../Screens/MyPageScreens/ExpertScreen";

import { colors } from "../theme/colors";

const NativeStack = createNativeStackNavigator();

const CustomHeaderTitle = () => (
    <Text>
      <Text style={{ color: colors.palette.Brown, fontWeight: 'bold', fontSize: 20 }}>RE:</Text>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}> VIEW</Text>
    </Text>
  );

const MypageStack = () =>
<NativeStack.Navigator screenOptions={{headerTitleAlign:"center",}}>
    <NativeStack.Screen name = 'AccountManagement' component={AccountManagementScreen} options={{title: "계정 관리"}}/>
    <NativeStack.Screen name = 'AccountModify' component={AccountModifyScreen} options={{title: "계정 정보 수정"}}/>
    <NativeStack.Screen name = 'PetProfileManagement' component={PetProfileManagementScreen} options={{title: "반려동물 프로필 관리"}}/>
    <NativeStack.Screen name = 'ReviewMain' component={ReviewMainScreen} options={{headerTitle: () => <CustomHeaderTitle/>}}/>
    <NativeStack.Screen name = 'Expert' component={ExpertScreen} options={{title: "전문가 상담"}}/>
</NativeStack.Navigator>;

export default MypageStack;