import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import { colors, palette } from "../../../theme";
import { ViewStyles, buttonStyles } from "../../../components";

const PetScreen = ({navigation: {navigate}}) => (
    <View style={ViewStyles.container}>
        <ImageBackground
            source={require('./../../../Assets/Images/bg/bg_living(1).png')} 
            style={{width:"100%",height:"100%"}}
        >
            <View>
                <TouchableOpacity style={buttonStyles.buttonBrown} onPress={() => navigate("Feed")}>
                    <Text style={{color: "white"}}>간식주러 가기</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View> 
);

export default PetScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
});