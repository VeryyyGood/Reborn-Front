import React from "react";
import { useEffect, useState } from 'react';
import {View, Text,Button,TouchableOpacity, FlatList, StyleSheet, SafeAreaView} from "react-native";

import ShareBoardFeedItem from "../../components/ShareBoardFeedItem";

const MainShareScreen = ({navigation: { navigate }} ) => {

    const [allcontent, setAllcontent] = useState(true);
    const bookmark = () => setAllcontent(false);
    const all = () => setAllcontent(true);
    
    const ShareBoardFeedData = [
        { id: '1', title: '김보경', date: '2222-22.22' , content: '첫번째 글' },
        { id: '2', title: '문채영', date: '2222-22.23' , content: '두번째 글' },
        { id: '3', title: '문채영', date: '2222-22.24' , content: '세번째 글' },
        { id: '4', title: '문채영', date: '2222-22.25' , content: '네번째 글' },
    ]
    return (
        <View>
            <View>
                <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={all}>
                <Text style={{...styles.btnText, color: allcontent ? "brown" : "black"}}>전체글  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={bookmark}>
                <Text style={{...styles.btnText, color: !allcontent ? "brown" : "black"}}>  북마크</Text>
                </TouchableOpacity>
                </View>
            </View>
            <SafeAreaView>
                <FlatList
                    data={ShareBoardFeedData}
                    renderItem={({item}) => {
                        const { title, date, content } = item;
                        return (
                            <ShareBoardFeedItem title={title} date={date} content={content} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 150 }}
                />
            </SafeAreaView>
        </View> 
    );
    // <TouchableOpacity >
    //     <Text>나눔게시판이 될 화면</Text>
    // </TouchableOpacity>
};

export default MainShareScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 50,
    },
    header: {
      justifyContent: 'flex-start',
      flexDirection: "row",
      marginTop: 20,
      marginHorizontal: 20,
    },
    btnText: {
      fontSize: 30,
      color: "white",
    },
  });