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
        paddingHorizontal: 30,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 16,
        height: 50,
    },
    buttonWhiteBrown: {
        backgroundColor: colors.palette.White,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
        height: 50,
        borderColor: colors.palette.Brown,
        borderWidth: 1,
    }
});