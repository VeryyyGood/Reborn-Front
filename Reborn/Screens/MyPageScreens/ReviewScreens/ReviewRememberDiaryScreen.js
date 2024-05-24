import React, { useState, useEffect } from "react";
import { colors } from "../../../theme";
import {
  GrayLine,
  ModifyButton,
  CompleteButton,
  DelateButton,
  RadioButton,
} from "../../../components";
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { useAccessToken } from "../../../context/AccessTokenContext";

const ReviewRememberDiaryScreen = ({ route }) => {
  const { id } = route.params;
  const { accessToken } = useAccessToken();
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [imageDate, setImageDate] = useState([]);
  const [rememberImage, setRememberImage] = useState([]);

  useEffect(() => {
    const fetchRememberDiary = async () => {
      try {
        const response = await axios.get(
          `http://reborn.persi0815.site:8080/reborn/remember/view/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.data && response.data.result) {
          console.log(response.data);
          setTitle(response.data.result.title);
          setContent(response.data.result.content);
          setImageDate(response.data.result.imageDate);
          setRememberImage(response.data.result.rememberImage);
        }
      } catch (error) {
        console.error("오류 발생", error);
        console.log(`Fetching info for petId: ${id}`);
      }
    };

    fetchRememberDiary();
  }, [id, accessToken]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.boldFont}>
          <Text style={styles.reColor}>RE</Text>MEMBER:
        </Text>
        <Text style={styles.normalFont}>건강한 작별 준비하기</Text>
      </View>
    </View>
  );
};

export default ReviewRememberDiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.White,
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
});
