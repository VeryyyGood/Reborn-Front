import React, { useState } from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet, FlatList} from "react-native";

import { colors } from "../../theme";
import { ViewStyles, buttonStyles } from "../../components";

import ReDiaryItem from '../../components/ReDiaryItem';

const RediaryMainScreen = ({navigation: { navigate }} ) => {
    const [rediaryData, setrediaryData] = useState([
        { id: '1', date: '2024-03-29.FRI', day: '첫번째', type: 'sun' },
        { id: '2', date: '2024-03-30.SAT', day: '두번째', type: 'cloud' },
        { id: '3', date: '2024-03-31.SUN', day: '세번째', type: 'rain' },
        { id: '4', date: '2024-03-32.MON', day: '네번째', type: 'cloud' },
      ]);

    return(
        <View style={{paddingHorizontal: 20, flex: 1,}}>
            <View>
                <Text style={styles.DiaryTitle}><Text style={{color: colors.palette.Brown}}>RE</Text>DIARY:</Text>
                <Text>(아이콘) 오늘 하루 반려동물과 무슨 일이 있었나요?</Text>
                <TouchableOpacity style={[buttonStyles.buttonYellow, {marginBottom: 20,}]}>
                    <Text style={{color: "white"}}>오늘의 감정일기 쓰러 가기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <FlatList data={rediaryData}
                renderItem={({item})=> <ReDiaryItem date={item.date} day={item.day} type={item.type} /> }
                keyExtractor={item => item.id}
                />
            </View>
        </View>
    );    
};

export default RediaryMainScreen;


const styles = StyleSheet.create({
    DiaryTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
    },
    container: {
        flex: 1,
    },
});