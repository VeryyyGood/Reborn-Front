import React, { useRef, useState } from "react";
import {
  Text,
  ImageBackground,
  Animated,
  PanResponder,
  Easing,
} from "react-native";
import { colors } from "../../../theme";
import { textStyles, ButtonBrownBottom } from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import snackimageURL from "../../../Assets/Images/dog/dog_snack.png";

const SnackScreen = ({ navigation: { navigate } }) => {
  const [isFeed, setisFeed] = useState(true);

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
        <DogImage source={dogimageURL} resizeMode="center" />
        <DraggableImage
          source={snackimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginTop: "50%",
          }}
          isFeed={isFeed}
          setisFeed={setisFeed}
        />
        <ButtonBrownBottom
          text="거실로 돌아가기"
          onPress={() => {
            navigate("Diary");
          }}
        ></ButtonBrownBottom>
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
        if (dx > 130 && dy > 15 && dx < 180 && dy < 40) {
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
