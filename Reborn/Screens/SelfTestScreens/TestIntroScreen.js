import React from "react";
import {View, Text,TouchableOpacity,StyleSheet,Image} from "react-native";

import { colors } from "../../theme"
//테스트. 다음으로 버튼 테마 가져옴
import { buttonstyles } from "../../theme/buttonstyles"


const TestIntroScreen = ({navigation: {navigate}}) => (
    <View style={styles.container}>
            <View style={styles.testBox}>
                <View>
                    <Image style={{width: 300, height: 300, marginBottom:10,}} source={require('../../Assets/Images/Intro/Intro_Image.png')}/> 
                </View>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{textAlign:"center",}}>이렇게 긴 질문에 대한 디자인은 어떨가 궁금하지만 딱히 아는 질문이 없음그래서 아무말이나 지껄이는중 그림이 움직이면 안될 것 같은데 움직이네 그리고 다른 그림을 쓰겠지? 아니 버튼 패딩ㄹㅇ개배신감드네</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={buttonstyles.nextbuttonTheme} onPress={() =>navigate('Stack', { screen: 'One' })}>
                    <Text>자가진단 하러가기</Text>
                </TouchableOpacity>
            </View>
        </View>
); //뷰 반환

export default TestIntroScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    testBox: {
        width: "85%",
        height: 500,
        backgroundColor: colors.palette.Gray300,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems:"center",
    },
    testTitle: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
});