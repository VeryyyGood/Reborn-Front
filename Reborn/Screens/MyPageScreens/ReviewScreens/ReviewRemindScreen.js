import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { colors } from '../../../theme';

const ReviewRemindScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.boldFont}>
                    <Text style={styles.reColor}>RE</Text>MIND:
                </Text>
                <Text style={styles.normalFont}>충분한 대화 나누기</Text>
            </View>
        
    </View>
);

export default ReviewRemindScreen;

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