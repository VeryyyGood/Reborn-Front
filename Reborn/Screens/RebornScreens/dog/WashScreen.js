import React, { useState, useEffect, useRef } from "react";
import { Text, ImageBackground, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import { requestPostProgress } from "../../../utiles"; // send data to Server
import { useAccessToken } from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import dog_dirtyOneimageURL from "../../../Assets/Images/dog/dog_dirty1.png";
import dog_dirtyTwoimageURL from "../../../Assets/Images/dog/dog_dirty2.png";

import showergiimageURL from "../../../Assets/stuffs/showergi.png";

const WashScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();

  const [isWashed, setIsWashed] = useState(false);
  const [isWashing, setIsWashing] = useState(false);

  const [countWash, setCountWash] = useState(0);
  const [currentDogImage, setCurrentDogImage] = useState(dogimageURL);

  useEffect(() => {
    setCountWash(countWash + 1);
    if (countWash >= 5) {
      setIsWashed(true);
    }
  }, [isWashing]);

  useEffect(() => {
    let intervalId;
    if (isWashing) {
      intervalId = setInterval(() => {
        setCurrentDogImage((currentImg) =>
          currentImg === dog_dirtyOneimageURL
            ? dog_dirtyTwoimageURL
            : dog_dirtyOneimageURL
        );
      }, 300);
    } else {
      setCurrentDogImage(dogimageURL);
    }

    return () => clearInterval(intervalId);
  }, [isWashing]);

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
        <DogImage source={currentDogImage} resizeMode="center" />
        <DraggableImage
          source={showergiimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "20%",
          }}
          setIsWashing={setIsWashing}
        />
        {isWashed ? (
          <ButtonBrownBottom
            text={"다음으로"}
            onPress={() => {
              requestPostProgress(
                "http://reborn.persi0815.site:8080/reborn/reborn/wash",
                accessToken
              ),
                navigate("Clothes");
            }}
          />
        ) : (
          ""
        )}
      </ImageBackground>
    </Container>
  );
};

const DraggableImage = ({ source, style, setIsWashing }) => {
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
  // Pan Responders
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx, dy }) => {
        //console.log({ dx, dy });
        if (dx > 60 && dy > 35 && dx < 215 && dy < 290) {
          setIsWashing(true);
          //Animated.sequence([Animated.parallel([onDropScale])]).start();
        } else {
          setIsWashing(false);
          Animated.parallel([onPressOut, goHome]).start();
        }

        position.setValue({ x: dx, y: dy });
      },
      onPanResponderGrant: () => {
        onPressIn.start();
      },
      onPanResponderRelease: () => {
        onPressOut.start(() => {
          setIsWashing(false);
          goHome.start();
        });
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
