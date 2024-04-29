import React, { createContext, useContext, useState } from "react";

const AccessTokenContext = createContext();
const GlobalNicknameContext = createContext();

export const useAccessToken = () => useContext(AccessTokenContext);
export const useGlobalNickname = () => useContext(GlobalNicknameContext);

export const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const GlobalNicknameProvider = ({ children }) => {
  const [globalNickname, setGlobalNickname] = useState(null);

  return (
    <GlobalNicknameContext.Provider value={{ globalNickname, setGlobalNickname }}>
      {children}
    </GlobalNicknameContext.Provider>
  );
};
