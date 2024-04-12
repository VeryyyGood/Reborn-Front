import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../theme";

const ReviewPetListScreen = ({ navigation: { navigate } }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewMain" })}
    >
      <View style={styles.imageTextContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../../../Assets/icons/expert_box.png")} />
          <Image
            source={require("../../../Assets/icons/ribbon.png")}
            style={styles.ribbonImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.imageText}>두부</Text>
            <Text style={styles.font}>2024. 01. 29.</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

export default ReviewPetListScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.palette.White,
  },

  imageTextContainer: {
    alignItems: "center", // 이미지와 텍스트 컨테이너를 세로 중앙에 정렬
    marginTop: "3%",
    marginBottom: "3%",
  },

  imageContainer: {
    position: "relative",
  },

  ribbonImage: {
    position: "absolute", // 리본 이미지를 박스 이미지 위에 배치
    width: 40, // 리본 이미지 크기 조절
    height: 40, // 리본 이미지 크기 조절
    resizeMode: "contain",
    marginTop: "10%",
    marginLeft: "6%",
  },

  textContainer: {
    position: "absolute",
    marginLeft: "26%",
    marginTop: "8%",
  },

  imageText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    textAlign: "left",
    color: colors.palette.BrownDark,
  },

  font: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    color: colors.palette.BrownDark,
  },

  reColor: {
    color: colors.palette.Brown,
  },
});
