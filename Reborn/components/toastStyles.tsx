import React from 'react';
import styled from "styled-components/native";
import { colors } from "../theme";
import { Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface Props {
  showToast: boolean;
  message?: string;
}

export const Toast = ({ showToast, message }: Props): JSX.Element => {
    const positionY = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(positionY.value) }],
    };
  });

  if (showToast) {
      positionY.value = -16;
  }
  if (!showToast) {
      positionY.value = 100;
  }

  return (
    <Animated.View
      style={[
        styles.commonToastStyle,
        styles.bottomToastStyle,
        animatedStyle,
      ]}
    >
      <Text style={{color: colors.palette.White, textAlign:"center"}}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    commonToastStyle: {
      height: 40,
      width: "40%",
      borderRadius: 24,
      margin: 8,
      padding: 8,
      elevation: 4,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      right: 0,
      left: 0,
      zIndex: 100,
    },
    bottomToastStyle: {
      backgroundColor: '#C85A55',
      opacity: 0.72,
      bottom: 0,
    },
  });