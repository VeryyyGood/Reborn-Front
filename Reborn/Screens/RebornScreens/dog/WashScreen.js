import React, { useState, useEffect, useRef } from "react";
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
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

import showergiimageURL from "../../../Assets/stuffs/showergi.png";

const WashScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();

  const [isWashed, setIsWashed] = useState(false);

  // send data to Server
  const requestPostWash = async () => {
    try {
      const response = await axios.post(
        "http://reborn.persi0815.site:8080/reborn/reborn/wash",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      return response; //함수에서 서버 응답 반환
    } catch (error) {
      //console.error("ERROR", error);
      console.log("Error Response Body:", error.response.data);
      throw error; //에러를 다시 던져서 외부에서 처리할 수 있게 함
    }
  };

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_bath.png")}
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
        <DraggableImage
          source={showergiimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "20%",
          }}
          isWashed={isWashed}
          setIsWashed={setIsWashed}
        />
        <ButtonBrownBottom
          text={"다음으로"}
          onPress={() => {
            requestPostWash(), navigate("Clothes");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

const DraggableImage = ({ source, style }) => {
  // Animated Values
  const scale = useRef(new Animated.Value(1)).current;
  const position = useRef(new Animated.ValueXY()).current;

  // Animations
  const onPressInAnimation = Animated.spring(scale, {
    toValue: 0.9,
    useNativeDriver: true,
  });

  const onPressOutAnimation = Animated.spring(scale, {
    toValue: 1,
    useNativeDriver: true,
  });

  const goHomeAnimation = Animated.spring(position, {
    toValue: { x: 0, y: 0 },
    useNativeDriver: true,
  });

  // PanResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: position.x,
            dy: position.y,
          },
        ],
        { useNativeDriver: false }
      ), // Update position based on movement
      onPanResponderGrant: () => {
        onPressInAnimation.start();
      },
      onPanResponderRelease: () => {
        Animated.parallel([onPressOutAnimation, goHomeAnimation]).start();
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

export default WashScreen;

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
