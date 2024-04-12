import React from "react";
import { useState,useEffect } from "react";
import {View, Text,Button,TouchableOpacity, TextInput, Image,StyleSheet} from "react-native";
import styled from "styled-components/native";
import DropDownPicker from 'react-native-dropdown-picker';

import { buttonStyles, textStyles } from "../../components";
import { colors } from "../../theme";

const ShareWriteScreen = ({navigation} ) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: '감정 나눔', value: '1'},
        {label: '담소 나눔', value: '2'},
        {label: '물품 나눔', value: '3'},
        {label: '봉사 나눔', value: '4'},
    ]);
    return (
        <View style={{paddingHorizontal: 10, backgroundColor: colors.background}}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../../Assets/icons/ShareBoard/xicon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> console.log(value)}>
                <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={require('../../Assets/icons/ShareBoard/uploadbutton.png')} />
            </TouchableOpacity>
        </View> 
        <View style={{}}>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="카테고리"
            listMode="MODAL"
            modalProps={{
                animationType: 'fade',
            }}
            modalTitle="선택해주세요."
            />
        </View>
        <View style={{flexDirection:'row',}}>
            <Image style={{width: "15%", resizeMode: 'contain'}} source={require('../../Assets/icons/profile.png')}/>
                <TextInput style={{marginLeft: '3%', fontFamily: "Poppins-Bold", fontSize: 18}}>게시판 글쓰기</TextInput>
        </View>
    </View>
    );
};

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