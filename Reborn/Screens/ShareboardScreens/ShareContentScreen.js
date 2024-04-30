import React, { useState, useEffect, useCallback  } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

import axios from "axios";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import { colors } from "../../theme";
import { GrayLine, ViewStyles } from "../../components/viewStyles";

import { useAccessToken, useGlobalNickname } from "../../context/AccessTokenContext";


import ShareBoardCommentItem from "../../components/ShareBoardCommentItem";


const ShareContentScreen = ({ route }) => {
  const { id, boardWriter, boardCreatedAt, boardContent, likeCount: initialLikeCount, commentCount } = route.params;
  const { accessToken } = useAccessToken();
 
  const [isHeart, setIsHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount); // likeCount 상태 추가
  const [isBookmark, setIsBookmark] = useState(false);
  
  useFocusEffect(
    React.useCallback(() => {
      const getCheckLike = async () => {
        try {
          const response = await axios.get(
            `http://reborn.persi0815.site/board/${id}/check-like`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          // console.log(likeCount);
          console.log(response.data);
          if (response.data && response.data.result) {
            setIsHeart(true); // 예시로, 하트를 누른 상태를 true로 설정합니다. 실제 로직에 맞게 조정해주세요.
            // 다른 필요한 상태 업데이트도 여기에서 수행할 수 있습니다.
          } else {
            setIsHeart(false);
          }
        } catch (e) {
          console.error(e);
        }
      };

      const getCheckBookmark = async () => {
        try {
          const response = await axios.get(
            `http://reborn.persi0815.site/board/${id}/check-bookmark`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(response.data);
          if (response.data && response.data.result) {
            setIsBookmark(true);
            // 다른 필요한 상태 업데이트도 여기에서 수행
          } else {
            setIsBookmark(false);
          }
        } catch (e) {
          console.error(e);
        }
      };

      getCheckLike();
      getCheckBookmark();
      setLikeCount(initialLikeCount);
    }, [accessToken, id, initialLikeCount, isBookmark])
  );
  
  
  const handleHeartPress = async () => {
    if (!isHeart) {
      try {
        const response = await axios.post(
          `http://reborn.persi0815.site/board/${id}/like/create`, {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.isSuccess) {
          console.log(response.data.result);
          setLikeCount(response.data.result); // 서버 응답의 result로 likeCount 업데이트
          setIsHeart(true); // 하트 상태를 눌린 상태로 업데이트
        }
      } catch (error) {
        console.log("Error Response Body:", error.response?.data);
      }
    } else {
      // 하트가 현재 눌린 상태라면, DELETE 요청
      try {
        const response = await axios.delete(
          `http://reborn.persi0815.site/board/${id}/like/delete`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.isSuccess) {
          setLikeCount(response.data.result); // likeCount를 감소
          setIsHeart(false); // 하트 상태를 눌리지 않은 상태로 업데이트
        }
      } catch (error) {
        console.log("Error Response Body:", error.response?.data);
      }
    }
  };

  const handleBookmarkPress = async () => {
    if (!isBookmark) {
      try {
        const response = await axios.post(
          `http://reborn.persi0815.site/board/${id}/bookmark/create`, {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.isSuccess) {
          console.log(response.data);
          setIsBookmark(true); // 북마크 상태를 눌린 상태로 업데이트
        }
      } catch (error) {
        console.log("Error Response Body:", error.response?.data);
      }
    } else {
      // 북마크가 현재 눌린 상태라면, DELETE 요청
      try {
        const response = await axios.delete(
          `http://reborn.persi0815.site/board/${id}/bookmark/delete`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.isSuccess) {
          setIsBookmark(false); // 하트 상태를 눌리지 않은 상태로 업데이트
        }
      } catch (error) {
        console.log("Error Response Body:", error.response?.data);
      }
    }
  };

  const commentData = [
    { id: '1', title: '이사장', date: '2222-22.22', content: '맛있겠다.' },
    { id: '2', title: '배기용', date: '2222-22.23', content: '룰루랄라'},
    { id: '3', title: '문채영', date: '2222-22.24', content: '세번째 글'},
    { id: '4', title: '갱민준', date: '2222-22.24', content: '펲시콜라'},
];

  return (
    <SafeAreaProvider style={{backgroundColor: colors.background}}>
      <View>
        <View style={styles.titlecontainer}>
          <Image
            style={styles.profile}
            source={require("../../Assets/icons/profile.png")}
          />
          <Text
            style={[
              styles.title,
              { color: colors.palette.BrownDark, fontFamily: "Poppins-Bold" },
            ]}
          >
            {boardWriter}
            {"\n"}
            <Text style={styles.date}>{boardCreatedAt}</Text>{" "}
          </Text>
          <TouchableOpacity style={{justifyContent: 'center', position: 'absolute', right: '5%', top: '15%'}}>
            <Image style={{tintColor: colors.palette.Gray300}} source={require('../../Assets/icons/ShareBoard/xicon.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles.content,
              { color: colors.palette.BrownDark, fontFamily: "Poppins-Medium" },]}
          >
            {boardContent}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginLeft: "5%", tintColor: colors.palette.BrownDark }}
              source={require("../../Assets/icons/ShareBoard/commentIcon.png")}
            />
            <Text
              style={{
                marginLeft: "7%",
                color: colors.palette.BrownDark,
                fontFamily: "Poppins-Bold",
              }}
            >
              {commentCount}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleHeartPress}> 
            <Image
              style={{
                marginRight: "5%",
                tintColor: isHeart ? colors.palette.Red : colors.palette.Gray400
              }}
              source={require("../../Assets/icons/ShareBoard/heartIconGrey.png")}
            />
          </TouchableOpacity>
            <Text
              style={{
                color: colors.palette.BrownDark,fontFamily: "Poppins-Bold",}}>{likeCount}</Text>
            <TouchableOpacity onPress={handleBookmarkPress}>
                <Image
                style={{ marginLeft: 10,
                tintColor: isBookmark ? colors.palette.Blue : colors.palette.Gray400 }}
                source={require("../../Assets/icons/ShareBoard/bookmarkIconGrey.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <GrayLine></GrayLine>
      <View>
        <FlatList data={commentData}
          renderItem={({item}) => (
            <ShareBoardCommentItem id={item.id} title={item.title} date={item.date} content={item.content} />
          )} keyExtractor={item => item.id} contentContainerStyle={{ paddingBottom: 400 }} />
      </View>
      <KeyboardAvoidingView style={styles.commentView}>
        <TextInput
          placeholder="댓글입력해라"
          style={styles.commetInput}
        />
        <Pressable onPress={()=> console.log("보내기")}>
          <Image style={{marginVertical: 10, resizeMode: 'contain', width: 20} }source={require('../../Assets/icons/ShareBoard/xicon.png')} />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
    
  );
};

export default ShareContentScreen;

const styles = StyleSheet.create({
  shareItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  titlecontainer: {
    flexDirection: "row",
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    color: "grey",
  },
  content: {
    fontSize: 16,
    marginHorizontal: "5%",
  },
  profile: {
    width: "20%",
    resizeMode: "contain",
  },
  commentView:{
    width: '90%',
    height: 50,
    backgroundColor: colors.palette.White,
    borderRadius: 20,
    borderColor: colors.palette.Brown,
    borderWidth: 1,
    marginHorizontal: '5%',
    position: 'absolute',
    bottom: '3%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  commetInput: {
    fontSize: 14,
    fontFamily: 'Popins-Medium'
  },
});
