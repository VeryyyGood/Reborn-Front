import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import AppContext from "./AppContext";
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const ReFinishScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);

  const linkArray = [
    "http://reborn.persi0815.site/reborn/remind/create",
    "http://reborn.persi0815.site/reborn/reveal/create",
    "http://reborn.persi0815.site/reborn/remember/create",
    "http://reborn.persi0815.site/reborn/reborn/create",
  ];

  // RE:MIND & RE:VEAL & RE:MEMBER& RE:BORN what day? => Post Link
  const handleLink = (day) => {
    if (day >= 1 && day <= 5) {
      return linkArray[0];
    } else if (day >= 6 && day <= 10) {
      return linkArray[1];
    } else if (day >= 11 && day <= 13) {
      return linkArray[2];
    }
    return linkArray[3];
  };

  const requestPostPat = async () => {
    try {
      const response = await axios.post(
        handleLink(myContext.contentsDay),
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
        source={require("./../../../Assets/Images/bg/bg_veranda(3).png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>하루 일과 완료! </Text>:
          내일 다시 만나요~
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />
        <ButtonBrownBottom
          text={"다음날로 넘어가기"}
          onPress={() => {
            requestPostPat(), myContext.setDay(), navigate("ReIntro");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default ReFinishScreen;

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
