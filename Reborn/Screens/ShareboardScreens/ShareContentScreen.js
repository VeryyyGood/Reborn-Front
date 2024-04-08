import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../../theme";

const ShareContentScreen = ({ route }) => {
  const { id, title, date, content } = route.params;
  const [isHeart, setIsHeart] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <View style={{backgroundColor: colors.background}}>
      {/* <Text>{title}</Text>
      <Text>{date}</Text>
      <Text>{content}</Text>
      <Text>응애</Text> */}
      <View style={styles.shareItem}>
        <View style={styles.titlecontainer}>
          <Image
            style={styles.profile}
            source={require("../../Assets/icons/profile.png")}
          />
          <Text
            style={[
              styles.title,
              { color: colors.palette.BrownDark, fontFamily: "Poppins-Bold" },
            ]}
          >
            {title}
            {"\n"}
            <Text style={styles.date}>{date}</Text>{" "}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.content,
              { color: colors.palette.BrownDark, fontFamily: "Poppins-Medium" },
            ]}
          >
            {content}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginLeft: "5%", tintColor: colors.palette.BrownDark }}
              source={require("../../Assets/icons/ShareBoard/commentIcon.png")}
            />
            <Text
              style={{
                marginLeft: "7%",
                color: colors.palette.BrownDark,
                fontFamily: "Poppins-Bold",
              }}
            >
              23
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setIsHeart(!isHeart)}>
              <Image
                style={{
                  marginRight: "5%",
                  tintColor: isHeart ? colors.palette.Red : colors.palette.Gray400
                }}
                source={require("../../Assets/icons/ShareBoard/heartIconGrey.png")}
              />
            </TouchableOpacity>
            
            <Text
              style={{
                color: colors.palette.BrownDark,
                fontFamily: "Poppins-Bold",
              }}
            >
              100
            </Text>
            <TouchableOpacity onPress={()=> setIsBookmark(!isBookmark)}>
                <Image
                style={{ marginLeft: 10,
                tintColor: isBookmark ? colors.palette.Blue : colors.palette.Gray400 }}
                source={require("../../Assets/icons/ShareBoard/bookmarkIconGrey.png")}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShareContentScreen;

const styles = StyleSheet.create({
  shareItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  titlecontainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    color: "grey",
  },
  content: {
    fontSize: 16,
    marginHorizontal: "5%",
  },
  profile: {
    width: "20%",
    resizeMode: "contain",
  },
});
