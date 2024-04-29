import React from "react";
import { useEffect, useState } from 'react';
import {Image, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Pressable} from "react-native";

import { colors } from "../../theme";
import { GrayLine, ViewStyles } from "../../components/viewStyles";

import ShareBoardFeedItem from "../../components/ShareBoardFeedItem";

const MainShareScreen = ({navigation}) => {
    const [allContent, setAllContent] = useState(true); // 전체 글 보기 상태

    const ShareBoardFeedData = [
        // { boardid: '1', title: '김보경', date: '2222-22.22', content: '첫번째 글', isBookmarked: false , heartNum: 100, commentNum: 23, },
        // { boardid: '2', title: '문채영', date: '2222-22.23', content: '두번째 글', isBookmarked: true, heartNum: 20, commentNum: 1, },
        // { boardid: '3', title: '문채영', date: '2222-22.24', content: '세번째 글', isBookmarked: false , heartNum: 50, commentNum: 53, },
        // { boardid: '4', title: '문채영', date: '2222-22.25', content: '네번째 글', isBookmarked: true , heartNum: 9, commentNum: 87, },
    ];

    // allContent 상태에 따라 데이터 필터링
    const filteredData = allContent ? ShareBoardFeedData : ShareBoardFeedData.filter(item => item.isBookmarked);

    return (
        <View style={{backgroundColor: colors.background}}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setAllContent(true)}>
                    <Text style={{ ...styles.btnText, color: allContent ? colors.palette.BrownDark : colors.palette.Gray400}}>전체글</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAllContent(false)}>
                    <Text style={{ ...styles.btnText, color: !allContent ? colors.palette.BrownDark : colors.palette.Gray400 }}>북마크</Text>
                </TouchableOpacity>
            </View>
            <GrayLine></GrayLine>
            <View>
                <FlatList
                    data={filteredData}
                    renderItem={({item}) => (
                        <ShareBoardFeedItem boardid={item.boardid} title={item.title} date={item.date} content={item.content} navigation={navigation} heartNum={item.heartNum} commentNum={item.commentNum}/>
                    )}
                    keyExtractor={item => item.boardid}
                    contentContainerStyle={{ paddingBottom: 150 }}
                />
            </View>
            <View>
            </View>
            <TouchableOpacity style={{position:'absolute', right: '5%', bottom: '10%'}} onPress={()=> navigation.navigate("ShareWrite")}>
                <Image source={require('../../Assets/icons/ShareBoard/write.png')}/>
            </TouchableOpacity>
                
        </View>
    );
};

export default MainShareScreen;

const styles = StyleSheet.create({
    header: {
      justifyContent: 'flex-start',
      flexDirection: "row",
      marginTop: 20,
      marginHorizontal: 20,
    },
    btnText: {
      fontSize: 27,
      color: "white",
      paddingHorizontal: 10,
    },
    greyLine: {
        marginTop: -10,
        borderBottomWidth: 2, 
        borderBottomColor: colors.palette.Gray300,
        paddingBottom: 3, marginHorizontal: 20,
    },
});