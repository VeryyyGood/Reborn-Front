import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import { colors } from "../../../theme";
import { ViewStyles, buttonStyles, textStyles } from "../../../components";

const PetScreen = ({navigation: {navigate}}) => (
    <View style={ViewStyles.container}>
        <ImageBackground
            source={require('./../../../Assets/Images/bg/bg_living(1).png')} 
            style={{width:"100%",height:"100%"}}
        >
            <View>
                <Text style={textStyles.contentsTextBox}>충분한 대화 나누기 : <Text style={{color: colors.palette.Red}}>쓰다듬기</Text></Text>
                <Image
                    source={require('../../../Assets/Images/dog/dog_idle.png')}
                    style={styles.overlayImage}
                    resizeMode="contain"
                />
                <View>
                    <TouchableOpacity style={buttonStyles.buttonBrownBottom} onPress={() => navigate("Feed")}>
                        <Text style={{color: colors.palette.White}}>간식주러 가기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View> 
);

export default PetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.palette.White,
    },
    backgroundImage: {
        flex: 1,
    },
    overlayImage: {
        width: '50%',   
        height: '50%',
        marginLeft:'30%', // dog's position
        marginTop: '65%',
    },
});