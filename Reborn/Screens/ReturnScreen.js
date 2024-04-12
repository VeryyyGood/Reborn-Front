import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const ReturnScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "";
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

  useEffect(() => {
    addMessage(
      "bot",
      "안녕하세요! 저는 당신의 챗봇 RETURN 입니다. 무엇을 도와드릴까요?"
    );
    setTimeout(() => {
      // 메시지 순차적으로 추가
      addMessage("bot", "애플리케이션 기능 안내");
      addMessage("bot", "상담센터 안내");
      addMessage("bot", "문의하기");
    }, 500);
  }, []);

  const addMessage = (sender, message) => {
    const newMessage = {
      sender,
      message,
      id: Date.now() + Math.random().toString(), // 고유한 ID 생성
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleOptionSelect = (message) => {
    switch (message) {
      case "애플리케이션 기능 안내":
        addMessage("user", message);
        addMessage("bot", "애플리케이션의 기능에 대해서는...");
        break;
      case "상담센터 안내":
        addMessage("user", message);
        addMessage("bot", "상담센터의 운영 시간은...");
        break;
      case "문의하기":
        addMessage("user", message);
        addMessage("bot", "문의하실 내용을 입력해주세요...");
        break;
      default:
        addMessage(
          "bot",
          "죄송합니다. 이해하지 못했습니다. 다시 선택해주세요."
        );
    }
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage("user", message);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
          max_tokens: 1024,
          top_p: 1,
          temperature: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0.5,
          stop: ["\n"],
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "No response";
      addMessage("bot", aiResponse);
    } catch (error) {
      console.error("Error occurred!", error);
      addMessage("bot", "오류 발생!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.chatbotScreen}>
      <ScrollView style={styles.chatDiv}>
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
        {messages.map((msg) => (
          <TouchableOpacity
            key={msg.id}
            onPress={() => handleOptionSelect(msg.message)}
            disabled={msg.sender !== "bot"}
          >
            <View style={styles.message(msg.sender)}>
              <Text>{`${msg.message}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요"
          value={userInput}
          onChangeText={setUserInput}
          onSubmitEditing={handleSendMessage}
        />
        <Button title="전송" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatbotScreen: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  chatDiv: {
    flex: 1,
    marginBottom: 20,
  },
  message: (sender) => ({
    alignSelf: sender === "user" ? "flex-end" : "flex-start",
    backgroundColor: sender === "user" ? "#E0EDCE" : "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  }),
  inputDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
  },
});

export default ReturnScreen;
