import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors} from "../../theme";
import { ViewStyles, buttonStyles } from "../../components"

const questions = [
    { question: '질문 1', answers: ['매우 그렇지 않다.', '그렇지 않다.', '그렇다.', '매우 그렇다.'], scores: [10, 8, 6, 4], index: ['1/16'] },
    { question: '질문 2', answers: ['매우 그렇지 않다.', '그렇지 않다.', '그렇다.', '매우 그렇다.'], scores: [10, 8, 6, 4], index: ['2/16'] },
    // 나머지 질문
];

const RadioButton = ({ isSelected, onPress, label }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
        {isSelected && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}; //개고생한 체크

export default function TestScreen({ navigation }) {
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // 선택된 답변 인덱스를 위한 상태

    const handleNextQuestion = () => {
        if (selectedAnswerIndex !== null) { //선택된 답변일때
            const score = questions[currentQuestionIndex].scores[selectedAnswerIndex];
            setTotalScore(totalScore + score);
            setSelectedAnswerIndex(null); //다음 질문일때

            if (currentQuestionIndex < questions.length - 1) {
                setcurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                console.log(totalScore + score); //점수 합산ㅇ
            }
        }
    };

    return (
      <View style={ViewStyles.container}>
          <View style={ViewStyles.greyBox}>
            <View>
              <Text style={styles.questionText}>
                {questions[currentQuestionIndex].question}
              </Text>
            </View>
            <View>
              <View style={{ paddingHorizontal: 20 }}>
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <RadioButton
                    key={index}
                    isSelected={selectedAnswerIndex === index}
                    onPress={() => setSelectedAnswerIndex(index)}
                    label={answer}
                  />
                ))}
              </View>
            </View>
            <Text style={{marginTop: 20,}}>{questions[currentQuestionIndex].index}</Text>
          </View>
          <TouchableOpacity style={[buttonStyles.buttonBrown]} onPress={handleNextQuestion}>
            <Text style={{color: "white"}}>다음으로</Text>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      marginRight: "30%",
    },
    radioButton: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    radioButtonSelected: {
      borderColor: colors.palette.BrownDark,
    },
    radioButtonInner: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: colors.palette.Brown,
    },
    radioButtonLabel: {
      fontSize: 17,
    },
    questionText: {
      fontSize: 20,
      marginBottom: 80,
    },
});