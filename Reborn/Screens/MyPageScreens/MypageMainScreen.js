import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors"
const MypageMainScreen = ({ navigation: {navigate} }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', 'AccountManagement')}>
      <View style={styles.row}>
        <Image source={require('../../Assets/icons/account_manage.png')} style={styles.icon} />
        <Text style={styles.font}>계정 관리</Text>
        <Image source={require('../../Assets/icons/right_arrow.png')} style={styles.arrow_icon1} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'PetProfileManagement' })}>
      <View style={styles.row}>
        <Image source={require('../../Assets/icons/pet_profile.png')} style={styles.icon} />
        <Text style={styles.font}>반려동물 프로필 관리</Text>
        <Image source={require('../../Assets/icons/right_arrow.png')} style={styles.arrow_icon2} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'ReviewMain' })}>
      <View style={styles.row}>
        <Image source={require('../../Assets/icons/review.png')} style={styles.icon} />
        <Text>
          <Text style={styles.reColor}>RE:</Text>
          <Text style={styles.font}> VIEW</Text>
        </Text>
        <Image source={require('../../Assets/icons/right_arrow.png')} style={styles.arrow_icon3} />
      </View>
      </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigate('MypageStack', {screen: 'Expert' })}>
      <View style={styles.row}>
        <Image source={require('../../Assets/icons/expert.png')} style={styles.icon} />
        <Text style={styles.font}>전문가 상담</Text>
        <Image source={require('../../Assets/icons/right_arrow.png')} style={styles.arrow_icon4} />
      </View>
    </TouchableOpacity>
  </View>
);

export default MypageMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 25,
    backgroundColor: colors.palette.White,
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

  icon: {
    width: 42,
    height: 42,
    marginRight: 20,
  },

  arrow_icon1: {
    width: 24, // 이미지의 너비
    height: 24, // 이미지의 높이
    marginLeft: 198,
  },

  arrow_icon2: {
    width: 24, // 이미지의 너비
    height: 24, // 이미지의 높이
    marginLeft: 120,
  },

  arrow_icon3: {
    width: 24, // 이미지의 너비
    height: 24, // 이미지의 높이
    marginLeft: 196,
  },

  arrow_icon4: {
    width: 24, // 이미지의 너비
    height: 24, // 이미지의 높이
    marginLeft: 180,
  },

});
