import React, { useState } from "react";
import { Modal, Text, Pressable, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, buttonStyles } from "../../../components";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const RemindIntroScreen = ({ navigation: { navigate } }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_living(1).png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          MIND : 충분한 대화 나누기
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />

        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <BlackContainer>
            <PopTextBox
              onPress={() => {
                navigate("Pet"), setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ textAlign: "center" }}>
                오늘부터 5일 동안 00이와{"\n"}충분한 대화를 나누어보세요. {"\n"}
                대화한 내용은 모두 ‘RE: DIARY’에{"\n"}저장됩니다.
              </Text>
            </PopTextBox>
          </BlackContainer>
        </Modal>
      </ImageBackground>
    </Container>
  ); //뷰 반환
};

export default RemindIntroScreen;

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

const PopTextBox = styled.Pressable`
  background-color: ${colors.palette.White};
  justify-content: center;
  width: 70%;
  height: 20%;
  border-radius: 20px;
  margin: 0% 20% 0% 20%;
`;

const BlackContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
