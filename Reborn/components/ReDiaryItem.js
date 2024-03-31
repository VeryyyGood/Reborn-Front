import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const weatherImages = {
    sun: require('../Assets/icons/rediaryimage/sun.png'),
    cloud: require('../Assets/icons/rediaryimage/cloud.png'),
    rain: require('../Assets/icons/rediaryimage/rain.png'),
};

const ReDiaryItem = ({date, day, type}) => {
    return (
        <View style={styles.item}>
            <ImageBackground style={styles.backgroundImage} source={require('../Assets/icons/rediaryimage/rediaryItembox.png')}>
                <View style={styles.container}>
                    <Image source={weatherImages[type]} style={styles.image} />
                    <Text style={styles.date}>{day} 일기{'\n'}{date} </Text>
                </View>
            </ImageBackground>
        </View>
        
      );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    date: {
      fontSize: 16,
      fontFamily: "Poppins-ExtraBold",
      marginHorizontal: '10%',
    },
    item: {
        height: 150,
        marginVertical: 10,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
});
  
  export default ReDiaryItem;