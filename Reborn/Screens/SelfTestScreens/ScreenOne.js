import React from "react";
import {View, Text,Button,TouchableOpacity} from "react-native";

const ScreenOne = ({navigation: { navigate }} ) => (
    <TouchableOpacity onPress={()=> navigate("Two")}>
        <Text>go to two</Text>
    </TouchableOpacity>
);

export default ScreenOne;