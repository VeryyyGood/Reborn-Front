import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";
import styled from "styled-components/native";
import AppContext from "./AppContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const ReconnectFinishScreen = ({ navigation: { navigate } }) => {
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
            myContext.setDay(), navigate("ReIntro");
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
