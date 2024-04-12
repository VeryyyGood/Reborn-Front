import React, { useState } from "react";
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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { colors } from "../../theme";

import ShareBoardCommentItem from "../../components/ShareBoardCommentItem";
import { ViewStyles } from "../../components/viewStyles";

const ShareContentScreen = ({ route }) => {
  const { id, title, date, content } = route.params;
  const [isHeart, setIsHeart] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  

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
            {title}
            {"\n"}
            <Text style={styles.date}>{date}</Text>{" "}
          </Text>
          <TouchableOpacity style={{justifyContent: 'center', position: 'absolute', right: '5%', top: '15%'}}>
            <Image style={{tintColor: colors.palette.Gray300}} source={require('../../Assets/icons/ShareBoard/xicon.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles.content,
              { color: colors.palette.BrownDark, fontFamily: "Poppins-Medium" },
            ]}
          >
            {content}
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
              23
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setIsHeart(!isHeart)}>
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
                color: colors.palette.BrownDark,
                fontFamily: "Poppins-Bold",
              }}
            >
              100
            </Text>
            <TouchableOpacity onPress={()=> setIsBookmark(!isBookmark)}>
                <Image
                style={{ marginLeft: 10,
                tintColor: isBookmark ? colors.palette.Blue : colors.palette.Gray400 }}
                source={require("../../Assets/icons/ShareBoard/bookmarkIconGrey.png")}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={ViewStyles.greyLine}/>
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
