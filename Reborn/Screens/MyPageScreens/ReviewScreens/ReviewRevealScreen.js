import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { colors } from '../../../theme';


const ReviewRevealScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.boldFont}>
                    <Text style={styles.reColor}>RE</Text>VEAL:
                </Text>
                <Text style={styles.normalFont}>나의 감정 들여다보기</Text>
            </View>
        
    </View>
);

export default ReviewRevealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.palette.White,
    },

    textContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
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