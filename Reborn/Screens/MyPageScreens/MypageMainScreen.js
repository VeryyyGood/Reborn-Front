import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MypageMainScreen = ({ navigation: {navigate} }) => (
  <View>
    <TouchableOpacity onPress={() => navigate('MypageStack', 'AccountManagement')}>
      <Text>계정 관리</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('MypageStack', {screen: 'PetProfileManagement' })}>
      <Text>반려동물 프로필</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('MypageStack', {screen: 'ReviewMain' })}>
      <Text>리뷰메인</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('MypageStack', {screen: 'Expert' })}>
      <Text>전문가 상담</Text>
    </TouchableOpacity>
  </View>

);

export default MypageMainScreen;
