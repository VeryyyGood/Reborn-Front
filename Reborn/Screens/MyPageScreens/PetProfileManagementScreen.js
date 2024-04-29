import React, { useState } from "react";
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

const checkWhite = require("../../Assets/icons/check_white.png"); // 흰색 체크 마크 이미지 경로
const checkBlack = require("../../Assets/icons/check_black.png");

const PetProfileManagementScreen = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState(null);
  const [color, setColor] = useState("");

  const colorsChoice = [
    colors.palette.Black,
    colors.palette.BrownChoco,
    colors.palette.YellowDark,
    colors.palette.Gray500,
    colors.palette.White,
  ];

  const handleDelete = () => {
    //삭제 로직 추가할 예정
    alert("프로필이 삭제되었습니다.");
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
          isSelected={animalType === "강아지"}
          onPress={() => {}}
        />
        <RadioButton
          label="고양이"
          isSelected={animalType === "고양이"}
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
          data={colorsChoice}
          renderItem={({ item }) => (
            <View
              style={[
                styles.colorCircle,
                { backgroundColor: item },
                color === item && styles.selected,
              ]}
            >
              {color === item && (
                <Image
                  style={styles.checkmark}
                  source={
                    item === colors.palette.White ? checkBlack : checkWhite
                  }
                />
              )}
            </View>
          )}
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
