import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { buttonStyles, textStyles } from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const WalkScreen = ({ navigation: { navigate } }) => {
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
        <View>
          <TouchableOpacity
            style={buttonStyles.buttonBrownBottom}
            onPress={() => navigate("Snack")}
          >
            <Text style={{ color: colors.palette.White }}>간식주러 가기</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default WalkScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 50%;
`;
