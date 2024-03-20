import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";


const MainScreen = ({navigation: {navigate}}) => (
    <View>
        <Text>main</Text>
        <View>
            <Text>main</Text>
        </View>
        <View>
            <Text>main</Text>
        </View>
        <View>
            <Text>main</Text>
        </View>
        <View style={{flexDirection:"row",}}>
            <TouchableOpacity style={styles.TestButton} onPress={()=>navigate("TestIntro")}>
                <Text>펫로스 증후군</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EmotionalButton} onPress={()=>navigate("RediaryMain")}>
                <Text>감정일기</Text>
            </TouchableOpacity>
        </View>
    </View>
    
); //뷰 반환

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TestButton: {
        height: "70%",
        width: "40%",
        borderRadius: 10,
        backgroundColor: "tomato",
        alignItems:"center",
        justifyContent: "center",
        margin: 20,
    },
    EmotionalButton: {
        height: "70%",
        width: "40%",
        borderRadius: 10,
        backgroundColor: "teal",
        alignItems:"center",
        justifyContent: "center",
        margin: 20,
    }
  });