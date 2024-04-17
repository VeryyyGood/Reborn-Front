import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { buttonStyles } from "../../../components";
import { colors } from "../../../theme";
import axios from "axios";
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from "@react-native-seoul/naver-login";
import { useAccessToken } from "../../../context/AccessTokenContext";

const AccountManagementScreen = ({ navigation: { navigate } }) => {
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();
  const { accessToken } = useAccessToken();
  const [email, setEmail] = useState("");
  const [since, setSince] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://reborn.persi0815.site/users/info",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.status);
      if (response.data) {
        setEmail(response.data.email); // 이메일 상태 업데이트
        setSince(response.data.since); // 가입 날짜 상태 업데이트
      }
      console.log(accessToken);
      console.log(email, since);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      const logoutResponse = await axios.delete(
        "http://reborn.persi0815.site/users/logout",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(logoutResponse.status);
      console.log(logoutResponse.data);

      navigate("Login");
    } catch (e) {
      console.error(e);
    }
  };

  const deleteToken = async () => {
    try {
      const deleteResponse = await axios.delete(
        "http://reborn.persi0815.site/users/me",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(deleteResponse.status);
      console.log(deleteResponse.data);
      navigate("Login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../Assets/icons/profile_bg.png")}
          style={styles.backgroundImage}
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("../../../Assets/icons/pencil.png")}
            style={styles.backgroundPencil}
          ></Image>
        </TouchableOpacity>
        <Image
          source={require("../../../Assets/icons/profile.png")}
          style={styles.profileImage}
        ></Image>
        <TouchableOpacity>
          <Image
            source={require("../../../Assets/icons/pencil.png")}
            style={styles.profilePencil}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.fontBold}>김보경</Text>
      <View style={styles.infoContainer}>
        <View style={styles.line} />
        <View style={styles.infoRow}>
          <Image source={require("../../../Assets/icons/mail.png")} />
          <Text style={styles.fontNormal}>Email: {email}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.infoRow}>
          <Image source={require("../../../Assets/icons/date.png")} />
          <Text style={styles.fontNormal}>Since: {since}</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View>
        <TouchableOpacity
          style={buttonStyles.buttonWhiteBrown}
          onPress={logout}
        >
          <Text style={styles.buttonFont}>로그아웃</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={deleteToken}>
        <Text
          style={{
            color: colors.palette.Red,
            fontFamily: "Poppins-Regular",
            fontSize: 14,
          }}
        >
          계정 삭제하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AccountManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.palette.White,
  },
  imageWrapper: {
    position: "relative",
    height: "15%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
  },
  backgroundPencil: {
    marginLeft: "500%",
    marginTop: "230%",
  },
  profileImage: {
    position: "absolute",
    top: "55%",
  },
  profilePencil: {
    marginLeft: "125%",
  },

  fontBold: {
    marginTop: "19%",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginBottom: "6%",
    color: colors.palette.BrownDark,
  },
  fontNormal: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginLeft: "3%",
    color: colors.palette.BrownDark,
  },
  buttonFont: {
    color: colors.palette.Brown,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  infoContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderBottomColor: colors.palette.Gray250,
    borderBottomWidth: 1,
    alignSelf: "stretch",
    marginVertical: 8,
  },
});
