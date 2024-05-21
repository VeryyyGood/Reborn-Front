import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";
import messaging from '@react-native-firebase/messaging';

import AppContext from "./Screens/RebornScreens/dog/AppContext";
import {
  AccessTokenProvider,
  GlobalNicknameProvider,
  GlobalPetNameProvider,
} from "./context/AccessTokenContext";


export default function App() {
  
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  
  async function getToken() {
    await requestUserPermission();
    const token = await messaging().getToken();
    console.log('Device Token:', token);
    return token;
  }
  
  // 앱이 실행될 때 토큰을 얻기 위해 함수 호출
  getToken();
  
  const [contentsDay, setContentsDay] = useState(1);

  const setDay = (day) => {
    setContentsDay(day);
  };

  const plusDay = () => {
    setContentsDay(contentsDay + 1);
  };

  const resetDay = () => {
    setContentsDay(1);
  };

  const days = {
    contentsDay: contentsDay,
    setDay,
    resetDay,
    plusDay,
  };

  return (
    <AccessTokenProvider>
      <GlobalNicknameProvider>
        <GlobalPetNameProvider>
          <AppContext.Provider value={days}>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </AppContext.Provider>
        </GlobalPetNameProvider>
      </GlobalNicknameProvider>
    </AccessTokenProvider>
  );
}
