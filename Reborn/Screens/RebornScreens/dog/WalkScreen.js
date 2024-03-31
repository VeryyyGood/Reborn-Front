import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { colors } from "../../../theme";
import { buttonStyles, textStyles, CompleteButton } from "../../../components";
import styled from "styled-components/native";
import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";

const WalkScreen = ({ navigation: { navigate } }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [text, onChangeText] = React.useState("");

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_park.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          충분한 대화 나누기 :{" "}
          <Text style={{ color: colors.palette.Red }}>산책하기</Text>
        </Text>
        <DogImage source={dogimageURL} resizeMode="center" />
        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <BlackContainer>
            <PopTextBox>
              <Text style={{ textAlign: "center" }}>
                우리가 처음 만났던 날 기억 나?{"\n"}
                우리가 언제 어디서 어떻게 만나게 되었는지,{"\n"}
                그날 있었던 일에 대해 나에게 말해줄래?{"\n"}
              </Text>
              <TextInputContainer>
                <TextInput
                  keyboardType="default"
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="첫만남을 기록해보세요"
                ></TextInput>
              </TextInputContainer>
              <CompleteButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text>작성완료</Text>
              </CompleteButton>
            </PopTextBox>
          </BlackContainer>
        </Modal>
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
};

export default WalkScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const DogImage = styled.Image`
  width: 50%;
  height: 50%;
  margin-left: 30%;
  margin-top: 50%;
`;

const PopTextBox = styled.Pressable`
  background-color: ${colors.palette.White};
  justify-content: center;
  width: 80%;
  height: 85%;
  border-radius: 20px;
  margin: 12% 20% 0% 20%;
`;

const BlackContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextInputContainer = styled.View`
  margin: 6% 10% 0% 10%;
  height: 70%;
  background-color: black;
`;
