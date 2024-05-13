import React from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";
import { useAccessToken } from "../../../context/AccessTokenContext";
import { requestPostProgress } from "../../../utiles"; // send data to Server
import styled from "styled-components/native";

const OuttroScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const OuttroText = `
    아웃트로 문구~
    `;

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_blossom.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          BORN: 나의 반려동물과 작별하기
        </Text>
        <ScrollContainer>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 16,
              textShadowColor: "white",
              textShadowOffset: { width: 0.7, height: 0.7 },
              textShadowRadius: 10,
            }}
          >
            {OuttroText}
          </Text>
        </ScrollContainer>
        <ButtonContainer>
          <ButtonBrownBottom
            text="안녕"
            onPress={() => {
              requestPostProgress(
                "http://reborn.persi0815.site/reborn/reborn/finish",
                accessToken
              ),
                navigate("Main");
            }}
          />
        </ButtonContainer>
      </ImageBackground>
    </Container>
  );
};

export default OuttroScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const ScrollContainer = styled.ScrollView`
  border-radius: 20px;
  margin: 10% 5% 20% 5%;
  padding: 3%;
  width: 90%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 0%;
  margin: 0% 0% 5% 0%;
`;
