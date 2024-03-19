import React from "react";
import {View, Text,StyleSheet, TouchableOpacity} from "react-native";


const IntroScreen = ({navigation: {navigate}}) => (
    <View>
        <TouchableOpacity onPress={()=> navigate("Tutorial")}>
            <Text>go to ㅌ튜ㅗ리얼</Text>
        </TouchableOpacity>
    </View>
); //뷰 반환

export default IntroScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });