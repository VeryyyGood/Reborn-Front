import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image, KeyboardAvoidingView, Platform, Keyboard } from "react-native";


import { colors } from "../../theme";
import { buttonStyles } from "../../components";

const NicknameInputScreen = ({ navigation: { navigate } }) => {
    const [keyboardShown, setKeyboardShown] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardShown(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardShown(false);
        });
    
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const [nickname, setNickname] = useState('');

    const navigateToNextScreen = () => {
        if (nickname.trim().length > 0) {
            navigate("Tabs", { screen: "main" });
        } else {
            Alert.alert("알림", "닉네임을 입력해주세요.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{}}>
                <Text style={styles.tutoTitle}>PET <Text style={{color: colors.palette.Yellow}}>RE</Text>BORN{"\n"}시작하기.</Text>
            </View>
            <View style={{flex:1, alignItems: 'center',marginBottom:30,}}>
            {!keyboardShown && (
                    <Image style={{width: 300, height: 300,}} source={require('../../Assets/Images/Intro/Intro_Image.png')}/>  
                    )}
                
            </View>
                <KeyboardAvoidingView
                style={styles.nickNamecontainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
                <Text style={styles.nickNameText}>
                    별명을 입력해주세요.
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNickname}
                    value={nickname}
                    placeholder="    별명을 입력하세요    "
                />
                </KeyboardAvoidingView>
                <View style={{position: 'absolute', top: "85%", bottom: "5%",}}>
                {!keyboardShown && (
                    <TouchableOpacity
                        style={buttonStyles.buttonYellow}
                        onPress={navigateToNextScreen}
                    >
                        <Text> 다음으로 </Text>
                    </TouchableOpacity>
                    )}
                </View>
        </View>
    );
}

export default NicknameInputScreen;

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
        paddingLeft: 20,
        marginTop: 30,
        fontFamily: 'Poppins-Bold',
        paddingVertical: 20,
        marginRight: 200,
    },
    nickNameText: {
        color: "lightgrey",
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    nickNamecontainer:{
        marginBottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: { // 닉네임 입력 스타일
        backgroundColor: 'white',
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%", // 입력 필드 너비 조정
        borderColor: "grey", // 경계선 색상
        borderRadius: 5, // 경계선 둥글기
        
    },
});
