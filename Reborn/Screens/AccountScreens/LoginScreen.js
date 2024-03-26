import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { buttonStyles } from '../../components';
import { colors } from '../../theme';

const LoginScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
        <View style={styles.introContainer}>
            <Text style={styles.introTitle}>PET <Text style={{color: colors.palette.Yellow}}>RE</Text>BORN,{'\n'}로그인 하기</Text>
        </View>
        <View style={styles.contentContainer}>
            <Image style={{width: 470, height: 470, bottom: '10%'}} source={require('../../Assets/icons/app_icon.png')}/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={buttonStyles.buttonLogin} onPress={()=>navigate('Tabs', { screen: 'main' })}>
                    <View style={styles.buttonContent}>
                        <Image
                            source={require('../../Assets/icons/naver_logo.png')}
                            style={styles.naverLogo} 
                        />
                        <Text style={styles.buttonText}>네이버 아이디로 로그인 </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.palette.White,
    },
    introContainer: {
        marginTop: 30,
    },
    contentContainer: {
        alignItems: 'center',
    },
    introTitle: {
        fontSize: 45,
        textAlign: 'left',
        paddingLeft: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        top: '85%',
        bottom: '20%',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    naverLogo: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    buttonText: {
        textAlign: 'center', // 버튼 텍스트 가운데 정렬
        color: colors.palette.White,
    },
});
