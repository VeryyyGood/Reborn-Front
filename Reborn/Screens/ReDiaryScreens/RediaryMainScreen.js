import React, { useState } from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet, FlatList, Image} from "react-native";

import { colors } from "../../theme";
import { GrayLine, ViewStyles, buttonStyles } from "../../components";

import ReDiaryItem from '../../components/ReDiaryItem';

const RediaryMainScreen = ({navigation} ) => {
    const [rediaryData, setrediaryData] = useState([
        { id: '1', date: '2024-04-15', title: '감정일기 첫번째', type: 'sun', Box: 1, },
        { id: '2', date: '2024-04-16', title: '두번째', type: 'cloud', Box: 40, },
        { id: '3', date: '2024-04-17', title: '세번째', type: 'rain', Box: 30, },
        { id: '4', date: '2024-04-18', title: '네번째', type: 'cloud', Box: 80, },
      ]);

    const [result, setResult] = useState(true);

    const navigateToRediaryWrite = () => {
    if (result) {
        // result가 true일 경우에만 RediaryWrite로 이동
        navigation.navigate("RediaryStack", { screen: "RediaryWrite" });
    } else {
        // result가 false일 경우
        console.log("result가 false이므로 RediaryWrite로 이동할 수 없습니다.");
        }
    };

    return(
        <View style={{paddingHorizontal: 20, backgroundColor: colors.background, flex: 1,}}>
            <View>
                <Text style={styles.DiaryTitle}><Text style={{color: colors.palette.Brown}}>RE</Text>DIARY:</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../Assets/icons/rediaryimage/Writeicon.png')}/>
                    <Text style={{fontFamily: 'Poppins-Bold', marginLeft: '5%'}}>오늘 하루 반려동물과 무슨 일이 있었나요?</Text>
                </View>
                <TouchableOpacity style={[buttonStyles.buttonYellow, {marginBottom: 20,}]} onPress={navigateToRediaryWrite}>
                    <Text style={{color: "white",fontFamily: 'Poppins-Bold'}}>오늘의 감정일기 쓰러 가기</Text>
                </TouchableOpacity>
            </View>
            <GrayLine></GrayLine>
            <View style={styles.container}>
                <FlatList data={rediaryData}
                renderItem={({item})=> <ReDiaryItem date={item.date} title={item.title} type={item.type} Box={item.Box} navigation={navigation}/> }
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
        marginVertical: 20,
        fontFamily: 'Poppins-Bold',
    },
    container: {
        flex: 1,
    },
});