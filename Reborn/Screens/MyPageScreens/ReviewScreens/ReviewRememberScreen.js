import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { colors } from '../../../theme';

const ReviewRememberScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.boldFont}>
                    <Text style={styles.reColor}>RE</Text>MEMBER:
                </Text>
                <Text style={styles.normalFont}>건강한 작별 준비하기</Text>
            </View>
        
    </View>
);

export default ReviewRememberScreen;

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