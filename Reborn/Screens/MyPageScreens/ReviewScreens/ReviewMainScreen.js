import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";


const ReviewMainScreen = ({navigation: { navigate }} ) => (
    <View>
    <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReconnect' })}>
      <Text>리커넥트</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewRemind' })}>
      <Text>리마인드</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReveal' })}>
      <Text>리빌</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewRemember' })}>
      <Text>리멤버</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate('ReviewStack', {screen: 'ReviewReborn' })}>
      <Text>리본</Text>
    </TouchableOpacity> 
  </View>
);

export default ReviewMainScreen;