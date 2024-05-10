import React from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ButtonBrownBottom, textStyles } from "../../../components";
import styled from "styled-components/native";

const IntroScreen = ({ navigation: { navigate } }) => {
  const IntroText = `
    천국의 저쪽 편에는 
    '무지개 다리' 라는 곳이 있답니다.
    
    지상에서 사람과 가깝게 지내던 동물이 죽으면 
    그들은 무지개 다리로 가지요.
    
    다리를 건너기 전 우리들의 모든 특별한 친구들이 
    뛰놀 수 있는 초원과 언덕이 존재합니다.
    
    그곳에는 넘치는 음식, 물, 햇살이 있고
    우리 친구들은 언제나 따뜻하고 편안하답니다.
    
    우리 꿈속에 그들과 함께했던 기억들처럼 말이죠.
    
    그곳에 있는 동물들은 행복하고 만족스럽습니다. 
    딱 한 가지를 빼놓고 말이죠.
    
    그들은 지상에 남겨진 그들에게 
    소중하고 특별한 그 사람을 아주 그리워합니다.
    
    그들은 같이 뛰놀고 장난치며 놀다가 
    그 중 한 아이는 갑자기 저 멀리를 바라봅니다.
    
    그 아이의 눈은 반짝거리며 한 곳에 집중되고 
    몸은 떨립니다.
    
    갑자기 아이는 친구들 틈에서 벗어나 
    푸릇푸릇한 잔디 위를 달립니다.
    
    더 빨리 힘껏 달립니다.
    
    아이는 당신을 발견했습니다.
    
    당신과 당신의 특별한 친구가 드디어 만나는 순간
    
    둘은 행복으로 서로를 끌어안고 
    다시는 떨어지지 않을 것을 약속합니다.
    
    뽀뽀 세례가 당신에게 쏟아지고, 
    당신의 손은 다시 한번 
    그 따뜻한 몸을 쓰다듬습니다.
    
    당신은 다시 한번 믿음이 가득한 
    당신의 반려동물의 눈을 바라봅니다.
    
    삶에서는 떠났지만 
    마음에서는 한번도 떠난 적이 없는...
    
    그리고 이제 둘은 같이 저기 있는 
    무지개 다리를 건넙니다.
    
    ― 작자 미상의 시, 《무지개 다리를 건너다》
    
    
    `;

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_blossom.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          CONNECT: 나의 반려동물과 만나기
        </Text>
        <ScrollContainer>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 16,
              textShadowColor: "white",
              textShadowOffset: { width: 0.7, height: 0.7 },
              textShadowRadius: 10,
            }}
          >
            {IntroText}
          </Text>
        </ScrollContainer>
        <ButtonContainer>
          <ButtonBrownBottom
            text="만나러 가기"
            onPress={() => navigate("ReconnectFinish")}
          />
        </ButtonContainer>
      </ImageBackground>
    </Container>
  );
};

export default IntroScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const ScrollContainer = styled.ScrollView`
  border-radius: 20px;
  margin: 10% 5% 20% 5%;
  padding: 3%;
  width: 90%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 0%;
  margin: 0% 0% 5% 0%;
`;