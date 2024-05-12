import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { colors } from "../theme";

const RememberDiaryItem = ({
  title,
  content,
  rememberImage,
  date,
  imageDate,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ReviewStack", {
          screen: "ReviewRememberDiary",
          params: {
            title,
            content,
            rememberImage,
            date,
            imageDate,
          },
        })
      }
    >
      <View style={styles.item}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../Assets/icons/rememberBox.png")}
        >
          <View style={styles.container}>
            <Text style={styles.date}>DAY {date}</Text>
            <Image
              style={{
                marginLeft: -20,
                marginBottom: 3,
                tintColor: colors.palette.BrownDark,
              }}
              source={require("../Assets/icons/rediaryimage/arrow2.png")}
            />
            <Image source={rememberImage} style={styles.image} />
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 85,
    height: 85,
    marginBottom: 6,
    resizeMode: "contain",
  },
  date: {
    fontSize: 24,
    fontFamily: "Poppins-ExtraBold",
    marginHorizontal: "10%",
    color: colors.palette.Brown,
  },
  item: {
    height: 290,
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
});

export default RememberDiaryItem;
