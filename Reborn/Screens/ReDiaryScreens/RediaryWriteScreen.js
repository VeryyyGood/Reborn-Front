import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../theme";
import { GrayLine, CompleteButton, RadioButton } from "../../components";
import { View, TextInput, StyleSheet } from "react-native";
import axios from "axios";
import { API_URL, CLIENT_ID, CLIENT_SECRET } from "@env";

import sunImage from "../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../Assets/icons/rediaryimage/rain.png";

const RediaryWriteScreen = ({ navigation: { navigate } }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [answer, onChangeAnswer] = React.useState("");

  const emotions = [
    { id: "SUNNY", image: sunImage },
    { id: "CLOUDY", image: cloudImage },
    { id: "RAINY", image: rainImage },
  ];

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
            onPress={() => setSelectedEmotion(emotion.id)}
            label={emotion.label}
            image={emotion.image}
          />
        ))}
      </View>
      <TitleText style={{ marginHorizontal: "8%" }}>감정일기</TitleText>
      <View style={styles.titleText}>
        <TextInput
          placeholder="제목을 입력해주세요."
          style={styles.titleInput}
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
      <CompleteButton
        text="작성완료"
        onPress={async () => {
          const result = await analyzeEmotion(answer);
          if (result) {
            console.log(result.document.sentiment);
          }
        }}
      />
    </Container>
  );
};

export default RediaryWriteScreen;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.palette.White};
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
