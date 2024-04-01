import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Pressable, TouchableOpacity} from 'react-native';

const weatherImages = {
    sun: require('../Assets/icons/rediaryimage/sun.png'),
    cloud: require('../Assets/icons/rediaryimage/cloud.png'),
    rain: require('../Assets/icons/rediaryimage/rain.png'),
};
const backgroundImages = {
  bluebox: require('../Assets/icons/rediaryimage/blueBox.png'),
  yellowbox: require('../Assets/icons/rediaryimage/yellowBox.png'),
  redbox: require('../Assets/icons/rediaryimage/redBox.png'),
};

const ReDiaryItem = ({date, title, type, Box}) => {
    let backgroundImage;
      if (Box <= 30) {
          backgroundImage = backgroundImages.bluebox;
      } else if (Box >= 90) {
          backgroundImage = backgroundImages.redbox;
      } else if (Box >= 60) {
          backgroundImage = backgroundImages.yellowbox;
      } else {
          // 기본 배경 이미지 설정
          backgroundImage = require('../Assets/icons/rediaryimage/redBox.png');
      }
    return (
      <TouchableOpacity>
        <View style={styles.item}>
            <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
              <View style={styles.container}>
                  <Image source={weatherImages[type]} style={styles.image} />
                  <Text style={styles.date}>{title} {'\n'}{date} </Text>
                  <Image style={{marginLeft: -20,}}source={require('../Assets/icons/rediaryimage/arrow2.png')}/>
              </View>
              </ImageBackground>
        </View>
      </TouchableOpacity>
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