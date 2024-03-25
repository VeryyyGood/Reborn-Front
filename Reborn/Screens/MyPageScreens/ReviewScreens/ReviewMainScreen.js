import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from '../../../theme/colors';

const ReviewMainScreen = ({ navigation: { navigate }} ) => (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReconnect' })} style={styles.touchable}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../../Assets/icons/review_album.png')} />
          <Text style={styles.imageText}>
            <Text style={styles.reColor}>RE</Text>CONNECT:
          </Text>
          <Text style={styles.font}>나의 반려동물과 만나기</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewRemind' })}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../../Assets/icons/review_album.png')} />
          <Text style={styles.imageText}>
            <Text style={styles.reColor}>RE</Text>MIND:
          </Text>
          <Text style={styles.font}>충분한 대화 나누기</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReveal' })}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../../Assets/icons/review_album.png')} />
          <Text style={styles.imageText}>
            <Text style={styles.reColor}>RE</Text>VEAL:
          </Text>
          <Text style={styles.font}>나의 감정 들여다보기</Text>
        </View>
      </TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../../Assets/icons/review_album.png')} />
          <Text style={styles.imageText}>
            <Text style={styles.reColor}>RE</Text>MEMBER:
          </Text>
          <Text style={styles.font}>건강한 작별 준비하기</Text>
        </View>
      <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReborn' })}>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../../Assets/icons/review_album.png')} />
          <Text style={styles.imageText}>
            <Text style={styles.reColor}>RE</Text>BORN:
          </Text>
          <Text style={styles.font}>나의 반려동물과 작별하기</Text>
        </View>
      </TouchableOpacity> 
  </ScrollView>
);

export default ReviewMainScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  touchable: {
    alignItems: 'center', // TouchableOpacity 내부 요소를 가운데 정렬
  },

  imageTextContainer: {
    position: 'relative', // 이미지와 텍스트 컨테이너
    alignItems: 'center', // 이미지와 텍스트를 가운데 정렬
    marginTop: 10,
    marginBottom: 10,
  },


  imageText: {
    position: 'absolute', // 텍스트를 이미지 위에 절대적 위치로 설정
    fontWeight: 'bold', // 텍스트 굵기
    fontSize: 24,
    padding: 18,
    textAlign: 'left',
    left: 0,
  },

  font: {
    position: 'absolute',
    fontSize: 16,
    marginTop: 55,
    marginLeft: 18,
    textAlign: 'left',
    left: 0,
  },

  reColor: {
    color: colors.palette.Brown,
  },
});
