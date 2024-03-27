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
    <View style={styles.infoContainer}>
      <View style={styles.line} />
      <View style={styles.infoRow}>
        <Image source={require('../../../Assets/icons/mail.png')} />
        <Text style={styles.fontNormal}>Email: animalLove@gmail.com</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.infoRow}>
        <Image source={require('../../../Assets/icons/date.png')} />
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
        <Text style={{color: colors.palette.Red, fontFamily: 'Poppins-Regular', fontSize: 14}}>계정 삭제하기</Text>
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
    position: 'relative',
    height: '15%', 
    width: '15%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
  },
  profileImage: {
    position: 'absolute', 
    top: '55%',
  },
  fontBold: {
    marginTop: '19%',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: '6%',
  },
  fontNormal: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: '3%',
  },
  buttonFont: {
    color: colors.palette.Brown, 
    fontSize: 16, 
    fontFamily: 'Poppins-Bold'
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
  line: {
    borderBottomColor: colors.palette.Gray250,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 8,
  },
});
