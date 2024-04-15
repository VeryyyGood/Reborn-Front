import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";
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
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const getProfile = async (accessToken) => {
    try {
      const profileResult = await NaverLogin.getProfile(accessToken);
      if (profileResult) {
        const { nickname, email } = profileResult.response;
        const username = "{naver}" + email.split("@")[0];
        const provider = "naver";

        console.log(nickname);
        console.log(email);
        console.log(username);
        console.log(provider);

        setNickname(nickname);
        setEmail(email);
        setGetProfileRes(profileResult);

        const userData = {
          email,
          username,
          nickname,
          provider,
        };
        console.log("함수 호출됨");
        axios
          .post("http://reborn.persi0815.site/token/generate", userData)
          .then((response) => {
            console.log(response.status);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("ERROR", error);
            if (error.response) {
              // 요청이 이루어졌으나 서버가 2xx 이외의 상태 코드로 응답
              console.error("Error Response:", error.response.data);
              console.error("Status:", error.response.status);
              console.error("Headers:", error.response.headers);
            } else if (error.request) {
              // 요청이 이루어졌으나 응답을 받지 못함
              console.error("Error Request:", error.request);
            } else {
              // 요청을 만들 때 문제가 발생함
              console.error("Error Message:", error.message);
            }
          });
      }
    } catch (e) {
      setGetProfileRes(undefined);
      setNickname("");
      setEmail("");
    }
  };

  const login = async () => {
    try {
      console.log("로그인 힘수는 돌아가나봄");
      const { failureResponse, successResponse } = await NaverLogin.login({
        appName,
        consumerKey,
        consumerSecret,
        serviceUrlScheme,
      });

      setSuccessResponse(successResponse);
      setFailureResponse(failureResponse);

      if (successResponse) {
        console.log("로그인 성공함");
        getProfile(successResponse.accessToken);
        console.log("getProfile했어야함");
        navigate("Tabs", { screen: "main" });
        console.log("메인으로 넘어감");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
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
