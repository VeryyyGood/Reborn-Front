import React, { useState } from "react";
import styled from "styled-components/native";
import { colors } from "../../../theme";
import { GrayLine, CompleteButton } from "../../../components";
import { ImageBackground, KeyboardAvoidingView, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchImageLibrary } from "react-native-image-picker";

import imagePickerImage from "../../../Assets/icons/icon_imagePicker.png";

const ImageScreen = ({ navigation: { navigate } }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [title, onChangeTitle] = React.useState("");
  const [contents, onChangeContents] = React.useState("");

  // For picking date
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    setDate(date.toLocaleDateString("ko-KR", options));
    hideDatePicker();
  };

  const [response, setResponse] = useState("");
  const [imageFile, setImageFile] = useState("");

  // 이미지 가져오기
  const Gallery = () => {
    launchImageLibrary(
      {
        madiaType: "photo",
        includeBase64: true,
      },
      (response) => {
        //console.log(response.fileName);
        //console.log(response.assets[0].base64);
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log("Image Error : " + response.errorCode);
        }

        setResponse(response);
        setIsImageUploaded(true); // image upload success
        setImageFile(response.assets[0].base64); // store image
      }
    );
  };

  return (
    <Container>
      <ImageBackground
        source={require("./../../../Assets/Images/bg/bg_imageDiary.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <PickDate
          onPress={() => {
            showDatePicker();
          }}
        >
          <DateText>{date || "사진 찍은 날짜를 선택하세요"}</DateText>
        </PickDate>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <KeyboardAvoidingView
          style={{ width: "100%", height: "10%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
          <TitleText
            keyboardType="default"
            placeholder="제목을 입력하세요"
            onChangeText={onChangeTitle}
            value={title}
          ></TitleText>
        </KeyboardAvoidingView>
        <ImagePicker
          onPress={Gallery}
          source={isImageUploaded ? imageFile : imagePickerImage}
          isImageUploaded={isImageUploaded}
        ></ImagePicker>
        <TextContainer>
          <GrayLine />

          <ContentsText
            keyboardType="default"
            placeholder="내용을 입력하세요"
            multiline={true}
            style={{ textAlignVertical: "top" }}
            onChangeText={onChangeContents}
            value={contents}
          ></ContentsText>
        </TextContainer>
        <CompleteButton text="저장하기" onPress={() => navigate("ReIntro")} />
      </ImageBackground>
    </Container>
  );
};

export default ImageScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const ImagePickerContainer = styled.Pressable`
  background: ${colors.palette.Gray200};
  height: 32%;
  margin: 0% 2% 0% 2%;
  align-items: center;
  justify-content: center;
`;

const ImageIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

const PickDate = styled.Pressable`
  background-color: ${colors.palette.Yellow};
  opacity: 0.7;
  border-radius: 20px;
  padding: 2%;
  margin: 2% 20% 2% 20%;
  height: 8%;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.View`
  flex: 1;
  margin: 2%;
`;

const DateText = styled.Text`
  font-family: "caligraphy";
  font-size: 22px;
`;

const TitleText = styled.TextInput`
  font-family: "Poppins-Bold";
  font-size: 20px;
  width: 100%;
  height: 100%;
  margin: 0% 5% 0% 5%;
`;

const ContentsText = styled.TextInput`
  flex: 1;
  font-family: "Poppins-Regular";
  font-size: 16px;
  width: 90%;
  margin: 2% 5% 0% 5%;
`;

const ImagePicker = ({ onPress, source, isImageUploaded }) => {
  const imageSource = isImageUploaded
    ? { uri: `data:image/jpeg;base64,${source}` }
    : source;
  return (
    <ImagePickerContainer onPress={onPress}>
      <ImageIcon source={imageSource} resizeMode="cover"></ImageIcon>
    </ImagePickerContainer>
  );
};
