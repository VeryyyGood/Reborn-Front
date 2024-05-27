import React, { useState, useContext } from "react";
import { Text, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import {
  ButtonBrownBottom,
  textStyles,
  TutorialModal,
} from "../../../components";
import { requestPostProgress } from "../../../utiles"; // send data to Server
import styled from "styled-components/native";
import AppContext from "./AppContext";

import {
  useAccessToken,
  useGlobalPetName,
} from "../../../context/AccessTokenContext";

import dogimageURL from "../../../Assets/Images/dog/dog_idle.png";
import catimageURL from "../../../Assets/Images/cat/cat_idle.png";

const IntroScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const { globalPetName } = useGlobalPetName();

  const myContext = useContext(AppContext);

  const [modalVisible, setModalVisible] = useState(true);

  const [petImage] = useState(
    myContext.petType === "CAT" ? catimageURL : dogimageURL
  );

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_blossom.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={textStyles.contentsTextBox}>
          <Text style={{ color: colors.palette.Brown }}>RE</Text>
          CONNECT: 나의 반려동물과 만나기
        </Text>
        <DogImage source={petImage} resizeMode="center" />
        {modalVisible ? (
          <TutorialModal
            text={`${globalPetName}(이)가 친구들을 만나러 가기 전 당신을 왔습니다.\n15일 동안 ${globalPetName}(이)와 충분한 추억을 쌓고\n건강한 작별 인사를 나누어 주세요.`}
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
        <ButtonBrownBottom
          text="다음날로 넘어가기"
          onPress={() => {
            requestPostProgress(
              "http://reborn.persi0815.site/reborn/remind/create",
              accessToken
            ),
              myContext.plusDay(),
              navigate("ReIntro");
          }}
        />
      </ImageBackground>
    </Container>
  );
};

export default IntroScreen;

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
