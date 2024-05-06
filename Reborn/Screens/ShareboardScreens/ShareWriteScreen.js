import React from "react";
import { useState,useEffect } from "react";
import {View, Text,Button,TouchableOpacity, TextInput, Image,StyleSheet} from "react-native";
import styled from "styled-components/native";
import DropDownPicker from 'react-native-dropdown-picker';

import { CompleteButton, buttonStyles, textStyles } from "../../components";
import { colors } from "../../theme";

import axios from "axios";
import { useAccessToken, useGlobalNickname } from "../../context/AccessTokenContext";

const ShareWriteScreen = ({navigation} ) => {
    const { accessToken } = useAccessToken();

    const [profileImage, setProfileImage] = useState(
        require('../../Assets/icons/profile.png')
      );

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: '감정 나눔', value: '1'},
        {label: '담소 나눔', value: '2'},
        {label: '봉사 나눔', value: '3'},
    ]);

    useEffect(() => {
        getProfileImage();
      }, []);
    

      const getProfileImage = async () => {
        try {
          const timestamp = new Date().getTime();
          const profileImageResponse = await axios.get(
            `http://reborn.persi0815.site/users/main?timestamp=${timestamp}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(profileImageResponse.data);
          if(profileImageResponse.data.result.profileImage){
              setProfileImage({ uri: profileImageResponse.data.result.profileImage });
            }  
        } catch (error) {
          console.error("Profile image fetch error:", error);
        }
      };

    return (
        <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: colors.background}}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image source={require('../../Assets/icons/ShareBoard/xicon.png')}/>
                    </TouchableOpacity>
                <View style={{marginVertical: '6%'}}>
                    <CompleteButton text="작성완료" onPress={()=> console.log(value)}> </CompleteButton>
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
                <View style={{flexDirection:'row',}}>
                    <Image style={{width: "15%", resizeMode: 'contain'}} source={profileImage}/>
                        <TextInput style={{marginLeft: '3%', fontFamily: "Poppins-Bold", fontSize: 18, marginRight: 30, marginTop: '7%' }} multiline={true}>게시판 글쓰기</TextInput>
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