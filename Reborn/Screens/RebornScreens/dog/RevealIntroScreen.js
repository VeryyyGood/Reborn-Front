import React, { useState, useContext, useEffect } from "react";
import { Text, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles } from "../../../components";
import { TutorialModal } from "../../../components/modalStyles";
import AppContext from "./AppContext";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const RevealIntroScreen = ({ navigation: { navigate } }) => {
  const myContext = useContext(AppContext);

  const ModalText = `오늘부터 5일 동안 
  감정 일기를 통해 나 자신과
  충분한 대화를 나누어보세요.
  작성한 감정 일기는 모두 
  RE: VIEW에 저장됩니다.`;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (myContext.contentsDay === 7) {
      setModalVisible(true);
      console.log(modalVisible, myContext.contentsDay);
    }
  }, [myContext.contentsDay]);

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_living(2).png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          MVEAL : 나의 감정 들여다보기
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />
        <TutorialModal
          text={ModalText}
          modalStyles={modalVisible}
          onPress={() => {
            {
              setModalVisible(false);
              navigate("Pet");
            }
          }}
        ></TutorialModal>
      </ImageBackground>
    </Container>
  );
};

export default RevealIntroScreen;

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
