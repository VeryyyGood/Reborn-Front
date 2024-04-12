import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import { colors } from "../../../theme";
import { ViewStyles, buttonStyles } from "../../../components";

import ReDiaryItem from "../../../components/ReDiaryItem";

const ReviewRevealScreen = ({ navigation: { navigate } }) => {
  const [rediaryData, setrediaryData] = useState([
    { id: "1", date: "2024-03-29.FRI", day: "첫번째", type: "sun" },
    { id: "2", date: "2024-03-30.SAT", day: "두번째", type: "cloud" },
    { id: "3", date: "2024-03-31.SUN", day: "세번째", type: "rain" },
    { id: "4", date: "2024-03-32.MON", day: "네번째", type: "cloud" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.boldFont}>
          <Text style={styles.reColor}>RE</Text>VEAL:
        </Text>
        <Text style={styles.normalFont}>나의 감정 들여다보기</Text>
      </View>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <FlatList
          data={rediaryData}
          renderItem={({ item }) => (
            <ReDiaryItem date={item.date} day={item.day} type={item.type} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default ReviewRevealScreen;

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
