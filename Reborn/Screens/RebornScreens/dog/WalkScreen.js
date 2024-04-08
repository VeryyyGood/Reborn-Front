import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import {
  buttonStyles,
  textStyles,
  TutorialModal,
  ButtonBrownBottom,
} from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import { Pedometer } from "expo-sensors";

const WalkScreen = ({ navigation: { navigate } }) => {
  const ModalText = `휴대전화를 들고 걸어보세요.\n반려동물과 같이 산책했던 곳을 걸어보아도 좋고,\n여건이 안 된다면 집 안에서 움직여도 좋습니다.\n\n만보기의 숫자가 3000이 되면 다음 단계로 넘어갑니다.`;

  const [modalVisible, setModalVisible] = useState(true);
  const [walkFinished, setWalkFinished] = useState(false);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    let subscription;
    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        // count steps
        subscription = Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
        });
      }
    };

    subscribe();

    // release step counter
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_park.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          충분한 대화 나누기 :{" "}
          <Text style={{ color: colors.palette.Red }}>산책하기</Text>
        </Text>
        <TutorialModal
          text={ModalText}
          modalVisible={modalVisible}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        ></TutorialModal>
        <DogImage source={dogimageURL} resizeMode="center" />
        <ButtonBrownBottom
          text={currentStepCount}
          onPress={() => navigate("Snack")}
        />
      </ImageBackground>
    </Container>
  );
};

export default WalkScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 50%;
`;
