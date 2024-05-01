import React, { useState, useContext, useRef } from "react";
import {
  Text,
  ImageBackground,
  Animated,
  PanResponder,
  Easing,
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import { TutorialModal } from "../../../components";
import AppContext from "./AppContext";

import dog_boxURL from "../../../Assets/Images/dog/dog_box.png";

import dog_bathURL from "../../../Assets/Images/dog/dog_bath.png";
import dog_padURL from "../../../Assets/Images/dog/dog_bowl_no.png"; // need modifing
import dog_bowlURL from "../../../Assets/Images/dog/dog_bowl.png";
import dog_cushionURL from "../../../Assets/Images/dog/dog_cushion.png";
import dog_snackURL from "../../../Assets/Images/dog/dog_snack.png";
import dog_toyURL from "../../../Assets/Images/dog/dog_toy.png";

const CleanScreen = ({ navigation: { navigate } }) => {
  const myContext = useContext(AppContext);

  const stuffArray = [
    { key: "bath", value: false },
    { key: "pad", value: false },
    { key: "bowl", value: false },
    { key: "snack", value: false },
    { key: "cushion", value: false },
    { key: "toy", value: false },
  ];

  const goalPositionArray = [[-110, 290, -95, 340]];

  if (myContext.contentsDay === 12) {
    changeValue("bath", true);
    changeValue("pad", true);
  } else if (myContext.contentsDay === 13) {
    changeValue("bowl", true);
    changeValue("snack", true);
  } else if (myContext.contentsDay === 14) {
    changeValue("cushion", true);
    changeValue("toy", true);
  }

  const changeValue = (key, newValue) => {
    const newDataArray = dataArray.map((item) => {
      if (item.key === key) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setDataArray(newDataArray);
  };

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_arrangement.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Text style={textStyles.contentsTextBox}>
          건강한 작별 준비하기 :{" "}
          <Text style={{ color: colors.palette.Red }}>정리하기</Text>
        </Text>
        <Box
          source={dog_boxURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "70%",
          }}
          resizeMode="contain"
        />
        <DraggableImage
          source={dog_bathURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "22%",
          }}
          resizeMode="contain"
        />
        <DraggableImage
          source={dog_padURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "50%",
            marginTop: "30%",
          }}
        />
        <DraggableImage
          source={dog_bowlURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "60%",
            marginTop: "100%",
          }}
        />
        <DraggableImage
          source={dog_cushionURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "45%",
            marginTop: "60%",
          }}
        />
        <DraggableImage
          source={dog_snackURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "48%",
          }}
        />
        <DraggableImage
          source={dog_toyURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "23%",
            marginTop: "5%",
          }}
          goalPositionArray={goalPositionArray[0]}
        />
        <ButtonBrownBottom
          text={"쓰다듬으러 가기"}
          onPress={() => {
            navigate("Pet");
          }}
        />
      </ImageBackground>
    </Container>
  );
};
export default CleanScreen;

const DraggableImage = ({ source, style, goalPositionArray }) => {
  // Values
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animations
  const onPressIn = Animated.spring(scale, {
    toValue: 0.9,
    useNativeDriver: true,
  });
  const onPressOut = Animated.spring(scale, {
    toValue: 1,
    useNativeDriver: true,
  });
  const goHome = Animated.spring(position, {
    toValue: 0,
    useNativeDriver: true,
  });
  const onDropScale = Animated.timing(scale, {
    toValue: 0,
    duration: 50,
    easing: Easing.linear,
    useNativeDriver: true,
  });
  const onDropOpacity = Animated.timing(opacity, {
    toValue: 0,
    duration: 50,
    easing: Easing.linear,
    useNativeDriver: true,
  });
  // Pan Responders
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx, dy }) => {
        console.log({ dx, dy });
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderGrant: () => {
        onPressIn.start();
      },
      onPanResponderRelease: (_, { dx, dy }) => {
        if (
          dx > goalPositionArray[0] &&
          dy > goalPositionArray[1] &&
          dx < goalPositionArray[2] &&
          dy < goalPositionArray[3]
        ) {
          console.log("Cleaned Up!!!");
          Animated.sequence([
            Animated.parallel([onDropScale, onDropOpacity]),
            Animated.timing(position, {
              toValue: 0,
              duration: 50,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]).start();
        } else {
          Animated.parallel([onPressOut, goHome]).start();
        }
      },
    })
  ).current;
  return (
    <Animated.Image
      {...panResponder.panHandlers}
      source={source}
      style={[
        style,
        {
          transform: [...position.getTranslateTransform(), { scale }],
        },
      ]}
      resizeMode="center"
    />
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const Box = styled.Image`
  width: 100%;
  height: 100%;
`;
