import React, { useState, useContext, useEffect } from "react";
import { Text, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import { TutorialModal } from "../../../components/modalStyles";
import AppContext from "./AppContext";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const RemindIntroScreen = ({ navigation: { navigate } }) => {
  const ModalText = `오늘부터 5일 동안 반려동물과\n충분한 대화를 나누어보세요. \n대화한 내용은 모두 ‘RE: VIEW’에\n저장됩니다.`;
  const myContext = useContext(AppContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [daymodalVisible, setDayModalVisible] = useState(true);

  useEffect(() => {
    if (myContext.contentsDay <= 2) {
      setModalVisible(true);
    }
    setDayModalVisible(true);
  }, [myContext.contentsDay]);

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
        <ButtonBrownBottom
          text={"쓰다듬으러 가기"}
          onPress={() => {
            navigate("Pet");
          }}
        />
        {daymodalVisible ? (
          <TutorialModal
            text={"Day" + myContext.contentsDay}
            modalStyles={daymodalVisible}
            onPress={() => {
              setDayModalVisible(false);
            }}
          />
        ) : (
          ""
        )}
        {modalVisible ? (
          <TutorialModal
            text={ModalText}
            modalStyles={modalVisible}
            onPress={() => {
              {
                setModalVisible(false);
                navigate("Pet");
              }
            }}
          />
        ) : (
          ""
        )}
      </ImageBackground>
    </Container>
  );
};

export default RemindIntroScreen;

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
