import { StyleSheet } from "react-native";
import { colors } from "../theme";

export const buttonStyles = StyleSheet.create({
    buttonYellow: {
        backgroundColor: colors.palette.Yellow,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: '5%',
        marginBottom: '20%',
        borderRadius: 30,
        height: 50,
    },
    buttonBrown: {
        backgroundColor: colors.palette.Brown,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: '5%',
        marginBottom: '15%',
        borderRadius: 30,
        height: 50,
    },
    buttonBrownBottom: {
        backgroundColor: colors.palette.Brown,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -50,
        borderRadius: 30,
        height: 50,
        marginHorizontal: 100,
    },
    buttonLogin: {
        backgroundColor: colors.palette.NaverGreen,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '8%',
        marginVertical: '5%',
        borderRadius: 16,
        height: 55,
    },
    buttonWhiteBrown: {
        backgroundColor: colors.palette.White,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20%',
        marginVertical: '10%',
        borderRadius: 30.5,
        height: 55,
        borderColor: colors.palette.Brown,
        borderWidth: 1,
    }
});