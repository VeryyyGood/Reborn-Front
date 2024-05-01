import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../theme";
import { GrayLine, ModifyButton ,CompleteButton,DelateButton, RadioButton } from "../../components";
import { View, TextInput, Text,Button,TouchableOpacity, StyleSheet } from "react-native";

import sunImage from "../../Assets/icons/rediaryimage/sun.png";
import cloudImage from "../../Assets/icons/rediaryimage/cloud.png";
import rainImage from "../../Assets/icons/rediaryimage/rain.png";

const ReDiaryModifyScreen = ({route}) => {
    const { rediaryId, rediaryTitle, rediaryCreatedAt, rediaryContent, pickEmotion, resultEmotion } = route.params;

    const [selectedEmotion, setSelectedEmotion] = useState(pickEmotion);
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
    const [text, setText] = useState(""); // 입력된 텍스트

    // 오늘 날짜 얻기 . !!
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    
    // 수정 모드 토글 함수 수정 . !!
    const toggleEdit = () => {
        // 오늘 날짜와 date가 같을 때만 수정 모드 토글
        if(rediaryCreatedAt === todayStr) {
            setIsEditing(!isEditing);
        } else {
            alert('오늘 작성된 일기만 수정할 수 있습니다.');
        }
    };

    //원래 토글 . !!
    // const toggleEdit = () => {
    //     setIsEditing(!isEditing);
    // };

    const analyzeText = () => {
        console.log("분석 중: ", text);
    };

    const emotions = [
      { id: "SUNNY", image: sunImage },
      { id: "CLOUDY", image: cloudImage },
      { id: "RAINY", image: rainImage },
    ];
    
    

    // //원래 토글 . !!
    // <TouchableOpacity style={styles.ReModifyButtun} onPress={toggleEdit}>
    //         <Text style={styles.buttonText}>수정 하기</Text>
    //     </TouchableOpacity>
    return (
      <Container>
        <TouchableOpacity 
            style={[styles.ReModifyButtun, rediaryCreatedAt === todayStr ? {} : styles.buttonDisabled]} 
            onPress={toggleEdit} 
            disabled={rediaryCreatedAt !== todayStr}
        >
            <Text style={styles.buttonText}>수정 하기</Text>
        </TouchableOpacity>
        <View style={{ padding: 20, flexDirection: "row", marginTop: -20,}}>
          {emotions.map((emotion) => (
            <RadioButton
              key={emotion.id}
              isSelected={selectedEmotion === emotion.id}
              onPress={() => setSelectedEmotion(emotion.id)}
              label={emotion.label}
              image={emotion.image}
            />
          ))}
        </View>
        <View style={styles.titleText}>
            {isEditing ? (
            <TextInput
            placeholder="제목을 입력하세요"
            style={styles.titleInput}
            />
            ) : (
            <Text style={styles.dataText}>{rediaryTitle}</Text>
            )}
        </View>
        <TextInputContainer>
            {isEditing ? (
            <TextInput
                style={styles.textInput}
                onChangeText={setText}
                // value={rediaryContent}
                placeholder="오늘의 감정일기를 작성해보세요"
            />
            ) : (
            <Text style={styles.dataText}>{rediaryContent}</Text>
            )}
        </TextInputContainer>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20,}}>
            <TouchableOpacity style={styles.ReCompleteButtun}>
            <Text style={styles.buttonText}>
                삭제 하기
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.ReCompleteButtun, isEditing ? styles.analyzeButtonEnabled : styles.analyzeButtonDisabled]}
                onPress={analyzeText}
                disabled={!isEditing}
                >
          <Text style={styles.buttonText}>분석하기</Text>
        </TouchableOpacity>
        </View>        
      </Container>
    );
};


export default ReDiaryModifyScreen;


const styles = StyleSheet.create({
    ReModifyButtun: {
        height: 40,
        backgroundColor: colors.palette.Blue,
        width: '25%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        marginLeft: '70%',
        marginTop: '5%',
    },
    ReCompleteButtun: {
        height: 40,
        backgroundColor: colors.palette.Red,
        width: '25%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop: '5%',
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        color: colors.palette.White,
        marginTop: 3,
    },
    ReDelateButton: {
        height: 40,
        //backgroundColor: colors.palette.Green,
        width: '25%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop: '5%',
    },
    analyzeButtonEnabled: {
        backgroundColor: colors.palette.Green,
      },
    analyzeButtonDisabled: {
        backgroundColor: colors.palette.Gray300,
    },
    titleText:{
        height: 60,
        backgroundColor: colors.palette.Gray200,
        marginHorizontal: '8%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '5%',
        borderRadius: 5
      },
      titleInput: {
        fontSize: 18,
        fontFamily: 'Popins-Medium'
      },
      textInput: {
        fontSize: 18,
        fontFamily: 'Popins-Medium'
      },
      dataText: {
        fontSize: 18,
        paddingVertical: '5%',
        fontFamily: 'Poppins-Bold'
      },
      buttonDisabled: {
        backgroundColor: colors.palette.Gray300,
    },
      
});

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.palette.White};
`;

const TextInputContainer = styled.View`
  margin: 0% 8% 0% 8%;
  background-color: ${colors.palette.Gray200};
  padding: 3% 4% 80% 4%;
`;



