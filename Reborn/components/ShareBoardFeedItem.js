import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import styled from "styled-components/native";
const ShareBoardFeedItem = ({ title, content, date }) => {
	return (
        <View style={styles.shareItem}>
            <View style={styles.titlecontainer}>
                <Image style={styles.profile} source={require('../Assets/icons/profile.png')} />
                <Text style={styles.title}>{title}{'\n'}<Text style={styles.date}>{date}</Text> </Text>
                
            </View>
            <View>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    	
    )
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
        marginHorizontal: 20,
    },
    profile:{
        width: '20%',
        resizeMode: 'contain',
    },
});

export default ShareBoardFeedItem;