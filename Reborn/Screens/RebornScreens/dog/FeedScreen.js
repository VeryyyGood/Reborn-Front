import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  PanResponder,
} from "react-native";
import { colors } from "../../../theme";
import { buttonStyles, textStyles } from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import handimageURL from "../../../Assets/Images/dog/dog_bowl_no.png";

const FeedScreen = ({ navigation: { navigate } }) => (
  <Container>
    <ImageBackground
      source={require("./../../../Assets/Images/bg/bg_living(2).png")}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={textStyles.contentsTextBox}>
        충분한 대화 나누기 :{" "}
        <Text style={{ color: colors.palette.Red }}>밥주기</Text>
      </Text>
      <DogImage source={dogimageURL} resizeMode="center" />
      <View>
        <TouchableOpacity
          style={buttonStyles.buttonBrownBottom}
          onPress={() => navigate("Walk")}
        >
          <Text style={{ color: colors.palette.White }}>산책하러 가기</Text>
        </TouchableOpacity>
      </View>
      <DraggableImage
        source={handimageURL}
        style={{
          width: "40%",
          height: "160%",
          position: "absolute",
        }}
      />
    </ImageBackground>
  </Container>
);

export default FeedScreen;

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
