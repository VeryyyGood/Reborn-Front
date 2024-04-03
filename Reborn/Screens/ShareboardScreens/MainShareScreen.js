import React from "react";
import { useEffect, useState } from 'react';
import {View, Text, Button, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Pressable} from "react-native";

import ShareBoardFeedItem from "../../components/ShareBoardFeedItem";

const MainShareScreen = ({navigation}) => {
    const [allContent, setAllContent] = useState(true); // 전체 글 보기 상태

    const ShareBoardFeedData = [
        { id: '1', title: '김보경', date: '2222-22.22', content: '첫번째 글', isBookmarked: false },
        { id: '2', title: '문채영', date: '2222-22.23', content: '두번째 글', isBookmarked: true },
        { id: '3', title: '문채영', date: '2222-22.24', content: '세번째 글', isBookmarked: false },
        { id: '4', title: '문채영', date: '2222-22.25', content: '네번째 글', isBookmarked: true },
    ];

    // allContent 상태에 따라 데이터 필터링
    const filteredData = allContent ? ShareBoardFeedData : ShareBoardFeedData.filter(item => item.isBookmarked);

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setAllContent(true)}>
                    <Text style={{ ...styles.btnText, color: allContent ? "brown" : "black" }}>전체글</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAllContent(false)}>
                    <Text style={{ ...styles.btnText, color: !allContent ? "brown" : "black" }}>북마크</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <FlatList
                    data={filteredData}
                    renderItem={({item}) => (
                        <ShareBoardFeedItem id={item.id} title={item.title} date={item.date} content={item.content} navigation={navigation} />
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 150 }}
                />
            </SafeAreaView>
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
      fontSize: 30,
      color: "white",
      paddingHorizontal: 10,
    },
});
