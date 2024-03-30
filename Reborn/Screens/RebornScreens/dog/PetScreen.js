import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { colors } from "../../../theme";
import { ViewStyles, buttonStyles, textStyles } from "../../../components";
import styled from 'styled-components/native';
import dogimageURL from '../../../Assets/Images/dog/dog_idle.png';

const PetScreen = ({navigation: {navigate}}) => (
    <View style={ViewStyles.container}>
        <ImageBackground
            source={require('./../../../Assets/Images/bg/bg_living(1).png')} 
            style={{width:"100%", height:"100%"}}
        >
            <View>
                <Text style={textStyles.contentsTextBox}>충분한 대화 나누기 : <Text style={{color: colors.palette.Red}}>쓰다듬기</Text></Text>
                <DogImage
                    source={dogimageURL}
                    resizeMode="center"
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

const DogImage = styled.Image`
        width: 50%;
        height: 50%;
        margin-left: 30%;
        margin-top: 65%; 
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.palette.White,
    },
});
