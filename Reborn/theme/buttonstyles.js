import { StyleSheet } from "react-native";
import {colors} from "./colors";

export const buttonstyles = StyleSheet.create({
    nextbuttonTheme: {
        backgroundColor: colors.palette.Yellow, 
        //paddingHorizontal:120, -> width : "40%" 이런식으로 해야할듯
        paddingHorizontal:120,
        marginBottom: 30, borderRadius: 30, height: 50, justifyContent: "center",
    },
});