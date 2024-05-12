import React, { useState, useContext } from "react";
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
} from "react-native";

import sunImage from "../../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../../Assets/icons/rediaryimage/rain.png";

const ReviewRevealDiaryScreen = ({ route }) => {
  const { date, diaryContent, pickEmotion, resultEmotion } = route.params;

  const emotions = [
    { id: "SUNNY", image: sunImage },
    { id: "CLOUDY", image: cloudImage },
    { id: "RAINY", image: rainImage },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.boldFont}>
          <Text style={styles.reColor}>RE</Text>VEAL:
        </Text>
        <Text style={styles.normalFont}>나의 감정 들여다보기</Text>
      </View>
    </View>
  );
};

export default ReviewRevealDiaryScreen;

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
