import React from "react";
import {View, Text,Button,TouchableOpacity, StyleSheet} from "react-native";

import { colors} from "../../theme";
import { ViewStyles, buttonStyles } from "../../components";

const RediaryMainScreen = ({navigation: { navigate }} ) => (
    <View style={{paddingHorizontal: 20}}>
        <Text style={styles.DiaryTitle}><Text style={{color: colors.palette.Brown}}>RE</Text>DIARY:</Text>
            <Text>(아이콘) 오늘 하루 반려동물과 무슨 일이 있었나요?</Text>
            <TouchableOpacity style={buttonStyles.buttonYellow}>
                <Text style={{color: "white"}}>오늘의 감정일기 쓰러 가기</Text>
            </TouchableOpacity>
    </View>
);

export default RediaryMainScreen;


const styles = StyleSheet.create({
    DiaryTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
    },
});