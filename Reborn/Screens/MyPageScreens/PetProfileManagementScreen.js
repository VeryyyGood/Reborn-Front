import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { buttonStyles } from "../../components/buttonStyles";
import { colors } from "../../theme";

const RadioButton = ({ isSelected, onPress, label }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={[styles.radioButton, isSelected]}>
        {isSelected && <View style={styles.radioButtonInner} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const checkWhite = require('../../Assets/icons/check_white.png'); // 흰색 체크 마크 이미지 경로
const checkBlack = require('../../Assets/icons/check_black.png');

const PetProfileManagementScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState(null);
  const [color, setColor] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const colorsChoice = [
    colors.palette.Black, 
    colors.palette.BrownChoco, 
    colors.palette.YellowDark, 
    colors.palette.Gray500,
    colors.palette.White];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setDate(date.toLocaleDateString('ko-KR', options));
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.font}>이름</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          editable={isEditing}
        />
      </View>
      <View>
        <Text style={styles.font}>기일</Text>
        <TouchableOpacity
          onPress={() => {
            if (isEditing) {
              showDatePicker();
            }
          }}
          style={styles.input}
        >
          <Text style={styles.font}>{date || "날짜 선택"}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View>
        <Text style={styles.font}>동물 종류</Text>
        <RadioButton 
          label="강아지" 
          isSelected={animalType === "강아지"} 
          onPress={() => isEditing && setAnimalType("강아지")}
        />
        <RadioButton 
          label="고양이" 
          isSelected={animalType === "고양이"} 
          onPress={() => isEditing && setAnimalType("고양이")}
        />
      </View>
      <View>
        <Text style={styles.font}>견종</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBreed}
          value={breed}
          editable={isEditing}
        />
      </View>
      <Text style={styles.font}>색상</Text>
      <View style={styles.colorContainer}>
        <FlatList
          horizontal
          data={colorsChoice}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.colorCircle,
                { backgroundColor: item }, 
                color === item && styles.selected
              ]}
              onPress={() => isEditing && setColor(item)} 
            >
              {color === item && (
                <Image
                  style={styles.checkmark} 
                  source={item === colors.palette.White ? checkBlack : checkWhite} />
              )}
            </Pressable>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <TouchableOpacity style={[buttonStyles.buttonBrownBottom, {top: '14.5%'}]} onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.buttonFont}>{isEditing ? "저장하기" : "수정하기"}</Text>
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
    marginBottom: '3%',
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
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: '3%',
  },
  buttonFont: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.palette.White,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.palette.Brown,
  },
  checkmark: {
    position: 'absolute',
    alignSelf: 'center',
    top: '10%',
  },
});

export default PetProfileManagementScreen;
