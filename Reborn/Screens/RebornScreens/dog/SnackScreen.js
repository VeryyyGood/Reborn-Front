import React, { useRef, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  PanResponder,
  TextInput,
  Easing,
} from "react-native";
import { colors } from "../../../theme";
import {
  buttonStyles,
  textStyles,
  CompleteButton,
  ButtonBrownBottom,
} from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import snackimageURL from "../../../Assets/Images/dog/dog_snack.png";

const WalkScreen = ({ navigation: { navigate } }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [answer, onChangeAnswer] = React.useState("");
  const [isFeed, setisFeed] = useState(true);

  const questionArray = [
    `우리가 처음 만났던 날 기억 나?\n우리가 언제 어디서 어떻게 만나게 되었는지,\n그날 있었던 일에 대해 나에게 말해줄래?\n`,
    `내 이름을 00라고 지은 특별한 이유가 있어?\n내가 가진 독특한 성격이나 습관, 특징이 있었을까?\n나로 인해 웃겼던 에피소드가 있다면 말해줘!\n우리가 언제 어디서 어떻게 만나게 되었는지,\n내 이름은 왜 00라고 짓게 되었는지,\n그날 있었던 일에 대해 나에게 말해줄래?`,
    `나와 함께한 가장 특별한 순간은 언제였어?\n가장 즐거웠던 순간, 함께했던 여행에 대해서도 좋아!\n그 순간이 어떻게 왜 특별했는지 이야기 해줄래?`,
    `나와 함께 지내면서 너에게 어떤 변화가 있었을까?\n나에게 위로를 받았거나 나로 인해 한 층\n성장하게 된 일이 있었다면 말해 줘!`,
    `우리가 함께한 시간 동안\n나는 너에게 어떤 의미였는지 알고 싶어!`,
  ];

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
        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <BlackContainer>
            <PopTextBox>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                {questionArray[4]}
              </Text>
              <TextInputContainer>
                <TextInput
                  keyboardType="default"
                  onChangeText={onChangeAnswer}
                  value={answer}
                  placeholder="첫만남을 기록해보세요"
                ></TextInput>
              </TextInputContainer>
              <CompleteButton
                text="작성완료"
                onPress={() => setModalVisible(!modalVisible)}
              ></CompleteButton>
            </PopTextBox>
          </BlackContainer>
        </Modal>
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
          text="Q&A 작성하기"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        ></ButtonBrownBottom>
      </ImageBackground>
    </Container>
  );
};
export default WalkScreen;

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

const PopTextBox = styled.View`
  background-color: ${colors.palette.White};
  justify-content: space-between;
  width: 80%;
  height: 85%;
  border-radius: 20px;
  margin: 12% 20% 0% 20%;
  padding: 10px;
`;

const BlackContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextInputContainer = styled.View`
  flex: 1;
  margin: 0% 8% 0% 8%;
  height: 70%;
  background-color: ${colors.palette.Gray200};
  padding: 3% 4% 3% 4%;
`;
