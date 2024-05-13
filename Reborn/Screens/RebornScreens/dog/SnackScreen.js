import React, { useRef, useState, useContext } from "react";
import {
  Text,
  ImageBackground,
  Animated,
  PanResponder,
  Easing,
} from "react-native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import { requestPostProgress } from "../../../utiles"; // send data to Server
import { useAccessToken } from "../../../context/AccessTokenContext";
import styled from "styled-components/native";

import AppContext from "./AppContext";

import snackimageURL from "../../../Assets/Images/dog/dog_snack.png";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import dogsnack_oneimageURL from "../../../Assets/Images/dog/dog_eat_snack1.png";

const SnackScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);

  const [isFeed, setisFeed] = useState(false);

  const destinationMap = {
    2: "Diary",
    3: "Diary",
    4: "Diary",
    5: "Diary",
    6: "Diary",
    7: "Emotion",
    8: "Emotion",
    9: "Emotion",
    10: "Emotion",
    11: "Emotion",
    12: "ImageDiary",
    13: "ImageDiary",
    14: "ImageDiary",
  };

  const getDestination = (day) => {
    return destinationMap[day];
  };

  // Server Link for sending data
  const linkArray = [
    "http://reborn.persi0815.site/reborn/remind/snack",
    "http://reborn.persi0815.site/reborn/reveal/snack",
    "http://reborn.persi0815.site/reborn/remember/snack",
  ];

  // RE:MIND & RE:VEAL & RE:MEMBER& RE:BORN what day? => Post Link
  const handleLink = (day) => {
    if (day >= 2 && day <= 6) {
      return linkArray[0];
    } else if (day >= 7 && day <= 11) {
      return linkArray[1];
    }
    return linkArray[2];
  };

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_living(3).png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          충분한 대화 나누기 :{" "}
          <Text style={{ color: colors.palette.Red }}>간식주기</Text>
        </Text>
        {isFeed ? (
          <DogImage source={dogsnack_oneimageURL} resizeMode="center" />
        ) : (
          <DogImage source={dogimageURL} resizeMode="center" />
        )}

        <DraggableImage
          source={snackimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "50%",
          }}
          isFeed={isFeed}
          setisFeed={setisFeed}
        />
        {isFeed ? (
          <ButtonBrownBottom
            text="거실로 돌아가기"
            onPress={() => {
              const screen = getDestination(myContext.contentsDay);
              requestPostProgress(
                handleLink(myContext.contentsDay),
                accessToken
              );
              navigate(screen);
            }}
          />
        ) : (
          ""
        )}
      </ImageBackground>
    </Container>
  );
};

export default SnackScreen;

const DraggableImage = ({ source, style, isFeed, setisFeed }) => {
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
        //console.log({ dx, dy });
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderGrant: () => {
        onPressIn.start();
      },
      onPanResponderRelease: (_, { dx, dy }) => {
        if (dx > -80 && dy > 250 && dx < -30 && dy < 310) {
          setisFeed(!isFeed);
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

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 55%;
`;
