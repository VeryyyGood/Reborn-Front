import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";


const AccountManagementScreen = ({navigation: { navigate }} ) => (
    <View>
    <TouchableOpacity onPress={() => navigate('AccountModify')}>
      <Text>계정 정보 수정</Text>
    </TouchableOpacity>
  </View>
);

export default AccountManagementScreen;