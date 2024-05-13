import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Touchable, TouchableOpacity, TextInput } from 'react-native';
import styled from "styled-components/native";
import { colors } from '../theme';
import { GrayLine, ViewStyles } from './viewStyles';

const ShareBoardCommentItem = ({id, commentCreatedAt, commentWriter, commentContent, writerProfileImage}) => {
	return (
        <View style={styles.shareItem}>
            <View style={{position: 'absolute', right: '5%', top: '20%'}}>
                <Image style={{width: 20, height: 20}}source={require('../Assets/icons/ShareBoard/xicon.png')}/>
            </View>
            <View style={styles.titlecontainer}>
                <Image style={styles.profile} source={require('../Assets/icons/profile.png')} />
                <Text style={[styles.title, {color: colors.palette.BrownDark, fontFamily: 'Poppins-Bold'}]}>{commentWriter}{'\n'}
                    <Text style={[styles.content, {color: colors.palette.BrownDark, fontFamily: 'Poppins-Medium'}]}>{commentContent}{'\n'}</Text>
                    <Text style={[styles.date,{fontFamily: 'Poppins-Medium'}]}>{commentCreatedAt}</Text>
                </Text>
                <TouchableOpacity style={{justifyContent: 'flex-end'}}>
                    <Text style={{color: colors.palette.Gray300, marginLeft: 10, marginBottom: '5%', fontFamily: 'Poppins-Bold'}}>답글 쓰기</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingVertical: 20, paddingHorizontal: 20, justifyContent: 'space-between'}}>
            </View>
            <GrayLine></GrayLine>
        </View>
    );
};

const styles=StyleSheet.create({
	shareItem: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    titlecontainer: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    title: {
    	fontSize: 18,
        paddingLeft: 10,
        marginTop: 20,
    },
    date: {
        fontSize: 12,
        color: "grey",
    },  
    content: {
    	fontSize: 18,
        marginHorizontal: '5%',
    },
    profile:{
        width: '15%',
        resizeMode: 'contain',
    },
});

export default ShareBoardCommentItem;