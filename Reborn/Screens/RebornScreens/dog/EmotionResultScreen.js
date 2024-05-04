import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Text, Pressable } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrown } from "../../../components";

import sunImage from "../../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../../Assets/icons/rediaryimage/rain.png";

const EmotionResultScreen = ({ route, navigation: { navigate } }) => {
  const { selectedEmotion } = route.params;

  const [isVisible, setIsVisible] = useState(false);

  const weather = [
    { id: "sun", text: "'맑음'", image: sunImage },
    { id: "cloud", text: "'흐림'", image: cloudImage },
    { id: "rain", text: "'비'", image: rainImage },
  ];

  const selectedWeather = weather.find(
    (weather) => weather.id === selectedEmotion
  );

  return (
    <Container>
      <Icon source={selectedWeather.image} />
      <ContentsText style={{ marginTop: "10%" }}>
        보호자 분이 선택한{"\n"}감정 날씨는
        <WeatherText>
          {selectedWeather ? selectedWeather.text : "정보 없음"}
        </WeatherText>
        이네요
      </ContentsText>
      {isVisible ? (
        <GrayBox>
          <ContentsText style={{ color: colors.palette.Brown }}>
            보호자 님의 감정 분석 결과
          </ContentsText>
          <ContentsText style={{ color: colors.palette.Blue }}>
            긍정표현 70%
          </ContentsText>
          <ContentsText style={{ color: colors.palette.Red }}>
            부정표현 30%
          </ContentsText>
          <ContentsText>입니다</ContentsText>
        </GrayBox>
      ) : (
        <YellowBox>
          <ShowResult
            onPress={() => {
              setIsVisible(true);
            }}
          />
        </YellowBox>
      )}

      <ButtonBrown
        text={"일기 저장하기"}
        onPress={() => navigate("ReFinish")}
      />
    </Container>
  );
};

export default EmotionResultScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
  align-items: center;
  justify-content: center;
`;

const ContentsText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: "Poppins-Bold";
`;

const WeatherText = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: "Poppins-Bold";
  color: ${colors.palette.Blue};
`;

const Icon = styled.Image`
  width: 110px;
  height: 110px;
  justify-content: center;
  align-items: center;
`;

const GrayBox = styled.View`
  background-color: ${colors.palette.Gray200};
  width: 70%;
  height: 26%;
  margin: 5% 0% 12% 0%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const YellowBox = styled.View`
  background-color: ${colors.palette.Gray200};
  width: 70%;
  height: 26%;
  margin: 5% 0% 12% 0%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ShowResult = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ width: "100px", height: "45px" }}>
      <ContentsText style={{ color: colors.palette.BrownDark }}>
        분석 결과 보기
      </ContentsText>
    </Pressable>
  );
};
