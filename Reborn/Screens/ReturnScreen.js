import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";

const ReturnScreen = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchGPTResponse = async () => {
    if (!inputText.trim()) return;

    const systemMessages = [
      {
        role: "system",
        content:
          "당신은 Reborn 애플리케이션 기능과 상담센터를 안내하는 활기찬 봇입니다.",
      },
      {
        role: "system",
        content:
          "안녕하세요! 저는 Reborn 애플리케이션 기능과 펫로스 증후군 상담센터를 안내하는 챗봇 Return 이에요!\n무엇을 도와드릴까요?",
      },
    ];

    const userMessage = {
      role: "user",
      content: inputText,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "ft:gpt-3.5-turbo-0125:personal::9EGjLqo7",
          messages: [...systemMessages, { role: "user", content: inputText }],
          max_tokens: 250,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );

      const botMessage = {
        role: "bot",
        content: response.data.choices[0].message.content.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("OpenAI API 호출 중 오류 발생:", error);
    }

    setInputText("");
  };

  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={msg.role === "user" ? styles.userMessage : styles.botMessage}
          >
            <Text style={styles.messageText}>{msg.content}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="여기에 입력하세요..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={fetchGPTResponse}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={fetchGPTResponse}
          >
            <Text style={styles.sendButtonText}>전송</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E0EDC2",
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: "80%",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#FFCF88",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ReturnScreen;
