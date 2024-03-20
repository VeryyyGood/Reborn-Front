import React, { useEffect, useState } from "react";
import {View, Text,StyleSheet,TouchableOpacity, Button, Image } from "react-native";

import { CommonActions } from '@react-navigation/native';

import { colors } from "../../theme/colors"
import { buttonstyles } from "../../theme/buttonstyles"
const TutorialScreen = ({navigation: {navigate}}) => {
    //버튼을 누른 횟숫
    const [pressCount, setPressCount] = useState(0);
    //text관리
    const [tutoText, setTutoText] = useState("반갑소. 나는 첫번째요");
    
    navigateToMainStack = () => {
        navigate('Tabs', { screen: 'Tabs' })
        /*
        navigate.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Main' },], // 메인 스택의 처음으로
          })
        );
        */
    };
    //여기 사라져

    //버튼을 누를때마다 호출됨
    const handlePress = () => {
        setPressCount(pressCount + 1); //버튼 클릭 횟수 증가
    };
    //pressCount 상태가 변경될때마다 실행됨
    useEffect(()=> {
        if (pressCount === 1){
            setTutoText("반갑소. 나는 두번째 튜토리얼이요");
        }
        else if (pressCount === 2){
            setTutoText("질문에 답하고 감정을 기록하며 스스로를 위로해보는건 어떨까요?");
        }
        else if (pressCount === 3) {
            //navigation.navigate('Main');
            navigateToMainStack();
        }
    }, [pressCount]); //pressCount가 변경될때만 실행. state

    return(
        <View style={styles.container}>
            <View style={{flex:0.8,}}>
                <Text style={styles.tutoTitle}>안녕하세요{"\n"}문구가{"\n"}생각이 나지 않아요</Text>
            </View>
            <View style={{flex:1.2, alignItems: 'center',marginBottom:30,}}>
                <Image style={{width: 300, height: 300,}} source={require('../../Assets/Images/Intro/Intro_Image.png')}/>  
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.tutoText}>
                    {tutoText}
                </Text>
            </View>
            <View style={{position: 'absolute', top: "85%", bottom: "5%",}}>
                <TouchableOpacity style={buttonstyles.nextbuttonYellow} onPress={handlePress}>
                    <Text> 다음으로 </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    );
} //뷰 반환

export default TutorialScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tutoTitle: {
        fontSize: 30,
        textAlign: "left",
        paddingRight: "30%",
        marginTop: 30,
        fontWeight: "bold",
        //backgroundColor: "red",
    },
    tutoText: {
        color: "lightgrey",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 20,
    },
  });