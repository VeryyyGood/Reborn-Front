import React, { useRef, useState, useContext, useEffect } from "react";
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
import bowlNoimageURL from "../../../Assets/Images/dog/dog_bowl_no.png";
import feedimageURL from "../../../Assets/stuffs/feed.png";
import bowlimageURL from "../../../Assets/Images/dog/dog_bowl.png";
import AppContext from "./AppContext";
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

const FeedScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);
  const [isFeed, setisFeed] = useState(false);
  const [isEnd, setIsEnd] = useState("Walk");

  const linkArray = [
    "http://reborn.persi0815.site/reborn/remind/feed",
    "http://reborn.persi0815.site/reborn/reveal/feed",
    "http://reborn.persi0815.site/reborn/remember/feed",
    "http://reborn.persi0815.site/reborn/reborn/feed",
  ];

  // RE:MIND & RE:VEAL & RE:MEMBER& RE:BORN what day? => Post Link
  const handleLink = (day) => {
    if (day >= 2 && day <= 6) {
      return linkArray[0];
    } else if (day >= 7 && day <= 11) {
      return linkArray[1];
    } else if (day >= 12 && day <= 14) {
      return linkArray[2];
    }
    return linkArray[3];
  };

  const requestPostFeed = async () => {
    try {
      const response = await axios.post(
        handleLink(myContext.contentsDay),
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

  useEffect(() => {
    // set Tutorial Modal Visible true
    if (myContext.contentsDay == 15) {
      setIsEnd("Wash");
    }
  }, [myContext.contentsDay]);

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
        <ButtonBrownBottom
          text="산책하러 가기"
          onPress={() => {
            requestPostFeed(), navigate(isEnd);
          }}
        ></ButtonBrownBottom>
        <BowlImage source={isFeed ? bowlimageURL : bowlNoimageURL}></BowlImage>
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
        // console.log({ dx, dy });
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
