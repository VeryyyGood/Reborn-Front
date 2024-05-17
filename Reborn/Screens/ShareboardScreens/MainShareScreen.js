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
     // 화면 선택 상태 (all, bookmarked, mine 중 하나)
     const [selectedScreen, setSelectedScreen] = useState('all');

    useFocusEffect(
        React.useCallback(() => {
          const getFeedItem = async () => {
            try {
                let url = "http://reborn.persi0815.site/board/list?type=ALL&way=time"; // 기본 URL
                if (selectedScreen === 'bookmarked') {
                    url = "http://reborn.persi0815.site/board/list/bookmark?type=ALL&way=time";
                }
                else if (selectedScreen === 'mine') {
                    url = 'http://reborn.persi0815.site/board/list/my?type=ALL&way=time&scrollPosition=0&fetchSize=10';
                }
                else if (selectedScreen === 'like') {
                    url = 'http://reborn.persi0815.site/board/list?type=ALL&way=like&scrollPosition=0&fetchSize=10';
                }
                

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                if (response.data && response.data.result) {
                    //리스트
                    console.log(response.data.result.boardList)
                    const mappedData = response.data.result.boardList.map(item => ({
                        id: item.id,
                        boardCreatedAt: item.boardCreatedAt,
                        boardWriter: item.boardWriter,
                        boardContent: item.boardContent,
                        likeCount: item.likeCount,
                        commentCount: item.commentCount,
                        boardImage: item.boardImage,
                        writerProfileImage: item.writerProfileImage,
                    }));
                    const boardImages = response.data.result.boardList.map(item => item.boardImage).filter(url => url !== null);
                    //console.log(boardImages);
                    setFeedItemData(mappedData);
                }
            } catch (e) {
                console.error(e);
            }
          };
    
          getFeedItem();
        }, [selectedScreen,accessToken])
      );

    return (
        <View style={{backgroundColor: colors.palette.White}}>
            <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => setSelectedScreen('all')}>
                <View style={selectedScreen === 'all' ? styles.selectedItem : {}}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'all' ? colors.palette.BrownDark : colors.palette.Gray400 }}>전체글</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedScreen('bookmarked')}>
                <View style={selectedScreen === 'bookmarked' ? styles.selectedItem : {}}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'bookmarked' ? colors.palette.BrownDark : colors.palette.Gray400 }}>북마크</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedScreen('mine')}>
                <View style={selectedScreen === 'mine' ? styles.selectedItem : {}}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'mine' ? colors.palette.BrownDark : colors.palette.Gray400 }}>MY글</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedScreen('like')}>
                <View style={selectedScreen === 'like' ? styles.selectedItem : {}}>
                    <Text style={{ ...styles.btnText, color: selectedScreen === 'like' ? colors.palette.BrownDark : colors.palette.Gray400 }}>인기글</Text>
                </View>
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
                        boardCreatedAt={`${item.boardCreatedAt.split('T')[0]} ${item.boardCreatedAt.split('T')[1].slice(0, 5)}`}
                        boardContent={item.boardContent}
                        navigation={navigation}
                        likeCount={item.likeCount}
                        commentCount={item.commentCount}
                        boardImage={item.boardImage}
                        writerProfileImage={item.writerProfileImage}/>
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 200 }}
                />
            </View>
            <View>
            </View>
            <TouchableOpacity style={{position:'absolute', right: '5%', bottom: '13%'}} onPress={()=> navigation.navigate("ShareWrite")}>
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
      //marginHorizontal: '5%',
      paddingHorizontal: '8%',
    },
    btnText: {
      fontSize: 23,
      color: "white",
      paddingHorizontal: '2%',
      marginBottom: '5%',
      fontFamily: 'Poppins-Bold',
      //marginLeft: 8,
      marginHorizontal: 5,
    },
    greyLine: {
        marginTop: -10,
        borderBottomWidth: 2, 
        borderBottomColor: colors.palette.Gray300,
        paddingBottom: 3, marginHorizontal: 20,
    },
    selectedItem: {
        borderBottomWidth: 2,
        borderBottomColor: colors.palette.BrownDark,
        paddingBottom: 5,
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