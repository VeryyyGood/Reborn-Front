import React from "react";
import {View, Text,Button,TouchableOpacity, StyleSheet} from "react-native";

import { colors } from "../../theme";
import { buttonstyles } from "../../theme/buttonstyles";

const RediaryMainScreen = ({navigation: { navigate }} ) => (
    <View style={{paddingLeft: 20}}>
        <Text style={styles.DiaryTitle}><Text style={{color: colors.palette.Brown}}>RE</Text>DIARY:</Text>
            <Text>(아이콘) 오늘 하루 반려동물과 무슨 일이 있었나요?</Text>
            <TouchableOpacity style={buttonstyles.nextbuttonYellow}>
                <Text style={{color: "white"}}>오늘의 감정일기 쓰러 가기</Text>
            </TouchableOpacity>
    </View>
    
);

export default RediaryMainScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DiaryTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
    },
});