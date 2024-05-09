import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { buttonStyles } from "../../components/buttonStyles";
import { colors } from "../../theme";
import axios from "axios";
import { useAccessToken } from "../../context/AccessTokenContext";

const RadioButton = ({ isSelected, onPress, label }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View
        style={[
          styles.radioButton,
          isSelected ? styles.radioButtonSelected : null,
        ]}
      >
        {isSelected && <View style={styles.radioButtonInner} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const checkWhite = require("../../Assets/icons/check_white.png");
const checkBlack = require("../../Assets/icons/check_black.png");

const PetProfileManagementScreen = ({ route }) => {
  const { petId } = route.params;
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState(null);
  const [color, setColor] = useState("");
  const [petInfo, setPetInifo] = useState(null);
  const { accessToken } = useAccessToken();
  const navigation = useNavigation();

  const colorMap = {
    WHITE: colors.palette.White,
    BLACK: colors.palette.Black,
    BROWN: colors.palette.BrownChoco,
    YELLOWDARK: colors.palette.YellowDark,
    GRAY: colors.palette.Gray500,
  };

  useEffect(() => {
    const fetchPetInfo = async () => {
      try {
        const response = await axios.get(
          `http://reborn.persi0815.site:8080/mypage/list/${petId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const result = response.data.result;
        setPetInifo(result);
        setName(result.petName);
        setDate(result.anniversary);
        setAnimalType(result.petType);
        setBreed(result.detailPetType);
        setColor(result.petColor);
      } catch (error) {
        console.error("오류 발생", error);
        console.log(`Fetching info for petId: ${petId}`);
      }
    };

    fetchPetInfo();
  }, [petId]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://reborn.persi0815.site:8080/mypage/delete/${petId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { isSuccess, message } = response.data;
      if (isSuccess) {
        alert("프로필이 삭제되었습니다.");
        navigation.navigate("PetProfileList");
      } else {
        alert(`삭제 실패: ${message}`);
      }
    } catch (error) {
      console.error("오류", error);
      alert("삭제 중 오류 발생");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.font}>이름</Text>
        <Text style={styles.input}>{name}</Text>
      </View>
      <View>
        <Text style={styles.font}>기일</Text>
        <Text style={styles.input}>{date}</Text>
      </View>
      <View>
        <Text style={styles.font}>동물 종류</Text>
        <RadioButton
          label="강아지"
          isSelected={animalType === "DOG"}
          onPress={() => {}}
        />
        <RadioButton
          label="고양이"
          isSelected={animalType === "CAT"}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.font}>견종</Text>
        <Text style={styles.input}>{breed}</Text>
      </View>
      <Text style={styles.font}>색상</Text>
      <View style={styles.colorContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Object.keys(colorMap)}
          renderItem={({ item }) => {
            const backgroundColor = colorMap[item];
            return (
              <View
                style={[
                  styles.colorCircle,
                  { backgroundColor: backgroundColor },
                  color === item && styles.selected,
                ]}
              >
                {color === item && (
                  <Image
                    style={styles.checkmark}
                    source={item === "WHITE" ? checkBlack : checkWhite}
                  />
                )}
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
      <TouchableOpacity
        style={[buttonStyles.buttonBrownBottom, { top: "14.5%" }]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonFont}>삭제하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.palette.White,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.palette.Gray300,
    borderRadius: 16,
    padding: 15,
    marginBottom: "3%",
    height: 60,
  },

  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 42,
    borderColor: colors.palette.Black,
    borderWidth: 1,
  },

  selected: {
    borderWidth: 2,
    borderColor: colors.palette.Black,
  },

  font: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    marginBottom: "3%",
  },
  buttonFont: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: colors.palette.White,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.palette.Brown,
  },
  checkmark: {
    position: "absolute",
    alignSelf: "center",
    top: "10%",
  },
});

export default PetProfileManagementScreen;
