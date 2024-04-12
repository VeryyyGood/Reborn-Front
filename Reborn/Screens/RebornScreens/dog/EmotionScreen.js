import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { GrayLine } from "../../../components";

const EmotionScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <TitleText>감정일기 작성법</TitleText>
      <MiddleText>
        당신의 반려동물의 생애를 5분의 1로 나누어{"\n"}처음 만난 날부터 떠나보낸
        날까지{"\n"}각 단계에 대한 감정 일기를 작성합니다.{"\n"}
        {"\n"} 1. 매일 반려동물과 함께 했던 시간의 5분의 1동안 있었던 일을
        기록합니다.{"\n"} 2. 그상황에서 내가 느낀 신체 변화, 감정, 생각 등을
        기억나는대로 적어봅니다. {"\n"} 3. 이 글은 아무도 볼 수 없다는 생각으로
        편안한 마음으로 적어보세요.
      </MiddleText>
      <GrayLine />
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
  margin: 8% 0% 0% 5%;
`;

const MiddleText = styled.Text`
  font-family: "Poppins-Medium";
  font-size: 16px;
  margin: 2% 5% 0% 5%;
`;
