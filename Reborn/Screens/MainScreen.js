import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { colors } from "../theme";
import styled from "styled-components/native";


const MainScreen = ({ navigation: { navigate } }) => (
  <Container>
    <Text style={styles.title}><Text style={{color: colors.palette.Yellow}}>RE:</Text> BORN</Text>
    <View style={{ flexDirection: "row",}}>
        <Image style={{ width: "25%", resizeMode: "contain"}} source={require('../Assets/icons/profile.png')}/>
        <Text style={styles.helloText}>안녕하세요,{"\n"}<Text style={{color: colors.palette.Brown}}>김보경</Text>님</Text>
    </View>
    <View style={{paddingHorizontal:20, marginBottom: -20,}}>
      <Text style={styles.boxtext}>
          <Text style={{color: colors.palette.Brown,}}>펫로스 증후군, {"\n"}</Text>사랑하는 가족이었던 반려동물이 내 곁을 영영 떠나가게 되면서 느끼게 되는 자연스러운 우울감, 상실감입니다.
      </Text>
    </View>
    <View style={styles.removerButton}>
      <Text style={styles.boxtext}>
        <Text style={{color: colors.palette.Brown,}}>마음에 담아두지 마세요. {"\n"}</Text>AI 챗봇, REMOVER와 대화하며 마음의 짐을 덯어 낼 수 있는 공간을 마련해드립니다.
      </Text>
      <TouchableOpacity>
          <Text style={{marginLeft: '30%',}}>REMOVER와 대화하러 가기  <Image style={{position: 'absolute', bottom: "20%", left: '20%'}} source={require('../Assets/icons/mainimages/arrow.png')} /></Text>
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: "row", marginTop: -10,}}>
      <TouchableOpacity
        style={styles.TestButton}
        onPress={() => navigate("SelfTestStack", { screen: "TestIntro" })}>
        <Text style={styles.boxtext}>
          <Text style={{color: colors.palette.Brown,}}>펫로스 증후군 {"\n"}</Text>자가진단 하러 가기
        </Text>
        <Image style={{position: 'absolute', bottom: "20%", left: '20%'}} source={require('../Assets/icons/mainimages/arrow.png')} />
        <Image style={{position: 'absolute', bottom: -10, right: -10}} source={require('../Assets/icons/mainimages/dog.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rebornButton}
        onPress={() => navigate("RebornDogStack", { screen: "Intro" })}>
        <Text style={styles.boxtext}><Text style={{color: colors.palette.Brown,}}>RE: {"\n"}</Text>작별하러 가기
        </Text>
        <Image style={{position: 'absolute', bottom: "20%", left: '20%'}} source={require('../Assets/icons/mainimages/arrow.png')} />
        <Image style={{position: 'absolute', bottom: -10, right: -10}} source={require('../Assets/icons/mainimages/rainbow.png')} />
      </TouchableOpacity>
    </View>
  </Container>
); //뷰 반환

export default MainScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
  },
  helloText:{
    fontSize: 20,
    fontFamily: "Poppins-ExtraBold",
    color: colors.palette.BrownDark,
    marginTop: 20,
    marginLeft: "5%",
    textAlign: "left",
  },
  removerButton: {
    height: "25%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: colors.palette.Gray200,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    paddingHorizontal: 20,
  },
  TestButton: {
    height: "55%",
    width: "40%",
    borderRadius: 10,
    backgroundColor: "#FCF1F1",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    paddingHorizontal: 20,
  },
  rebornButton: {
    height: "55%",
    width: "40%",
    borderRadius: 10,
    backgroundColor: "#FFF6EB",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  boxtext: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: colors.palette.BrownDark,
    marginBottom: 20,
  },
});

const Container = styled.View`
  flex: 1;
  background-color: ${colors.palette.White};
  padding: 5% 5% 0% 5%;
`;
//  padding: 0% 5% 0% 5%;