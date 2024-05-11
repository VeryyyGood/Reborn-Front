import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";

import AppContext from "./Screens/RebornScreens/dog/AppContext";
import {
  AccessTokenProvider,
  GlobalNicknameProvider,
} from "./context/AccessTokenContext";

export default function App() {
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
        <AppContext.Provider value={days}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </AppContext.Provider>
      </GlobalNicknameProvider>
    </AccessTokenProvider>
  );
}
