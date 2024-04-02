import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  PanResponder,
  Easing,
} from "react-native";
import { colors } from "../../../theme";
import { buttonStyles, textStyles } from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import bowlNoimageURL from "../../../Assets/Images/dog/dog_bowl.png";
import feedimageURL from "../../../Assets/stuffs/feed.png";
import bowlimageURL from "../../../Assets/Images/dog/dog_bowl_no.png";

const FeedScreen = ({ navigation: { navigate } }) => {
  const [isFeed, setisFeed] = useState(true);
  return (
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
        <BowlImage source={isFeed ? bowlimageURL : bowlNoimageURL}></BowlImage>
        <DraggableImage
          source={feedimageURL}
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            marginLeft: "50%",
          }}
          isFeed={isFeed}
          setisFeed={setisFeed}
        />
      </ImageBackground>
    </Container>
  );
};

export default FeedScreen;

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
        console.log({ dx, dy });
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderGrant: () => {
        onPressIn.start();
      },
      onPanResponderRelease: (_, { dx, dy }) => {
        if (dx > -240 && dy > 270 && dx < -175 && dy < 350) {
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

const BowlImage = styled.Image`
  width: 100px;
  height: 100px;
  margin: -38% 0% 0% 5%;
`;
