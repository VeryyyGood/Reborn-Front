import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { buttonStyles } from '../../../components';
import { colors } from '../../../theme';

const AccountManagementScreen = ({ navigation: { navigate }} ) => (
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image source={require('../../../Assets/icons/profile_bg.png')} style={styles.backgroundImage}></Image>
      <Image source={require('../../../Assets/icons/profile.png')} style={styles.profileImage}></Image>
    </View>
    <Text style={styles.fontBold}>김보경</Text>
    <View>
      <TouchableOpacity style={buttonStyles.buttonWhiteBrown} onPress={() => navigate('AccountModify')}>
        <Text style={styles.buttonFont}>계정 정보 수정</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.line} />
      <View style={styles.infoRow}>
        <Image source={require('../../../Assets/icons/mail.png')} style={styles.icon} />
        <Text style={styles.fontNormal}>Email: animalLove@gmail.com</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.infoRow}>
        <Image source={require('../../../Assets/icons/date.png')} style={styles.icon} />
        <Text style={styles.fontNormal}>Since: 2024.01.24</Text>
      </View>
      <View style={styles.line} />
    </View>
    <View>
      <TouchableOpacity style={buttonStyles.buttonWhiteBrown} onPress={() => navigate('Login')}>
        <Text style={styles.buttonFont}>로그아웃</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity>
        <Text style={{color: colors.palette.Red, fontSize: 14}}>계정 삭제하기</Text>
      </TouchableOpacity>
  </View>
);

export default AccountManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.palette.White,
  },
  imageWrapper: {
    position: 'relative', // 이 부모 View에 대해 자식 요소들을 상대적 위치로 설정
    height: 100, // 또는 실제 이미지 크기에 맞게 조정
    width: 100, // 또는 실제 이미지 크기에 맞게 조정
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute', // 절대 위치를 사용하여 다른 요소와 겹치도록 설정
  },
  profileImage: {
    position: 'absolute', // 절대 위치를 사용하여 다른 요소와 겹치도록 설정
    top: 50,
  },
  fontBold: {
    marginTop: 65,
    fontSize: 18,
    fontWeight: 'bold',
  },
  fontNormal: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttonFont: {
    color: colors.palette.Brown, 
    fontSize: 16, 
    fontWeight: 'bold'
  },
  infoContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 42,
    height: 42,
  },
  line: {
    borderBottomColor: colors.palette.Gray250,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 8,
  }
});
