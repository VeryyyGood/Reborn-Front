import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../theme";
import { API_URL, CLIENT_ID, CLIENT_SECRET } from "@env";
import {
  GrayLine,
  CompleteButton,
  RadioButton,
  Toast
} from "../../components";
import { View, TextInput,  StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";

import { useAccessToken } from "../../context/AccessTokenContext";

import sunImage from "../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../Assets/icons/rediaryimage/rain.png";

const EmotionScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();

  const mode = "Just";

  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [showToast, setShowToast] = useState(false); // for Emotion
  const [showToast_answer, setShowToast_answer] = useState(false); // for answer
  const [answer, onChangeAnswer] = React.useState("");
  const [title, onChangeTitle] = React.useState("");

  const emotions = [
    { id: "SUNNY", image: sunImage },
    { id: "CLOUDY", image: cloudImage },
    { id: "RAINY", image: rainImage },
  ];

  // refresh when Screen is focused
  useFocusEffect(
    React.useCallback(() => {
      setSelectedEmotion(null);
      onChangeAnswer("");
      onChangeTitle("");
    }, [])
  );

  // go to Result Page
  const goToNextPage = async () => {
    if (!selectedEmotion) {
      setShowToast(true);
    } else {
      setShowToast(false);
      if (answer && title) {
        setShowToast_answer(false);
        const analysisResult = await analyzeEmotion(answer);
        if (analysisResult) {
          console.log(analysisResult);
          navigate("RediaryResult", {
            answer,
            selectedEmotion,
            analysisResult,
            title,
            mode,
          });
        } else {
          alert("감정 분석에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        setShowToast_answer(true);
        console.log(showToast_answer);
      }
    }
  };

  const analyzeEmotion = async (text) => {
    try {
      const response = await axios.post(
        API_URL,
        { content: text },
        {
          headers: {
            "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
            "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("감정 분석 중 에러 발생: ", error);
      return null;
    }
  };

  return (
    <Container>
      <View style={{ padding: 20, flexDirection: "row" }}>
        {emotions.map((emotion) => (
          <RadioButton
            key={emotion.id}
            isSelected={selectedEmotion === emotion.id}
            onPress={() => {
              setSelectedEmotion(emotion.id);
              setShowToast(false);
            }}
            image={emotion.image}
          />
        ))}
      </View>
      <TitleText style={{ marginHorizontal: "8%" }}>
        감정일기
      </TitleText>
      <View style={styles.titleText}>
        <TextInput
          placeholder="제목을 입력해주세요."
          style={styles.titleInput}
          onChangeText={onChangeTitle}
          value={title}
        />
      </View>
      <TextInputContainer>
        <TextInput
          keyboardType="default"
          onChangeText={onChangeAnswer}
          value={answer}
          placeholder="오늘의 감정은 어떤가요?"
          multiline={true}
        ></TextInput>
      </TextInputContainer>
      <ToastContainer>
        {showToast ? (
          <Toast showToast={showToast} message="감정을 선택해주세요" />
        ) : (
          ""
        )}
      </ToastContainer>
      <ToastContainer>
        {showToast_answer ? (
          <Toast showToast={showToast_answer} message="일기를 작성해주세요" />
        ) : (
          ""
        )}
      </ToastContainer>
      <CompleteButton text="작성완료" onPress={goToNextPage}></CompleteButton>
    </Container>
  );
};

export default EmotionScreen;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const ToastContainer = styled.View`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  align-items: flex-end;
`;

const TitleText = styled.Text`
  font-family: "Poppins-ExtraBold";
  font-size: 20px;
`;

const MiddleText = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 16px;
  margin: 2% 5% 0% 5%;
`;

const TextInputContainer = styled.View`
  margin: 0% 8% 0% 8%;
  background-color: ${colors.palette.Gray200};
  padding: 3% 4% 80% 4%;
`;

const styles = StyleSheet.create({
  titleText: {
    height: 50,
    backgroundColor: colors.palette.Gray200,
    marginHorizontal: "8%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "5%",
  },
  titleInput: {
    fontSize: 14,
    fontFamily: "Popins-Medium",
  },
});
