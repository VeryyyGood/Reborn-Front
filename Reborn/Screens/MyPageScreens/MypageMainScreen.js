import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
const MypageMainScreen = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate("MypageStack", "AccountManagement")}
    >
      <View style={styles.row}>
        <Image
          source={require("../../Assets/icons/account_manage.png")}
          style={styles.icon}
        />
        <Text style={styles.font}>계정 관리</Text>
        <Image
          source={require("../../Assets/icons/right_arrow.png")}
          style={styles.arrow_icon1}
        />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate("MypageStack", { screen: "PetProfileList" })}
    >
      <View style={styles.row}>
        <Image
          source={require("../../Assets/icons/pet_profile.png")}
          style={styles.icon}
        />
        <Text style={styles.font}>반려동물 프로필 관리</Text>
        <Image
          source={require("../../Assets/icons/right_arrow.png")}
          style={styles.arrow_icon2}
        />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigate("MypageStack", { screen: "ReviewPetList" })}
    >
      <View style={styles.row}>
        <Image
          source={require("../../Assets/icons/review.png")}
          style={styles.icon}
        />
        <Text style={styles.font}>
          <Text style={styles.reColor}>RE:</Text>
          <Text> VIEW</Text>
        </Text>
        <Image
          source={require("../../Assets/icons/right_arrow.png")}
          style={styles.arrow_icon3}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default MypageMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: "8%",
    backgroundColor: colors.palette.White,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    marginVertical: "8%",
  },

  font: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    top: "0.2%",
    color: colors.palette.BrownDark,
  },

  reColor: {
    color: colors.palette.Brown,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },

  icon: {
    marginRight: "5%",
  },

  arrow_icon1: {
    marginLeft: "53%",
  },

  arrow_icon2: {
    marginLeft: "31%",
  },

  arrow_icon3: {
    marginLeft: "53%",
  },

  arrow_icon4: {
    marginLeft: "49%",
  },
});
