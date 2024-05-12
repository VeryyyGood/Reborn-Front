import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";
import { requestPostProgress } from "../../../utiles"; // send data to Server
import styled from "styled-components/native";
import AppContext from "./AppContext";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const ReconnectFinishScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_blossom.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          CONNECT: 나의 반려동물과 만나기
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />

        <ButtonBrownBottom
          text="다음날로 넘어가기"
          onPress={() => {
            requestPostProgress(
              "http://reborn.persi0815.site/reborn/remind/create",
              accessToken
            ),
              myContext.plusDay(),
              navigate("ReIntro");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default ReconnectFinishScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 55%;
`;
