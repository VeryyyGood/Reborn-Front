import React, { useState, useEffect, useRef } from "react";
import { Text, ImageBackground, Animated, Easing } from "react-native";
import { colors } from "../../../theme";
import {
  textStyles,
  TutorialModal,
  ButtonBrownBottom,
} from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import bgimageURL from "./../../../Assets/Images/bg/bg_park.png";
import { Pedometer } from "expo-sensors";
import axios from "axios";

const WalkScreen = ({ navigation: { navigate } }) => {
  const ModalText = `휴대전화를 들고 걸어보세요.\n반려동물과 같이 산책했던 곳을 걸어보아도 좋고,\n여건이 안 된다면 집 안에서 움직여도 좋습니다.\n\n만보기의 숫자가 3000이 되면 다음 단계로 넘어갑니다.`;
  const moveDistance = 112.2; // how many to move

  const [modalVisible, setModalVisible] = useState(true);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const [countTouch, setCountTouch] = useState(0);

  const translateX = useRef(new Animated.Value(-300)).current; // initialize position, for amulator set -300 / for phone set -267

  const AnimetedBGImage = Animated.createAnimatedComponent(ImageBackground);

  const moveBackground = () => {
    const nextPosition = translateX._value - moveDistance;

    // go to next page on amulator without pedometer
    if (countTouch === 1) {
      navigate("WalkFinish");
    } else if (Math.abs(nextPosition) >= 1417) {
      // end of image
      translateX.setValue(-300); // initialize position
      Animated.timing(translateX, {
        toValue: -379.2,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    } else {
      // move
      Animated.timing(translateX, {
        toValue: nextPosition,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    }
  };

  useEffect(() => {
    let subscription;
    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));

      if (isAvailable) {
        // count steps
        subscription = Pedometer.watchStepCount((result) => {
          setCurrentStepCount(result.steps);
          console.log(result.steps);
          if (result.steps % 10 === 0) {
            moveBackground();
          }
          if (result.steps > 45) {
            navigate("WalkFinish");
          }
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
      <AnimetedBGImage
        style={{
          width: 2012,
          height: "100%",
          position: "absolute",
          transform: [{ translateX }],
        }}
        resizeMode="contain"
        source={bgimageURL}
      />
      <Text style={textStyles.contentsTextBox}>
        충분한 대화 나누기 :{" "}
        <Text style={{ color: colors.palette.Red }}>산책하기</Text>
      </Text>
      <TutorialModal
        text={ModalText}
        modalVisible={modalVisible}
        onPress={() => {
          {
            setModalVisible(!modalVisible), moveBackground();
          }
        }}
      ></TutorialModal>
      <DogImage source={dogimageURL} resizeMode="center" />
      <ButtonBrownBottom
        text={currentStepCount}
        onPress={() => {
          moveBackground(), setCountTouch(countTouch + 1);
        }}
      />
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
