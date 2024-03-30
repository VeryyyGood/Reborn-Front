import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import { colors } from '../../theme';

const ExpertScreen = ({navigation: { navigate }} ) => (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>펫로스 심리상담 센터 안녕</Text>
          <Text style={styles.numfont}>0507-1322-2538</Text>
          <Text style={styles.font}>서울 강남구 삼성동</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>글로벌펫로스</Text>
          <Text style={styles.numfont}>02-3665-6919</Text>
          <Text style={styles.font}>서울 강서구 내발산동</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>레브펫로스연구소</Text>
          <Text style={styles.numfont}>0507-1466-8996</Text>
          <Text style={styles.font}>창원 마산회원구 석전동</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>조이플마이드케어</Text>
          <Text style={styles.numfont}>0507-1326-6346</Text>
          <Text style={styles.font}>고양 일산서구 주엽동</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>박기령심리상담센터</Text>
          <Text style={styles.numfont}>031-634-1388</Text>
          <Text style={styles.font}>이천 창전동</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.imageTextContainer}>
          <Image source={require('../../Assets/icons/expert_box.png')} />
          <Text style={styles.imageText}>심리예술공간살다</Text>
          <Text style={styles.numfont}>0507-1440-3002</Text>
          <Text style={styles.font}>성남 분당구 서현동</Text>
        </View>
      </TouchableOpacity>
  </ScrollView>
);

export default ExpertScreen;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.palette.White,
    },
  
    imageTextContainer: {
      position: 'relative', 
      alignItems: 'center', 
      marginTop: '3%',
      marginBottom: '3%',
    },
  
    imageText: {
      position: 'absolute', 
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
      marginTop: '6%',
      marginLeft: '6%',
      textAlign: 'left',
      color: colors.palette.BrownDark,
      left: 0,
    },
  
    numfont: {
      position: 'absolute',
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      marginTop: '20%',
      marginLeft: '6%',
      textAlign: 'left',
      color: colors.palette.BrownDark,
      left: 0,
    },

    font: {
      fontSize: 14,
      position: 'absolute',
      fontFamily: 'Poppins-Regular',
      marginTop: '27%',
      marginLeft: '6%',
      textAlign: 'left',
      color: colors.palette.BrownDark,
      left: 0,
    }
  
  });
  