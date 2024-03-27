import React from "react";
import {View, Text,Button,TouchableOpacity, Image} from "react-native";
import { buttonStyles,ViewStyles } from "../../components";
import { colors } from "../../theme";

const TestResultScreen = ({navigation, route} ) => {
    // TestScreen에서 전달한 점수
    const { score } = route.params;

    return (
        <View style={ViewStyles.container}>
            <View style={ViewStyles.greyBox}>
                <View>
                    <Image style={{width: 200, height: 200, marginBottom:'5%',}} source={require('../../Assets/Images/Intro/Intro_Image.png')}/> 
                </View>
                <View>
                    <Text style={{textAlign:"center",fontWeight: "bold",}}>
                        <Text>당신의 점수는 : {score} </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default TestResultScreen;