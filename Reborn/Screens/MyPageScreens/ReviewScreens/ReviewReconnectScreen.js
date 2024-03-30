import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from "react-native";
import { colors } from '../../../theme';


const ReviewReconnectScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.boldFont}>
                <Text style={styles.reColor}>RE</Text>CONNECT:
            </Text>
            <Text style={styles.normalFont}>나의 반려동물과 만나기</Text>
        </View>
        <ImageBackground
            source={require('../../../Assets/Images/bg/bg_blossom.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <Image
                source={require('../../../Assets/Images/dog/dog_idle.png')}
                style={styles.overlayImage}
                resizeMode='center'
            />
        </ImageBackground>
    </View>
);

export default ReviewReconnectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.palette.White,
    },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlayImage: {
        marginTop: '60%'
    },

    textContainer: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%',
    },
    
    boldFont: {
       fontSize: 24,
       fontFamily: 'Poppins-Bold',
       color: colors.palette.BrownDark,
    },

    normalFont: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: colors.palette.BrownDark,
    },

    reColor: {
        color: colors.palette.Brown,
    },
 })