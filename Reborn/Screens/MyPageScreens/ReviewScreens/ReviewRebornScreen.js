import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Pressable} from "react-native";
import { colors } from '../../../theme';


const ReviewRebornScreen = ({navigation: { navigate }} ) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.boldFont}>
                <Text style={styles.reColor}>RE</Text>BORN:
            </Text>
            <Text style={styles.normalFont}>나의 반려동물과 작별하기</Text>
        </View>
        <ImageBackground
            source={require('../../../Assets/Images/bg/bg_blossom.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <TouchableOpacity
                onPress={() => console.log('이미지 클릭')}
                style={{width: '15%', height: '10.7%', top: '33%', left: '35%'}}
                >
                <Image
                    source={require('../../../Assets/icons/letter.png')}
                    style={{width: '100%', height: '100%'}}
                />
            </TouchableOpacity>

            <Image
                source={require('../../../Assets/Images/dog/dog_cloth_ribbon_black.png')}
                style={styles.overlayImage}
                resizeMode='center'
            />
        </ImageBackground>
    </View>
);

export default ReviewRebornScreen;

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
        marginTop: '55%'
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