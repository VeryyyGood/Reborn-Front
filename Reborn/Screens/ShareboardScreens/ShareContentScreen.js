import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";

const ShareContentScreen = ({navigation: { navigate }} ) => {
    return (
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
    );
};

export default ShareContentScreen;

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