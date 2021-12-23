import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

const MainLayout = () => {
  const progress = useDrawerProgress();
  console.log(progress);
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale: scale }],
    overflow: 'hidden',
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...animatedStyle,
      }}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
