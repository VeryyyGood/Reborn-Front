import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";


const LoginScreen = ({navigation: { navigate }} ) => (
    <TouchableOpacity onPress={()=>navigate('Tabs', { screen: 'main' })}>
        <Text>로그인 메인</Text>
    </TouchableOpacity >
);

export default LoginScreen;