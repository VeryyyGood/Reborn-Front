import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { buttonStyles } from "../../../components";
import { colors } from "../../../theme";
import axios from "axios";
import NaverLogin from "@react-native-seoul/naver-login";
import { useAccessToken } from "../../../context/AccessTokenContext";
import { launchImageLibrary } from "react-native-image-picker";

const AccountManagementScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const [email, setEmail] = useState("");
  const [since, setSince] = useState("");
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(
    require("../../../Assets/icons/profile.png")
  );
  const [backgroundImage, setBackgroundImage] = useState(
    require("../../../Assets/icons/profile_bg.png")
  );

  useEffect(() => {
    fetchUserProfile();
    fetchProfileImage();
    fetchBackgroundImage();
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
      if (response.data) {
        setEmail(response.data.result.email);

        const apiDate = new Date(response.data.result.since);
        const formattedDate = new Intl.DateTimeFormat("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(apiDate);

        setSince(formattedDate);
        setNickname(response.data.result.nickname);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProfileImage = async () => {
    try {
      const timestamp = new Date().getTime();
      const profileImageResponse = await axios.get(
        `http://reborn.persi0815.site/users/show-profile-image?timestamp=${timestamp}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (profileImageResponse.data.result) {
        setProfileImage({ uri: profileImageResponse.data.result });
      }
    } catch (error) {
      console.error("Profile image fetch error:", error);
    }
  };

  const fetchBackgroundImage = async () => {
    try {
      const timestamp = new Date().getTime();
      const backgroundImageResponse = await axios.get(
        `http://reborn.persi0815.site/users/show-background-image?timestamp=${timestamp}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(backgroundImageResponse.data);

      if (backgroundImageResponse.data.result) {
        setBackgroundImage({ uri: backgroundImageResponse.data.result });
      }
      console.log(backgroundImageResponse.data.result);
    } catch (error) {
      console.error("Profile image fetch error:", error);
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
      await NaverLogin.logout();
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
      await NaverLogin.deleteToken();
      console.log(deleteResponse.status);
      console.log(deleteResponse.data);

      navigate("Login");
    } catch (e) {
      console.error(e);
    }
  };

  const selectImage = (type) => {
    launchImageLibrary({ mediaType: "photo" }, async (response) => {
      if (response.didCancel || response.error) {
        console.log("User cancelled image picker");
      } else {
        const source = { uri: response.assets[0].uri };
        const formData = new FormData();

        const fieldName = type === "profile" ? "profile" : "background";
        formData.append(fieldName, {
          uri: source.uri,
          name: type === "profile" ? "profile.jpg" : "background.jpg",
          type: "image/jpeg",
        });

        let apiUrl;
        if (type === "profile") {
          apiUrl = "http://reborn.persi0815.site/users/profile-image";
        } else if (type === "background") {
          apiUrl = "http://reborn.persi0815.site/users/background-image";
        }

        try {
          const uploadResponse = await axios.post(apiUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log("Upload response:", uploadResponse.data);

          if (type === "profile") {
            setProfileImage(source);
          } else if (type === "background") {
            setBackgroundImage(source);
          }
        } catch (error) {
          console.error("Upload error:", error);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={() => selectImage("background")}>
          <Image source={backgroundImage} style={styles.backgroundImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectImage("profile")}>
          <Image source={profileImage} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.fontBold}>{nickname}</Text>
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
    height: 190,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    top: 35,
    width: 320,
    height: 130,
    borderRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    bottom: 25,
    borderRadius: 50,
  },
  fontBold: {
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
