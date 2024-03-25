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
                resizeMode="contain"
            />
        </ImageBackground>
    </View>
);

export default ReviewReconnectScreen;

 const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
    },

    overlayImage: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
    },

    textContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
        backgroundColor: colors.palette.White,
    },
    
    boldFont: {
       fontSize: 24,
       fontWeight: 'bold',
    },

    normalFont: {
        fontSize: 16,
        marginTop: 5,
    },

    reColor: {
        color: colors.palette.Brown,
    },
 })