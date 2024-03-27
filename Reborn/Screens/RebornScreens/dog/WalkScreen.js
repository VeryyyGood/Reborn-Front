import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet,Image} from "react-native";

import { colors, palette } from "../../../theme";
import { ViewStyles, buttonStyles } from "../../../components";

const PetScreen = ({navigation: {navigate}}) => (
    <View style={ViewStyles.container}>
            <View>
                <TouchableOpacity style={buttonStyles.buttonBrown} onPress={() => navigate("Feed")}>
                    <Text style={{color: "white"}}>간식주러 가기</Text>
                </TouchableOpacity>
            </View>
        </View>
); //뷰 반환

export default PetScreen;