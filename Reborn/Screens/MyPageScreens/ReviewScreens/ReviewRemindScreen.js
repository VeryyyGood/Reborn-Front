import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../theme";

const ReviewRemindScreen = ({ navigation: { navigate } }) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={{ paddingBottom: "10%" }}
  >
    <View style={styles.textContainer}>
      <Text style={styles.boldFont}>
        <Text style={styles.reColor}>RE</Text>MIND:
      </Text>
      <Text style={styles.normalFont}>충분한 대화 나누기</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image
        source={require("../../../Assets/icons/remind_box.png")}
        resizeMode="contain"
      />
      <Text style={styles.ImageText}>
        우리가 처음 만났던 날 기억 나?{"\n"}
        우리가 언제 어디서{"\n"}
        어떻게 만나게 되었는지,{"\n"}
        그날 있었던 일에 대해{"\n"}
        나에게 말해줄래?
      </Text>
      <TouchableOpacity style={styles.overlayImage}>
        <Image
          source={require("../../../Assets/icons/remind_write_box.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
);

export default ReviewRemindScreen;

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

  overlayImage: {
    position: "absolute",
    bottom: "7.5%",
  },

  ImageText: {
    position: "absolute",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: colors.palette.BrownDark,
    marginBottom: "210%",
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
