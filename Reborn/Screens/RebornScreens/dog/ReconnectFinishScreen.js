import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";
import styled from "styled-components/native";
import AppContext from "./AppContext";
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const ReconnectFinishScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);

  const requestPostRemindCreate = async () => {
    try {
      const response = await axios.post(
        "http://reborn.persi0815.site/reborn/remind/create",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      return response; //함수에서 서버 응답 반환
    } catch (error) {
      //console.error("ERROR", error);
      console.log("Error Response Body:", error.response.data);
      throw error; //에러를 다시 던져서 외부에서 처리할 수 있게 함
    }
  };

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
            requestPostRemindCreate(), myContext.plusDay(), navigate("ReIntro");
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
