import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors"
const MypageMainScreen = ({ navigation: {navigate} }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', 'AccountManagement')}>
      <Text style={styles.font}>계정 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'PetProfileManagement' })}>
      <Text style={styles.font}>반려동물 프로필 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'ReviewMain' })}>
      <Text>
        <Text style={styles.reColor}>RE:</Text>
        <Text style={styles.font}> VIEW</Text>
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'Expert' })}>
      <Text style={styles.font}>전문가 상담</Text>
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

  font: {
    fontSize: 16,
  },

  reColor: {
    color: colors.palette.Brown,
    fontSize: 16,
  },
});
