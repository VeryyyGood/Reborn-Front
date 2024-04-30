import React from "react";
import { useEffect, useState, useCallback  } from 'react';
import {Image, View, Text, Button, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Pressable} from "react-native";
import axios from "axios";

import { colors } from "../../theme";
import { GrayLine, ViewStyles } from "../../components/viewStyles";

import { useFocusEffect } from '@react-navigation/native';

import { useAccessToken } from '../../context/AccessTokenContext';

import ShareBoardFeedItem from "../../components/ShareBoardFeedItem";


const MainShareScreen = ({navigation}) => {
    const { accessToken } = useAccessToken();
    const [FeedItemData, setFeedItemData] = useState([]);
    const [result, setResult] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
          const getFeedItem = async () => {
            try {
                const response = await axios.get(
                    "http://reborn.persi0815.site/board/list?type=ALL&way=time",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                if (response.data && response.data.result) {
                    console.log(response.data.result.boardList)
                    const mappedData = response.data.result.boardList.map(item => ({
                        id: item.id,
                        boardCreatedAt: item.boardCreatedAt,
                        boardWriter: item.boardWriter,
                        boardContent: item.boardContent,
                        likeCount: item.likeCount,
                        commentCount: item.commentCount,
                    }));
                    setFeedItemData(mappedData);
                }
            } catch (e) {
                console.error(e);
            }
          };
    
          getFeedItem();
        }, [accessToken]) // 의존성 배열에 accessToken과 id를 추가합니다.
      );

    // 화면 선택 상태 (all, bookmarked, mine 중 하나)
    const [selectedScreen, setSelectedScreen] = useState('all');

    const ShareBoardFeedData = [ // .!!
        // { boardid: '1', title: '김보경', date: '2222-22.22', content: '첫번째 글', isBookmarked: false , heartNum: 100, commentNum: 23, },
        // { boardid: '2', title: '문채영', date: '2222-22.23', content: '두번째 글', isBookmarked: true, heartNum: 20, commentNum: 1, },
        // { boardid: '3', title: '문채영', date: '2222-22.24', content: '세번째 글', isBookmarked: false , heartNum: 50, commentNum: 53, },
        // { boardid: '4', title: '문채영', date: '2222-22.25', content: '네번째 글', isBookmarked: true , heartNum: 9, commentNum: 87, },
    ];


    return (
        <View style={{backgroundColor: colors.background}}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => setSelectedScreen('all')}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'all' ? colors.palette.BrownDark : colors.palette.Gray400 }}>전체글</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedScreen('bookmarked')}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'bookmarked' ? colors.palette.BrownDark : colors.palette.Gray400 }}>북마크</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedScreen('mine')}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'mine' ? colors.palette.BrownDark : colors.palette.Gray400 }}>마이글</Text>
                </TouchableOpacity>
            </View>
            <GrayLine></GrayLine>
            <View>
                <FlatList
                    data={FeedItemData}
                    renderItem={({item}) => (
                        <ShareBoardFeedItem 
                        id={item.id}
                        boardWriter={item.boardWriter}
                        boardCreatedAt={item.boardCreatedAt.split('T')[0]}
                        boardContent={item.boardContent}
                        navigation={navigation}
                        likeCount={item.likeCount}
                        commentCount={item.commentCount}/>
                    )}
                    keyExtractor={item => item.id}
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

//const [allContent, setAllContent] = useState(true); // 전체 글 보기 상태 .!!

//const ShareBoardFeedData = [ // .!!
// { boardid: '1', title: '김보경', date: '2222-22.22', content: '첫번째 글', isBookmarked: false , heartNum: 100, commentNum: 23, },
// { boardid: '2', title: '문채영', date: '2222-22.23', content: '두번째 글', isBookmarked: true, heartNum: 20, commentNum: 1, },
// { boardid: '3', title: '문채영', date: '2222-22.24', content: '세번째 글', isBookmarked: false , heartNum: 50, commentNum: 53, },
// { boardid: '4', title: '문채영', date: '2222-22.25', content: '네번째 글', isBookmarked: true , heartNum: 9, commentNum: 87, },
//];

// allContent 상태에 따라 데이터 필터링 .!!
//const filteredData = allContent ? ShareBoardFeedData : ShareBoardFeedData.filter(item => item.isBookmarked);