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
import snackimageURL from "../../../Assets/Images/dog/dog_snack.png";

const WalkScreen = ({ navigation: { navigate } }) => (
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
      />
      <View>
        <TouchableOpacity
          style={buttonStyles.buttonBrownBottom}
          onPress={() => navigate("Snack")}
        >
          <Text style={{ color: colors.palette.White }}>간식주러 가기</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </Container>
);

export default WalkScreen;

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
