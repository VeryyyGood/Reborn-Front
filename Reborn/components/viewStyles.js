import { StyleSheet } from "react-native";
import { colors } from "../theme";

export const ViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greyBox: {
        width: "85%",
        height: 500,
        backgroundColor: colors.palette.Gray200,
        marginTop: '15%',
        borderRadius: 20,
        justifyContent: "center",
        alignItems:"center",
    },
    greyLine: {
        marginTop: -10,
        borderBottomWidth: 2, 
        borderBottomColor: colors.palette.Gray300,
        paddingBottom: 3, marginHorizontal: 20,
    },
});