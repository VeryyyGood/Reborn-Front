import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";

import AppContext from "./Screens/RebornScreens/dog/AppContext";
import {
  AccessTokenProvider,
  GlobalNicknameProvider,
  GlobalPetNameProvider,
} from "./context/AccessTokenContext";

export default function App() {
  const [contentsDay, setContentsDay] = useState(1);
  const [petType, setPetType] = useState("DOG");

  const setDay = (day) => {
    setContentsDay(day);
  };

  const plusDay = () => {
    setContentsDay(contentsDay + 1);
  };

  const resetDay = () => {
    setContentsDay(1);
  };

  const changePetType = (type) => {
    setPetType(type);
  };

  const contextValues = {
    // ----- RE:BORN Progress ----
    contentsDay,
    setDay,
    resetDay,
    plusDay,
    // ----- Pet Type -----
    petType,
    changePetType,
  };

  return (
    <AccessTokenProvider>
      <GlobalNicknameProvider>
        <GlobalPetNameProvider>
          <AppContext.Provider value={contextValues}>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </AppContext.Provider>
        </GlobalPetNameProvider>
      </GlobalNicknameProvider>
    </AccessTokenProvider>
  );
}
