import React, { useState, useContext, useRef, useEffect } from "react";
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
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

import { useAccessToken } from "../../../context/AccessTokenContext";

import dog_boxURL from "../../../Assets/Images/dog/dog_box.png";

import dog_bathURL from "../../../Assets/Images/dog/dog_bath.png";
import dog_padURL from "../../../Assets/Images/dog/dog_pad.png";
import dog_bowlURL from "../../../Assets/Images/dog/dog_bowl.png";
import dog_cushionURL from "../../../Assets/Images/dog/dog_cushion.png";
import dog_snackURL from "../../../Assets/Images/dog/dog_snack.png";
import dog_toyURL from "../../../Assets/Images/dog/dog_toy.png";

const CleanScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const myContext = useContext(AppContext);
  const [isCleaned, setIsCleaned] = useState(0);
  const [isNextDayButtonVisible, setIsNextDayButtonVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const ModalTextArray = [
    `오늘부터 3일간 반려동물 용품을 정리해보려고 합니다. 무엇을 먼저 정리해야 할지 고민이 되는 분들을 위해 하루에 두 용품씩 가이드를 제공합니다.\n정리가 끝난 항목을 박스쪽으로 드래그 해주세요. 오늘은 목욕용품과 위생용품을 정리해봅시다.`,
    `오늘은 식기와 식품을 정리해봅시다. 정리가 끝난 항목을 박스쪽으로 드래그 해주세요.`,
    `오늘은 쿠션 등 생활용품과 장난감을 정리해봅시다. 정리가 끝난 항목을 박스쪽으로 드래그 해주세요.`,
  ];

  const [isDraggable, setIsDraggable] = useState({
    bath: false,
    pad: false,
    bowl: false,
    snack: false,
    cushion: false,
    toy: false,
  });

  // bath, pad, bowl, snack, cushion, toy
  const goalPositionArray = [
    [-15, 165],
    [-235, 165],
    [-235, -95],
    [-15, 55],
    [-215, 15],
    [-135, 285],
  ];

  useEffect(() => {
    // console.log(isCleaned);
    if (isCleaned === 2) {
      setIsNextDayButtonVisible(true);
    }
    if (myContext.contentsDay === 12) {
      setIsDraggable((prev) => ({ ...prev, bath: true, pad: true }));
    } else if (myContext.contentsDay === 13) {
      setIsDraggable((prev) => ({ ...prev, bowl: true, snack: true }));
    } else if (myContext.contentsDay === 14) {
      setIsDraggable((prev) => ({ ...prev, cushion: true, toy: true }));
    }
  }, [myContext.contentsDay, isCleaned]);

  useFocusEffect(
    React.useCallback(() => {
      setIsCleaned(0);
      setModalVisible(true);
      setIsNextDayButtonVisible(false);
    }, [])
  );

  // send data to Server
  const requestPostClean = async () => {
    try {
      const response = await axios.post(
        "http://reborn.persi0815.site:8080/reborn/remember/clean",
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
        {isDraggable.bath ? (
          <DraggableImage
            source={dog_bathURL}
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              marginTop: "22%",
            }}
            goalPositionArray={goalPositionArray[0]}
            isDraggable={isDraggable.bath}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}
        {isDraggable.pad ? (
          <DraggableImage
            source={dog_padURL}
            style={{
              width: "60%",
              height: "56%",
              position: "absolute",
              marginLeft: "50%",
              marginTop: "30%",
            }}
            goalPositionArray={goalPositionArray[1]}
            isDraggable={isDraggable.pad}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}
        {isDraggable.bowl ? (
          <DraggableImage
            source={dog_bowlURL}
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              marginLeft: "60%",
              marginTop: "100%",
            }}
            goalPositionArray={goalPositionArray[2]}
            isDraggable={isDraggable.bowl}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}
        {isDraggable.snack ? (
          <DraggableImage
            source={dog_snackURL}
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              marginTop: "48%",
            }}
            goalPositionArray={goalPositionArray[3]}
            isDraggable={isDraggable.snack}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}
        {isDraggable.cushion ? (
          <DraggableImage
            source={dog_cushionURL}
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              marginLeft: "45%",
              marginTop: "60%",
            }}
            goalPositionArray={goalPositionArray[4]}
            isDraggable={isDraggable.cushion}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}

        {isDraggable.toy ? (
          <DraggableImage
            source={dog_toyURL}
            style={{
              width: "50%",
              height: "50%",
              position: "absolute",
              marginLeft: "23%",
              marginTop: "5%",
            }}
            goalPositionArray={goalPositionArray[5]}
            isDraggable={isDraggable.toy}
            setIsCleaned={setIsCleaned}
          />
        ) : (
          ""
        )}
        {isNextDayButtonVisible ? (
          <ButtonBox>
            <ButtonBrownBottom
              text={"거실로 돌아가기"}
              onPress={() => {
                requestPostClean(), navigate("ReFinish");
              }}
            />
          </ButtonBox>
        ) : (
          ""
        )}
        {modalVisible ? (
          <TutorialModal
            text={ModalTextArray[myContext.contentsDay - 12]}
            modalStyles={modalVisible}
            onPress={() => {
              {
                setModalVisible(false);
              }
            }}
          />
        ) : (
          ""
        )}
      </ImageBackground>
    </Container>
  );
};
export default CleanScreen;

const DraggableImage = ({
  source,
  style,
  goalPositionArray,
  isDraggable,
  setIsCleaned,
}) => {
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
      onStartShouldSetPanResponder: () => isDraggable,
      onMoveShouldSetPanResponder: () => isDraggable,
      onPanResponderMove: isDraggable
        ? Animated.event([null, { dx: position.x, dy: position.y }], {
            useNativeDriver: false,
          })
        : null,
      onPanResponderGrant: () => {
        if (isDraggable) {
          // isDraggable?
          onPressIn.start();
        }
      },
      onPanResponderRelease: (evt, { dx, dy }) => {
        if (!isDraggable) return;
        // console.log("Release event", dx, dy);
        // is stuff's position near the box?
        if (
          dx > goalPositionArray[0] &&
          dy > goalPositionArray[1] &&
          dx < goalPositionArray[0] + 60 &&
          dy < goalPositionArray[1] + 60
        ) {
          // console.log("Cleaned Up!!!");
          setIsCleaned((isCleaned) => isCleaned + 1);
          Animated.sequence([
            Animated.parallel([onDropScale, onDropOpacity]),
            goHome,
          ]).start();
        } else {
          onPressOut.start(() => {
            goHome.start();
          });
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
          opacity,
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

const ButtonBox = styled.View`
  margin: 130% 0% 0% 0%;
`;
