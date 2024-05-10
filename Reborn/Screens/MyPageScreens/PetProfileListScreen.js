import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { colors } from "../../theme";
import { useAccessToken } from "../../context/AccessTokenContext";
import { useFocusEffect } from "@react-navigation/native";

const PetProfileListScreen = ({ navigation: { navigate } }) => {
  const { accessToken } = useAccessToken();
  const [pets, setPets] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchPets();
    }, [])
  );

  const fetchPets = async () => {
    try {
      const response = await axios.get(
        "http://reborn.persi0815.site:8080/mypage/list",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.isSuccess) {
        setPets(response.data.result);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("API 호출 중 에러 발생:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pets.map((pet) => (
        <TouchableOpacity
          key={pet.petId}
          onPress={() =>
            navigate("MypageStack", {
              screen: "PetProfileManagement",
              params: { petId: pet.petId },
            })
          }
        >
          <View style={styles.imageTextContainer}>
            <View style={styles.imageContainer}>
              <Image source={require("../../Assets/icons/expert_box.png")} />
              <Image
                source={require("../../Assets/icons/ribbon.png")}
                style={styles.ribbonImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.imageText}>{pet.petName}</Text>
                <Text style={styles.font}>{pet.anniversary}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PetProfileListScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.palette.White,
  },

  imageTextContainer: {
    alignItems: "center",
    marginTop: "3%",
    marginBottom: "3%",
  },

  imageContainer: {
    position: "relative",
  },

  ribbonImage: {
    position: "absolute",
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginTop: "9.7%",
    marginLeft: "6%",
  },

  textContainer: {
    position: "absolute",
    marginLeft: "26%",
    marginTop: "8%",
  },

  imageText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    textAlign: "left",
    color: colors.palette.BrownDark,
  },

  font: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    color: colors.palette.BrownDark,
  },

  reColor: {
    color: colors.palette.Brown,
  },
});
