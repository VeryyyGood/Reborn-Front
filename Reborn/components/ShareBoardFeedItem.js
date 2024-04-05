import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
const ShareBoardFeedItem = ({ navigation, id, title, content, date }) => {
	return (
        <TouchableOpacity onPress={() => navigation.navigate("ShareContent",{ id, title, date, content })}>
            <View style={styles.shareItem}>
                <View style={styles.titlecontainer}>
                    <Image style={styles.profile} source={require('../Assets/icons/profile.png')} />
                    <Text style={styles.title}>{title}{'\n'}<Text style={styles.date}>{date}</Text> </Text>
                    
                </View>
                <View>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={{flexDirection:'row', paddingVertical: 20, paddingHorizontal: 20, justifyContent: 'space-between'}}>
                    <Image style={{marginLeft: 10,}} source={require('../Assets/icons/ShareBoard/commentIcon.png')}/>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{marginRight:'5%',}} source={require('../Assets/icons/ShareBoard/heartIconGrey.png')}/>
                        <Text>100</Text>
                        <Image style={{marginLeft: 10,}}source={require('../Assets/icons/ShareBoard/bookmarkIconGrey.png')}/>
                    </View>  
                </View>
            </View>
        </TouchableOpacity>
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
    	fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginTop: 20,
    },
    date: {
        fontSize: 14,
        color: "grey",
    },  
    content: {
    	fontSize: 16,
        marginHorizontal: '5%',
    },
    profile:{
        width: '20%',
        resizeMode: 'contain',
    },
});

export default ShareBoardFeedItem;