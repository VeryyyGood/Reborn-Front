import { StyleSheet, Platform } from "react-native";
import { colors } from "../theme";

export const textStyles = StyleSheet.create({
    contentsTextBox: {
        backgroundColor: colors.palette.White,
        borderWidth: 1,
        borderColor: colors.palette.Red,
        borderRadius: 15,
        padding: 10,
        textAlign: 'center',
        marginHorizontal: "10%",
        marginTop: "8%",
        fontFamily:'Poppins-Bold',
        fontWeight: 'bold',
        ...Platform.select({ // different from platform
            ios: {
              shadowColor: colors.palette.Gray500,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.5,
              shadowRadius: 10,
            },
            android: {
              elevation: 4,
            },
          }),
    },
});