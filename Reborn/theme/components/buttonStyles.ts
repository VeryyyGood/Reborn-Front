import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const buttonStyles = StyleSheet.create({
    buttonYellow: {
        backgroundColor: colors.palette.Yellow,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
        height: 50,
    },
    buttonBrown: {
        backgroundColor: colors.palette.Brown,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: 20,
        marginBottom: 30,
        borderRadius: 30,
        height: 50,
    },
}); //지금 버튼이 padding으로 여백을 주고 있는데 뷰에 여백을 주는게 아니라 버튼에 줘서 버튼이 일정한 크기 유지를 안하고 글자 수에 따라 움직임 근데 일정하게하려면 px를 직접 줘야할텐데 그럼 화면커지면 이상할듯