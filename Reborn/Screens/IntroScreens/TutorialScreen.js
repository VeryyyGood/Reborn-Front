import React from "react";
import {View, Text,StyleSheet,TouchableOpacity} from "react-native";


const TutorialScreen = ({navigation: {navigate}}) => (
    <View>
        <TouchableOpacity onPress={() =>navigate('Tabs', { screen: 'Tabs' })}>
            <Text>튜로리얼 화면 이제 메인으로 가는데 스택 초기화 해야됨</Text>
        </TouchableOpacity>
    </View>
); //뷰 반환

export default TutorialScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });