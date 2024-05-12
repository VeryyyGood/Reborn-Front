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

const ReviewRememberDiaryScreen = ({ route }) => {
  const { title, content, rememberImage, date, imageDate } = route.params;

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
