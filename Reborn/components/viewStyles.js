import { StyleSheet } from "react-native";
import { colors } from "../theme";
import styled from "styled-components/native";

export const ViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  greyBox: {
    width: "85%",
    height: 500,
    backgroundColor: colors.palette.Gray200,
    marginTop: "15%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const GrayLine = styled.View`
  width: 90%;
  height: 2px;
  margin: 5% 5% 5% 5%;
  background-color: ${colors.palette.Gray300};
`;
