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

const weatherImages = {
  SUNNY: require("../Assets/icons/rediaryimage/sun.png"),
  CLOUDY: require("../Assets/icons/rediaryimage/cloud.png"),
  RAINY: require("../Assets/icons/rediaryimage/rain.png"),
};
const backgroundImages = {
  bluebox: require("../Assets/icons/rediaryimage/blueBox.png"),
  yellowbox: require("../Assets/icons/rediaryimage/yellowBox.png"),
  redbox: require("../Assets/icons/rediaryimage/redBox.png"),
};

const RevealDiaryItem = ({
  date,
  pickEmotion,
  id,
  resultEmotion,
  navigation,
}) => {
  let backgroundImage;
  if (resultEmotion == "BLUE") {
    backgroundImage = backgroundImages.bluebox;
  } else if (resultEmotion == "RED") {
    backgroundImage = backgroundImages.redbox;
  } else if (resultEmotion == "YELLOW") {
    backgroundImage = backgroundImages.yellowbox;
  } else {
    backgroundImage = require("../Assets/icons/rediaryimage/yellowBox.png");
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ReviewStack", {
          screen: "ReviewRevealDiary",
          params: {
            date,
            id,
            pickEmotion,
            resultEmotion,
          },
        })
      }
    >
      <View style={styles.item}>
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        >
          <View style={styles.container}>
            <Image source={weatherImages[pickEmotion]} style={styles.image} />
            <Text style={styles.date}>DAY {date}</Text>
            <Image
              style={{
                marginLeft: -20,
                marginBottom: 3,
                tintColor: colors.palette.BrownDark,
              }}
              source={require("../Assets/icons/rediaryimage/arrow2.png")}
            />
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
    height: 150,
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
});

export default RevealDiaryItem;
