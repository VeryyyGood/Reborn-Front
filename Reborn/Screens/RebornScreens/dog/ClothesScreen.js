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
import clothesimageURL from "../../../Assets/stuffs/clothes.png";
import dogClothesimageURL from "../../../Assets/Images/dog/dog_clothes.png";

const ClothesScreen = ({ navigation: { navigate } }) => {
  const [isClothes, setisClothes] = useState(false);
  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_living(1).png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>BORN: 나의
          반려동물과 작별하기
        </Text>
        <DogImage
          source={isClothes ? dogClothesimageURL : dogimageURL}
          resizeMode="center"
        />
        <DraggableImage
          source={clothesimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "50%",
          }}
          isClothes={isClothes}
          setisClothes={setisClothes}
        />
        <ButtonBrownBottom
          text="다음으로"
          onPress={() => navigate("Letter")}
        ></ButtonBrownBottom>
      </ImageBackground>
    </Container>
  );
};

export default ClothesScreen;

const DraggableImage = ({ source, style, isClothes, setisClothes }) => {
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
        if (dx > -90 && dy > 240 && dx < -60 && dy < 370) {
          setisClothes(!isClothes);
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