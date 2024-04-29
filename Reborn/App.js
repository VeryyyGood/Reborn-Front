import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";

import AppContext from "./Screens/RebornScreens/dog/AppContext";
import { AccessTokenProvider, GlobalNicknameProvider } from "./context/AccessTokenContext";

export default function App() {
  const [contentsDay, setContentsDay] = useState(2);

  const setDay = () => {
    setContentsDay(contentsDay + 1);
  };

  const days = {
    contentsDay: contentsDay,
    setDay,
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
