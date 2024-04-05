import React from "react";
import {View, Text,Button,TouchableOpacity, TextInput, Image,StyleSheet} from "react-native";
import styled from "styled-components/native";

import { buttonStyles, textStyles } from "../../components";
import { colors } from "../../theme";

const ShareWriteScreen = ({navigation} ) => (
    <View style={{paddingHorizontal: 10, backgroundColor: colors.background}}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../../Assets/icons/ShareBoard/xicon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={require('../../Assets/icons/ShareBoard/uploadbutton.png')} />
            </TouchableOpacity>
        </View> 
        <View style={[buttonStyles.buttonWhiteBrown, {marginVertical: '2%',}]}>
           <Text> 드롭 박스</Text>
        </View>
        <View style={{flexDirection:'row',}}>
            <Image style={{width: "15%", resizeMode: 'contain'}} source={require('../../Assets/icons/profile.png')}/>
                <TextInput style={{marginLeft: '3%', fontFamily: "Poppins-Bold", fontSize: 18}}>게시판 글쓰기</TextInput>
        </View>
    </View>
);

export default ShareWriteScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: -20,
        marginHorizontal: '5%' 
    },

});