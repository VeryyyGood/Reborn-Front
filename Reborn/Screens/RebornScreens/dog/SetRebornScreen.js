import React, { useState } from "react";
import { Text, ImageBackground, Modal, Image } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import {
  textStyles,
  ButtonBrownBottom,
  ButtonYellow,
} from "../../../components";
import {
  useAccessToken,
  useGlobalNickname,
} from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_clothes.png";
import ribbon_blackimageURL from "../../../Assets/stuffs/ribbon_black.png";
import ribbon_yellowimageURL from "../../../Assets/stuffs/ribbon_yellow.png";
import letterPaperimageURL from "../../../Assets/stuffs/letterPaper.png";

const SetRebornScreen = ({ navigation: { navigate } }) => {
  const { globalNickname } = useGlobalNickname();

  const [modalVisible, setmodalVisible] = useState(true); // Reborn Modal
  const [letterVisible, setletterVisible] = useState(false); // Letter Modal
  const [isBlack, setIsBlack] = useState(true); // true -> black, false -> yellow
  const [isEnd, setIsEnd] = useState(false);

  const text = `
  안녕? 나의 생애에서 가장 소중하고 특별한존재인 너에게 이 편지를 남기려고 해. 
  우리가 처음 만났을 때의설레는 순간, 나의 작은 몸으로 너에게 다가갔던 모습이 기억에 남아있어. 너의 따뜻한 손길, 미소, 그 모든 순간들이 내 삶을 행복하게 만들었어. 
  내가 힘들거나 아플 때도 너가 내 곁에 있어주면서 나를 위로해 주어서 정말 고마워. 
  더이상 함께할 수 없어서 미안해. 하지만 나는 너와 있었던 모든 순간들을 기억하고 감사하며, 영원히 너의 마음 속에 남을거야. 그러니 내가 떠난 후에도 너가 꼭 행복했으면 좋겠어. 내가 너를 사랑했던 만큼 너도 행복하길 바라! 사랑해 
`;

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
          <Text style={{ color: colors.palette.Brown }}>RE</Text>BORN: 나의
          반려동물과 작별하기
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />

        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <BlackContainer>
            <QAPopTextBox>
              <TitleText>
                <Text style={{ color: colors.palette.Brown }}>RE</Text>BORN:
                리본 선택하기
              </TitleText>
              <SubText>00이에게 달아줄 리본을 선택하세요</SubText>
              <RebornView>
                <SelectReborn
                  source={ribbon_blackimageURL}
                  text={"검은색 리본"}
                  borderColor={
                    isBlack ? colors.palette.Yellow : colors.palette.Gray400
                  }
                  onPress={() => setIsBlack(true)}
                />
                <SelectReborn
                  source={ribbon_yellowimageURL}
                  text={"노란색 리본"}
                  borderColor={
                    !isBlack ? colors.palette.Yellow : colors.palette.Gray400
                  }
                  onPress={() => setIsBlack(false)}
                />
              </RebornView>
              <ButtonYellow
                text={"리본 달아주기"}
                onPress={() => setmodalVisible(false)}
              />
            </QAPopTextBox>
          </BlackContainer>
        </Modal>
        <Modal animationType="fade" visible={letterVisible} transparent={true}>
          <CenteredView>
            <ImageBackground
              source={letterPaperimageURL}
              style={{
                width: "95%",
                height: "98%",
                justifyContent: "center",
                alignContent: "center",
                marginBottom: "-15%",
              }}
            >
              <LetterText
                style={{
                  textShadowColor: "white",
                  textShadowOffset: { width: 0.7, height: 0.7 },
                  textShadowRadius: 10,
                }}
              >
                To. 내가 사랑하는 {globalNickname}
              </LetterText>
              <LetterText
                style={{
                  textShadowColor: "white",
                  textShadowOffset: { width: 0.7, height: 0.7 },
                  textShadowRadius: 10,
                }}
              >
                {text}
              </LetterText>
              <LetterText
                style={{
                  textShadowColor: "white",
                  textShadowOffset: { width: 0.7, height: 0.7 },
                  textShadowRadius: 10,
                }}
              >
                From. 영원한 너의 가족 {globalNickname}
              </LetterText>
            </ImageBackground>
            <ButtonYellow
              text={"사랑해"}
              onPress={() => {
                setletterVisible(false), setIsEnd(true);
              }}
            />
          </CenteredView>
        </Modal>
        {modalVisible ? (
          ""
        ) : (
          <RebornImage
            source={isBlack ? ribbon_blackimageURL : ribbon_yellowimageURL}
            resizeMode="center"
          />
        )}
        <ButtonBrownBottom
          text={isEnd ? "작별하기" : "편지열람하기"}
          onPress={() => {
            isEnd ? navigate("Main") : setletterVisible(true);
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default SetRebornScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin: 55% 0% 0% 30%;
`;

const RebornImage = styled.Image`
  width: 15%;
  height: 15%;
  position: absolute;
  margin: 85% 0% 0% 38%;
`;

const BlackContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.Text`
  font-family: "Poppins-Bold";
  margin: 10% 0% 0% 0%;
  text-align: center;
  font-size: 20px;
`;

const SubText = styled.Text`
  font-family: "Poppins-Regular";
  color: ${colors.palette.Gray500};
  text-align: center;
  font-size: 16px;
`;

const RebornText = styled.Text`
  font-family: "Poppins-Regular";
  color: ${colors.palette.Gray500};
  text-align: center;
  font-size: 14px;
`;

const LetterText = styled.Text`
  font-family: "Poppins-Bold";
  padding: 0% 18% 0% 18%;
`;

const QAPopTextBox = styled.View`
  background-color: ${colors.palette.White};
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 50%;
  border-radius: 20px;
  margin: 12% 20% 0% 20%;
  padding: 10px;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const RebornContainer = styled.Pressable`
  width: 46%;
  height: 86%;
  margin: 0% 3% 10% 3%;
  border-radius: 10px;
  background-color: ${colors.palette.White};
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

const RebornView = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 5% 5% 0% 5%;
`;

const SelectReborn = ({ source, text, borderColor, onPress }) => {
  return (
    <RebornContainer
      style={{ borderColor: borderColor }}
      onPress={() => {
        onPress();
      }}
    >
      <Image
        source={source}
        style={{ width: "55%", height: "55%" }}
        resizeMode="contain"
      ></Image>
      <RebornText>{text}</RebornText>
    </RebornContainer>
  );
};
