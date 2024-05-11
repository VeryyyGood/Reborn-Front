import React, { useState, useContext } from "react";
import { Text, ImageBackground, Modal, TextInput } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import {
  textStyles,
  CompleteButton,
  ButtonBrownBottom,
} from "../../../components";
import AppContext from "./AppContext";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const DiaryScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);

  const [answer, onChangeAnswer] = React.useState("");
  const [qaVisible, setqaVisible] = useState(true); // Q&A Modal

  const questionArray = [
    `우리가 처음 만났던 날 기억 나?\n우리가 언제 어디서 어떻게 만나게 되었는지,\n그날 있었던 일에 대해 나에게 말해줄래?\n`,
    `내 이름을 00라고 지은 특별한 이유가 있어?\n내가 가진 독특한 성격이나 습관, 특징이 있었을까?\n나로 인해 웃겼던 에피소드가 있다면 말해줘!\n우리가 언제 어디서 어떻게 만나게 되었는지,\n내 이름은 왜 00라고 짓게 되었는지,\n그날 있었던 일에 대해 나에게 말해줄래?`,
    `나와 함께한 가장 특별한 순간은 언제였어?\n가장 즐거웠던 순간, 함께했던 여행에 대해서도 좋아!\n그 순간이 어떻게 왜 특별했는지 이야기 해줄래?`,
    `나와 함께 지내면서 너에게 어떤 변화가 있었을까?\n나에게 위로를 받았거나 나로 인해 한 층\n성장하게 된 일이 있었다면 말해 줘!`,
    `우리가 함께한 시간 동안\n나는 너에게 어떤 의미였는지 알고 싶어!`,
  ];

  const hintArray = [
    `첫만남을 기록해보세요`,
    `반려동물 이름의 의미를 기록해보세요`,
    `함께 했던 특별한 순간을 기록해보세요`,
    `반려동물과 함께 지내며 성장한 순간을 기록해보세요`,
    `반려동물이 나에게 어떤 의미였는지 기록해보세요`,
  ];

  const requestWrite = async () => {
    try {
      const response = await fetch(
        "http://reborn.persi0815.site:8080/reborn/remind/write",
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
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          MIND : 충분한 대화 나누기
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
                {questionArray[myContext.contentsDay - 2]}
              </Text>
              <TextInputContainer>
                <TextInput
                  keyboardType="default"
                  onChangeText={onChangeAnswer}
                  value={answer}
                  placeholder={hintArray[myContext.contentsDay - 2]}
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
          text={"거실로 돌아가기"}
          onPress={() => {
            navigate("ReFinish");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default DiaryScreen;

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
