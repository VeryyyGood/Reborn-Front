import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import styled from "styled-components/native";

const ReturnScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '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';
  const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

  const addMessage = (sender, message) => {
    setMessages(prevMessages => [...prevMessages, { sender, message }]);
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage('user', message);
    setUserInput('');
    setLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
          max_tokens: 1024,
          top_p: 1,
          temperature: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0.5,
          stop: ['\n'],
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || 'No response';
      addMessage('bot', aiResponse);
    } catch (error) {
      console.error('Error occurred!', error);
      addMessage('bot', '오류 발생!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.chatbotScreen}>
      <ScrollView style={styles.chatDiv}>
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
        {messages.map((msg, index) => (
          <View key={index} style={styles.message(msg.sender)}>
            <Text>{`${msg.message}`}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder='메시지를 입력하세요'
          value={userInput}
          onChangeText={setUserInput}
          onSubmitEditing={handleSendMessage}
        />
        <Button title="전송" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const SendButton = styled.Pressable`
    background-color: black;
`;

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
  message: sender => ({
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: sender === 'user' ? '#E0EDCE' : 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  }),
  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
  },
});

export default ReturnScreen;
