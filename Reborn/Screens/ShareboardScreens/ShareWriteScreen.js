import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import DropDownPicker from 'react-native-dropdown-picker';
import { CompleteButton } from "../../components";
import { colors } from "../../theme";
import axios from "axios";
import { useAccessToken } from "../../context/AccessTokenContext";
import { launchImageLibrary } from 'react-native-image-picker';

const ShareWriteScreen = ({ navigation }) => {
  const { accessToken } = useAccessToken();
  const [profileImage, setProfileImage] = useState(require('../../Assets/icons/profile.png')); // 프로필 이미지
  const [postImage, setPostImage] = useState(null); // 게시글 업로드 이미지
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [boardContent, setBoardContent] = useState("");
  const [items, setItems] = useState([
    { label: '감정 나눔', value: 'EMOTION' },
    { label: '담소 나눔', value: 'CHAT' },
    { label: '봉사 나눔', value: 'ACTIVITY' },
  ]);

  // 프로필 이미지 불러오는 함수
  useEffect(() => {
    const getProfileImage = async () => {
      try {
        const timestamp = new Date().getTime();
        const profileImageResponse = await axios.get(`http://reborn.persi0815.site/users/main?timestamp=${timestamp}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (profileImageResponse.data.result.profileImage) {
          setProfileImage({ uri: profileImageResponse.data.result.profileImage });
        }
      } catch (error) {
        console.error("Profile image fetch error:", error);
      }
    };
    getProfileImage();
  }, [accessToken]);

  // 게시글에 업로드할 이미지 선택 함수
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('이미지 선택 취소함');
      } else if (response.error) {
        console.log('이미지 선택 에러: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPostImage(source); // 게시글 업로드 이미지 업데이트
      }
    });
  };

  // 게시글 업로드 함수
  const postContent = async () => {
    const formData = new FormData();
    const jsonData = JSON.stringify({
      boardType: value,
      boardContent: boardContent,
    });
    formData.append('data', jsonData);

    if (postImage && postImage.uri) {
      formData.append('board', {
        uri: postImage.uri,
        type: 'image/jpeg',
        name: 'board.jpg',
      });
    }

    try {
      const response = await fetch("http://reborn.persi0815.site/board/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      const jsonResponse = await response.json();
      console.log("Post response:", jsonResponse);

      setValue(null); // 드롭다운 선택값 초기화
      setBoardContent(""); // 게시판 글 내용 초기화
      setPostImage(null); // 드롭다운 선택값 초기화
      navigation.goBack();
    } catch (error) {
      console.error("Post content error:", error);
    }
  };

    return (
        <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: colors.background}}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image source={require('../../Assets/icons/ShareBoard/xicon.png')}/>
                    </TouchableOpacity>
                <View style={{marginVertical: '6%', marginRight: -20}}>
                    <CompleteButton text="작성완료" onPress={postContent}> </CompleteButton>
                </View>
                </View> 
                <View style={{}}>
                    <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="게시판을 선택해주세요"
                    listMode="FLATLIST"
                    modalProps={{
                        animationType: 'fade',
                    }}
                    modalTitle="선택해주세요."
                    //listItemContainerStyle={{}}
                    />
                </View>
                <View style={{ flexDirection: 'row' , marginBottom: 80}}>
                <Image style={{ width: "15%", resizeMode: 'contain', borderRadius:50}} source={profileImage} />
                <TextInput
                    style={{ marginLeft: '3%', fontFamily: "Poppins-Bold", fontSize: 18, marginRight: 70, marginTop: '7%' }}
                    multiline={true}
                    onChangeText={setBoardContent} // 입력 내용 관리
                    value={boardContent} // TextInput의 값
                    placeholder="게시판 글쓰기"
                />
                </View>
                <View style={{flexDirection: 'row', alignItems:'flex-end', justifyContent:'space-between', marginLeft: 70}}>
                  {postImage && <Image style={{width: 100, height:100 }} source={postImage} />}
                  <TouchableOpacity
                    onPress={selectImage}
                    style={{
                      backgroundColor: colors.palette.Blue,
                      borderRadius: 5,
                      alignItems: 'center',
                      width: '25%', justifyContent: 'center', marginRight: 10
                    }}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, paddingVertical:2, color:'white'}}>사진 선택</Text>
                  </TouchableOpacity>
                </View>

                  
            </View>
        </View>
    );
};

export default ShareWriteScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: -20,
        marginHorizontal: '5%' 
    },

});