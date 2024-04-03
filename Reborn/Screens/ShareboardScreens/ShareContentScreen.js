import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";

const ShareContentScreen = ({ route }) => {
    const {id, title, date, content } = route.params;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{date}</Text>
        <Text>{content}</Text>
        <Text>응애</Text>
      </View>
    );
  };

export default ShareContentScreen;1

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