import { StyleSheet } from "react-native";
import {colors} from "./colors";

export const buttonStyles = StyleSheet.create({
    nextbuttonYellow: {
        backgroundColor: colors.palette.Yellow, 
        //paddingHorizontal:120, -> width : "40%" 이런식으로 해야할듯
        paddingHorizontal:110,
        marginBottom: 30, borderRadius: 30, height: 50, justifyContent: "center",
        marginVertical: 20,
    },
    nextbuttonBrown: {
        backgroundColor: colors.palette.Brown, 
        //paddingHorizontal:120, -> width : "40%" 이런식으로 해야할듯
        paddingHorizontal:110,
        marginBottom: 30, borderRadius: 30, height: 50, justifyContent: "center",
        marginVertical: 20,
    },
});