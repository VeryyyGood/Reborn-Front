import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import RemindIntroScreen from "../Screens/RebornScreens/dog/RemindIntroScreen";
import FeedScreen from "../Screens/RebornScreens/dog/FeedScreen";
import PetScreen from "../Screens/RebornScreens/dog/PetScreen";
import SnackScreen from "../Screens/RebornScreens/dog/SnackScreen";
import WalkScreen from "../Screens/RebornScreens/dog/WalkScreen";
import WalkFinishScreen from "../Screens/RebornScreens/dog/WalkFinishScreen";
import DiaryScreen from "../Screens/RebornScreens/dog/DiaryScreen";
import { Image } from "react-native";

import AppContext from "../Screens/RebornScreens/dog/AppContext";

const NativeRebornDogStack = createNativeStackNavigator();

const RebornDogStack = ({ navigation: { navigate } }) => {
  const myContext = useContext(AppContext);

  return (
    <NativeRebornDogStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerLeft: () => (
          <ImageButton onPress={() => navigation.navigate("Main")} />
        ),
      })}
    >
      <NativeRebornDogStack.Screen
        name="Intro"
        component={RemindIntroScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="Pet"
        component={PetScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="Snack"
        component={SnackScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="Walk"
        component={WalkScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="WalkFinish"
        component={WalkFinishScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
      <NativeRebornDogStack.Screen
        name="Diary"
        component={DiaryScreen}
        options={{ title: `Day ${myContext.contentsDay}` }}
      />
    </NativeRebornDogStack.Navigator>
  );
};

export default RebornDogStack;

const GoToMainButton = styled.Pressable`
  margin-left: 3%;
`;
const ImageButton = ({ onPress }) => {
  return (
    <GoToMainButton onPress={onPress}>
      <Image source={require("../Assets/icons/tabIcons/back.png")} />
    </GoToMainButton>
  );
};
