import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import { colors } from "../../../theme";
import styled from "styled-components/native";
import { ButtonYellow } from "../../../components";
import letterPaperimageURL from "../../../Assets/stuffs/letterPaper.png";
import {
  useAccessToken,
  useGlobalNickname,
} from "../../../context/AccessTokenContext";

const ReviewRebornScreen = ({ navigation: { navigate } }) => {
  const { globalNickname } = useGlobalNickname();
  const [modalVisible, setModalVisible] = useState(false);
  const text = `
  안녕? 나의 생애에서 가장 소중하고 특별한존재인 너에게 이 편지를 남기려고 해. 
  우리가 처음 만났을 때의 설레는 순간, 나의 작은 몸으로 너에게 다가갔던 모습이 기억에 남아있어. 너의 따뜻한 손길, 미소, 그 모든 순간들이 내 삶을 행복하게 만들었어. 
  내가 힘들거나 아플 때도 너가 내 곁에 있어주면서 나를 위로해 주어서 정말 고마워. 
  더 이상 함께할 수 없어서 미안해. 하지만 나는 너와 있었던 모든 순간들을 기억하고 감사하며, 영원히 너의 마음 속에 남을거야. 그러니 내가 떠난 후에도 너가 꼭 행복했으면 좋겠어. 내가 너를 사랑했던 만큼 너도 행복하길 바라! 사랑해 
`;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.boldFont}>
          <Text style={styles.reColor}>RE</Text>BORN:
        </Text>
        <Text style={styles.normalFont}>나의 반려동물과 작별하기</Text>
      </View>
      <ImageBackground
        source={require("../../../Assets/Images/bg/bg_blossom.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ width: "15%", height: "10.7%", top: "33%", left: "35%" }}
        >
          <Image
            source={require("../../../Assets/icons/letter.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>

        <Image
          source={require("../../../Assets/Images/dog/dog_cloth_ribbon_black.png")}
          style={styles.overlayImage}
          resizeMode="center"
        />
      </ImageBackground>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <CenteredView>
          <ImageBackground
            source={letterPaperimageURL}
            style={{
              width: "95%",
              height: "98%",
              justifyContent: "center",
              alignContent: "center",
              marginBottom: "-15%",
            }}
          >
            <LetterText
              style={{
                textShadowColor: "white",
                textShadowOffset: { width: 0.7, height: 0.7 },
                textShadowRadius: 10,
              }}
            >
              To. 내가 사랑하는 {globalNickname}
            </LetterText>
            <LetterText
              style={{
                textShadowColor: "white",
                textShadowOffset: { width: 0.7, height: 0.7 },
                textShadowRadius: 10,
              }}
            >
              {text}
            </LetterText>
            <LetterText
              style={{
                textShadowColor: "white",
                textShadowOffset: { width: 0.7, height: 0.7 },
                textShadowRadius: 10,
              }}
            >
              From. 영원한 너의 가족 {globalNickname}
            </LetterText>
          </ImageBackground>
          <ButtonYellow
            text={"사랑해"}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </CenteredView>
      </Modal>
    </View>
  );
};

export default ReviewRebornScreen;

const LetterText = styled.Text`
  font-family: "Poppins-Bold";
  padding: 0% 18% 0% 18%;
`;
const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.White,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlayImage: {
    marginTop: "55%",
  },

  textContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },

  boldFont: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: colors.palette.BrownDark,
  },

  normalFont: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: colors.palette.BrownDark,
  },

  reColor: {
    color: colors.palette.Brown,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },

  modalView: {
    margin: "5%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.palette.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },

  button: {
    paddingHorizontal: "6%",
    top: "3%",
    left: "35%",
  },

  textStyle: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    textAlign: "center",
  },
  modalText: {
    marginBottom: "10%",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
