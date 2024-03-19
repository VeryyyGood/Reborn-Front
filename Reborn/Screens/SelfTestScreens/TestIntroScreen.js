import React from "react";
import {View, Text,TouchableOpacity} from "react-native";


const TestIntroScreen = ({navigation: {navigate}}) => (
    <View>
        <TouchableOpacity onPress={() =>navigate('Stack', { screen: 'One' })}>
            <Text>test</Text>
        </TouchableOpacity>
    </View>
); //뷰 반환

export default TestIntroScreen;