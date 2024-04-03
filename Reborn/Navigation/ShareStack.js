import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import {Text,View} from 'react-native';

import MainShareScreen from "../Screens/ShareboardScreens/MainShareScreen";
import ShareContentScreen from "../Screens/ShareboardScreens/ShareContentScreen";
import ShareBoardFeedItem from "../components/ShareBoardFeedItem";

const ShareBoradStack = createNativeStackNavigator();

const ShareStack = () =>
    <ShareBoradStack.Navigator>
        <ShareBoradStack.Screen name ='MainShare' component={MainShareScreen} />
        <ShareBoradStack.Screen name ='ShareContent' component={ShareContentScreen} />
        <ShareBoradStack.Screen name ='ShareFeedItem' component={ShareBoardFeedItem} />
    </ShareBoradStack.Navigator>;


export default ShareStack;