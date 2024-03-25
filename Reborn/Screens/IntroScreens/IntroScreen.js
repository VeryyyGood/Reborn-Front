import React from "react";
import {View, Text,StyleSheet, Image, TouchableOpacity} from "react-native";
import { colors } from "../../theme";

const IntroScreen = ({navigation: {navigate}}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigate("Tutorial")}>
            <View>
                <Text style={styles.introTitle}>PET <Text style={{color: colors.palette.Yellow}}>RE</Text>BORN{"\n"}시작하기.</Text>
            </View>
            <View style={{flex:1.2,marginBottom: 30, alignItems: 'center',marginBottom:30,}}>
                <Image style={{width: 320, height: 320,}} source={require('../../Assets/Images/Intro/Intro_Image.png')}/>  
            </View>
            <View style={{flex:0.8}}>
                <Text style={styles.introText}>
                    이 앱을 사용하는 사람들은 일단 펫로스 증후군이 있다는 소리니까 반갑습니다는 좀아닌 것 같고 행복하세요 할 수 도없고
                </Text>
            </View>
        </TouchableOpacity>
        </View>
); //뷰 반환

export default IntroScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    introTitle: {
        fontSize: 30,
        textAlign: "left",
        paddingLeft: 20,
        marginTop: 30,
        fontWeight: "bold",
        paddingVertical: 20,
    },
    introText: {
        color: "lightgrey",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 30,
        marginTop: 10,
    },
});