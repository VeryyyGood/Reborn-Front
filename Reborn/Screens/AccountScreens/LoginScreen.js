import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { buttonStyles } from "../../components";
import { colors } from "../../theme";
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from "@react-native-seoul/naver-login";

const consumerKey = "fIaIMi7lrukY7sXnD0_l";
const consumerSecret = "nvDc5R3Arw";
const appName = "Hello";
const serviceUrlScheme = "navertest";

const LoginScreen = ({ navigation: { navigate } }) => {
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();

  const login = async () => {
    const { failureResponse, successResponse } = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);

    if (success) {
      navigate("Tabs", { screen: "main" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>
          PET <Text style={{ color: colors.palette.Yellow }}>RE</Text>BORN,
          {"\n"}로그인 하기
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={{ width: "83%", height: "83%", bottom: "8%" }}
          source={require("../../Assets/icons/app_icon.png")}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={buttonStyles.buttonLogin} onPress={login}>
            <View style={styles.buttonContent}>
              <Image
                source={require("../../Assets/icons/naver_logo.png")}
                style={styles.naverLogo}
              />
              <Text style={styles.buttonText}>네이버 아이디로 로그인 </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.White,
  },
  introContainer: {
    marginTop: "10%",
  },
  contentContainer: {
    alignItems: "center",
  },
  introTitle: {
    fontSize: 45,
    textAlign: "left",
    paddingLeft: "5%",
    fontFamily: "Poppins-SemiBold",
    color: colors.palette.BrownDark,
  },
  buttonContainer: {
    position: "absolute",
    top: "70%",
    bottom: "20%",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  naverLogo: {
    width: "10%",
    height: "100%",
    marginRight: "5%",
  },
  buttonText: {
    textAlign: "center",
    color: colors.palette.White,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
});
