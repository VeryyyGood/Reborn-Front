import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";

import AppContext from "./Screens/RebornScreens/dog/AppContext";
import { AccessTokenProvider } from "./context/AccessTokenContext";

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
      <AppContext.Provider value={days}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </AppContext.Provider>
    </AccessTokenProvider>
  );
}
