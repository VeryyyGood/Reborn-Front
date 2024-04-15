import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { GrayLine, CompleteButton, RadioButton } from "../../../components";
import { View, TextInput } from "react-native";
import AppContext from "./AppContext";

import sunImage from "../../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../../Assets/icons/rediaryimage/rain.png";

const EmotionScreen = ({ navigation: { navigate } }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [answer, onChangeAnswer] = React.useState("");
  const myContext = useContext(AppContext);

  const emotions = [
    { id: "sun", image: sunImage },
    { id: "cloud", image: cloudImage },
    { id: "rain", image: rainImage },
  ];

  return (
    <Container>
      <TitleText style={{ marginTop: "8%", marginHorizontal: "5%" }}>
        감정일기 작성법
      </TitleText>
      <MiddleText style={{ marginBottom: "8%" }}>
        반려동물의 생애를 다섯 단계로 나누어 처음 만난 날부터 떠나보낸 날까지 각
        단계에 대한 감정 일기를 작성합니다.{"\n"}
        {"\n"} 1. 매일 반려동물과 함께 했던 시간의 5분의 1동안 있었던 일을
        기록합니다.{"\n"} 2. 그상황에서 내가 느낀 신체 변화, 감정, 생각 등을
        기억나는대로 적어봅니다. {"\n"} 3. 본 글은 비밀이 보장되며, 아무도 볼 수
        없다는 생각으로 편안한 마음으로 적어주세요.
      </MiddleText>
      <GrayLine />
      <TitleText style={{ textAlign: "center" }}>감정일기</TitleText>
      <GrayLine />
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
      <TitleText style={{ marginHorizontal: "8%" }}>
        Day {myContext.contentsDay} 감정일기
      </TitleText>
      <TextInputContainer>
        <TextInput
          keyboardType="default"
          onChangeText={onChangeAnswer}
          value={answer}
          placeholder="첫만남을 기록해보세요"
        ></TextInput>
      </TextInputContainer>
      <CompleteButton
        text="작성완료"
        onPress={() => {
          navigate("RevealIntro");
        }}
      ></CompleteButton>
    </Container>
  );
};

export default EmotionScreen;

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
