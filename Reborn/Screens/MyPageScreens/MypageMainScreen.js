import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MypageMainScreen = ({ navigation: {navigate} }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', 'AccountManagement')}>
      <Text>계정 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'PetProfileManagement' })}>
      <Text>반려동물 프로필 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'ReviewMain' })}>
      <Text>RE:VIEW</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'Expert' })}>
      <Text>전문가 상담</Text>
    </TouchableOpacity>
  </View>
);

export default MypageMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 85,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    marginVertical: 35,
  },
});
