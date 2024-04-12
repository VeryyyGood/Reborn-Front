import React from "react";
import styled from "styled-components/native";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const WalkFinishScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_park.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          충분한 대화 나누기 :{" "}
          <Text style={{ color: colors.palette.Red }}>산책하기</Text>
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />
        <ButtonBrownBottom
          text="간식주러 가기"
          onPress={() => navigate("Snack")}
        />
      </ImageBackground>
    </Container>
  );
};

export default WalkFinishScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.Black};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 50%;
`;
