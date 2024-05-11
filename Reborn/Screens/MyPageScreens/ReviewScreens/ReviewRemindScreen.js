import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../theme";
import { useAccessToken } from "../../../context/AccessTokenContext";
import axios from "axios";

const ChatBubble = ({ text, isMe }) => {
  return (
    <View
      style={[
        styles.bubbleContainer,
        isMe ? styles.rightBubble : styles.leftBubble,
      ]}
    >
      <Text style={styles.bubbleText}>{text}</Text>
    </View>
  );
};

const ReviewRemindScreen = ({ route }) => {
  const { petId } = route.params;
  const { accessToken } = useAccessToken();
  const [remindInfo, setRemindInfo] = useState(null);
  const initialMessages = [
    {
      id: 1,
      text: "우리가 처음 만났던 날 기억 나? 우리가 언제 어디서 어떻게 만나게 되었는지, 그날 있었던 일에 대해 나에게 말해줄래?",
      sender: "pet",
    },
    { id: 4, text: " ", sender: "me" },
    {
      id: 3,
      text: "내 이름을 00라고 지은 특별한 이유가 있어? 내가 가진 독특한 성격이나 습관, 특징이 있었을까? 나로 인해 웃겼던 에피소드가 있다면 말해줘!",
      sender: "pet",
    },
    { id: 6, text: " ", sender: "me" },
    {
      id: 5,
      text: "나와 함께한 가장 특별한 순간은 언제였어? 가장 즐거웠던 순간, 함께했던 여행에 대해 말해도 좋아! 그 순간이 어떻게 왜 특별했는지 이야기 해줄래?",
      sender: "pet",
    },
    { id: 8, text: " ", sender: "me" },
    {
      id: 7,
      text: "나와 함께 지내면서 너에게 어떤 변화가 있었을까? 나에게 위로를 받았거나 나로 인해 한 층 성장하게 된 일이 있었다면 말해 줘!",
      sender: "pet",
    },
    { id: 10, text: " ", sender: "me" },
    {
      id: 9,
      text: "우리가 함께한 시간 동안 나는 너에게 어떤 의미였는지 알고 싶어!",
      sender: "pet",
    },
    { id: 12, text: " ", sender: "me" },
  ];
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const fetchRemind = async () => {
      try {
        const response = await axios.get(
          `http://reborn.persi0815.site:8080/mypage/remind/${petId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const result = response.data.result;
        console.log(response.data);

        const updatedMessages = initialMessages.map((msg) => {
          if (msg.id % 2 === 0) {
            const answerObj = result.find((ele) => ele.date * 2 === msg.id);
            if (answerObj && answerObj.answer) {
              return { ...msg, text: answerObj.answer };
            }
          }
          return msg;
        });

        setMessages(updatedMessages);
      } catch (error) {
        console.error("오류 발생", error);
        console.log(`Fetching info for petId: ${petId}`);
      }
    };

    fetchRemind();
  }, [petId, accessToken]);

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.boldFont}>
          <Text style={styles.reColor}>RE</Text>MIND:
        </Text>
        <Text style={styles.normalFont}>충분한 대화 나누기</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} text={msg.text} isMe={msg.sender === "me"} />
        ))}
      </ScrollView>
    </>
  );
};
export default ReviewRemindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "5%",
    backgroundColor: colors.palette.White,
  },

  boldFont: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: colors.palette.BrownDark,
  },

  normalFont: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: colors.palette.BrownDark,
  },

  reColor: {
    color: colors.palette.Brown,
  },

  contentContainer: {
    padding: 10,
  },
  bubbleContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  leftBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: "80%",
  },
  rightBubble: {
    backgroundColor: "#E0EDC2",
    alignSelf: "flex-end",
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: "80%",
  },
  bubbleText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: colors.palette.BrownDark,
  },
});
