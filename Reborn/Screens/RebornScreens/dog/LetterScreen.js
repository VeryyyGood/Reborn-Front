import React, { useState } from "react";
import { Text, ImageBackground, Modal, TextInput } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import {
  textStyles,
  CompleteButton,
  ButtonBrownBottom,
} from "../../../components";
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_clothes.png";

const LetterScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const [answer, onChangeAnswer] = React.useState("");
  const [qaVisible, setqaVisible] = useState(true); // Q&A Modal

  // send data to Server
  const requestWrite = async () => {
    try {
      const response = await fetch(
        "http://reborn.persi0815.site:8080/reborn/reborn/write",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answer: answer,
          }),
        }
      );
      const data = await response.json();
      if (!data) {
        throw new Error("Something went wrong");
      }
      console.log(data);
      alert("저장되었습니다!");
    } catch (error) {
      console.error(error);
      alert("저장 실패:" + error);
    }
  };

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
          <Text style={{ color: colors.palette.Brown }}>RE</Text>BORN: 나의
          반려동물과 작별하기
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />
        <Modal animationType="fade" visible={qaVisible} transparent={true}>
          <BlackContainer>
            <QAPopTextBox>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                {`마지막으로 OO이에게 전해주고\n싶은 말을 작성해주세요.`}
              </Text>
              <TextInputContainer>
                <TextInput
                  keyboardType="default"
                  onChangeText={onChangeAnswer}
                  value={answer}
                  placeholder="편지를 작성해주세요"
                ></TextInput>
              </TextInputContainer>
              <CompleteButton
                text="작성완료"
                onPress={() => {
                  requestWrite(), setqaVisible(false);
                }}
              ></CompleteButton>
            </QAPopTextBox>
          </BlackContainer>
        </Modal>
        <ButtonBrownBottom
          text={"다음으로"}
          onPress={() => {
            navigate("SetReborn");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default LetterScreen;

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

const BlackContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextInputContainer = styled.View`
  flex: 1;
  margin: 0% 8% 0% 8%;
  height: 70%;
  background-color: ${colors.palette.Gray200};
  padding: 3% 4% 3% 4%;
`;

const QAPopTextBox = styled.View`
  background-color: ${colors.palette.White};
  justify-content: space-between;
  width: 80%;
  height: 85%;
  border-radius: 20px;
  margin: 12% 20% 0% 20%;
  padding: 10px;
`;
