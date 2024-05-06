import React, { useState } from "react";
import { Text, ImageBackground, Modal, Image, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import ribbon_blackimageURL from "../../../Assets/stuffs/ribbon_black.png";
import ribbon_yellowimageURL from "../../../Assets/stuffs/ribbon_yellow.png";

const SetRebornScreen = ({ navigation: { navigate } }) => {
  const [answer, onChangeAnswer] = React.useState("");
  const [qaVisible, setqaVisible] = useState(true); // Q&A Modal
  const [isBlack, setIsBlack] = useState(true); // ture -> black, false -> yellow

  const blackRibbon = () => setIsBlack(true);
  const yellowRibbon = () => setIsBlack(false);

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
                  text={"검은색 리본"}
                  borderColor={
                    !isBlack ? colors.palette.Yellow : colors.palette.Gray400
                  }
                  onPress={() => setIsBlack(false)}
                />
              </RebornView>
            </QAPopTextBox>
          </BlackContainer>
        </Modal>
        <ButtonBrownBottom
          text={"다음으로"}
          onPress={() => {
            navigate("ReFinish");
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

const QAPopTextBox = styled.View`
  background-color: ${colors.palette.White};
  justify-content: flex-start;
  width: 80%;
  height: 55%;
  border-radius: 20px;
  margin: 12% 20% 0% 20%;
  padding: 10px;
`;

const RebornContainer = styled.Pressable`
  width: 46%;
  height: 54%;
  border-radius: 10px;
  background-color: ${colors.palette.White};
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

const RebornView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 5% 5% 0% 5%;
`;

const SelectReborn = ({ source, text, borderColor, onPress }) => {
  return (
    <RebornContainer
      style={{ borderColor: borderColor }}
      onPress={() => {
        console.log(borderColor);
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
