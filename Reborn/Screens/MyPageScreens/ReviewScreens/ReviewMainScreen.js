import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../theme/colors";

const ReviewMainScreen = ({ navigation: { navigate } }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewReconnect" })}
    >
      <View style={styles.imageTextContainer}>
        <Image source={require("../../../Assets/icons/review_album.png")} />
        <Text style={styles.imageText}>
          <Text style={styles.reColor}>RE</Text>CONNECT:
        </Text>
        <Text style={styles.font}>나의 반려동물과 만나기</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewRemind" })}
    >
      <View style={styles.imageTextContainer}>
        <Image source={require("../../../Assets/icons/review_album.png")} />
        <Text style={styles.imageText}>
          <Text style={styles.reColor}>RE</Text>MIND:
        </Text>
        <Text style={styles.font}>충분한 대화 나누기</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewReveal" })}
    >
      <View style={styles.imageTextContainer}>
        <Image source={require("../../../Assets/icons/review_album.png")} />
        <Text style={styles.imageText}>
          <Text style={styles.reColor}>RE</Text>VEAL:
        </Text>
        <Text style={styles.font}>나의 감정 들여다보기</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewRemember" })}
    >
      <View style={styles.imageTextContainer}>
        <Image source={require("../../../Assets/icons/review_album.png")} />
        <Text style={styles.imageText}>
          <Text style={styles.reColor}>RE</Text>MEMBER:
        </Text>
        <Text style={styles.font}>건강한 작별 준비하기</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigate("ReviewStack", { screen: "ReviewReborn" })}
    >
      <View style={styles.imageTextContainer}>
        <Image source={require("../../../Assets/icons/review_album.png")} />
        <Text style={styles.imageText}>
          <Text style={styles.reColor}>RE</Text>BORN:
        </Text>
        <Text style={styles.font}>나의 반려동물과 작별하기</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

export default ReviewMainScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.palette.White,
  },

  imageTextContainer: {
    position: "relative",
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "3%",
  },

  imageText: {
    position: "absolute",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginTop: "6%",
    marginLeft: "6%",
    textAlign: "left",
    left: 0,
    color: colors.palette.BrownDark,
  },

  font: {
    position: "absolute",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginTop: "17%",
    marginLeft: "6%",
    textAlign: "left",
    color: colors.palette.BrownDark,
    left: 0,
  },

  reColor: {
    color: colors.palette.Brown,
  },
});
