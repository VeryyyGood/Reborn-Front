import React, { useState } from 'react';
import {View, Text, Button,TouchableOpacity, StyleSheet, FlatList, Image} from "react-native";

import { colors } from "../../theme";
import { GrayLine, ViewStyles, buttonStyles } from "../../components";

import ReDiaryItem from '../../components/ReDiaryItem';

const RediaryMainScreen = ({navigation: { navigate }} ) => {
    const [rediaryData, setrediaryData] = useState([
        { id: '1', date: '2024-03-29.FRI', title: '첫번째', type: 'sun', Box: 1, },
        { id: '2', date: '2024-03-30.SAT', title: '두번째', type: 'cloud', Box: 40, },
        { id: '3', date: '2024-03-31.SUN', title: '세번째', type: 'rain', Box: 30, },
        { id: '4', date: '2024-03-32.MON', title: '네번째', type: 'cloud', Box: 80, },
      ]);

    return(
        <View style={{paddingHorizontal: 20, backgroundColor: colors.background, flex: 1,}}>
            <View>
                <Text style={styles.DiaryTitle}><Text style={{color: colors.palette.Brown}}>RE</Text>DIARY:</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../Assets/icons/rediaryimage/Writeicon.png')}/>
                    <Text style={{fontFamily: 'Poppins-Bold', marginLeft: '5%'}}>오늘 하루 반려동물과 무슨 일이 있었나요?</Text>
                </View>
                <TouchableOpacity style={[buttonStyles.buttonYellow, {marginBottom: 20,}]} onPress={() => navigate("RediaryStack", { screen: "RediaryWrite" })}>
                    <Text style={{color: "white",fontFamily: 'Poppins-Bold'}}>오늘의 감정일기 쓰러 가기</Text>
                </TouchableOpacity>
            </View>
            <GrayLine></GrayLine>
            <View style={styles.container}>
                <FlatList data={rediaryData}
                renderItem={({item})=> <ReDiaryItem date={item.date} title={item.title} type={item.type} Box={item.Box} /> }
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