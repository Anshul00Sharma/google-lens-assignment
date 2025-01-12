import React, { useState, useEffect } from "react";
import { Animated, TouchableOpacity, StyleSheet, View } from "react-native";

interface PressableBounceWrapperProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const PressableBounceWrapper: React.FC<PressableBounceWrapperProps> = ({
  children,
  onPress,
}) => {
  const scale = useState(new Animated.Value(1))[0];

  const onPressHandler = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onPress) {
        onPress();
      }
    });
  };

  useEffect(() => {
    return () => {
      scale.stopAnimation(() => scale.setValue(1));
    };
  }, []);

  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={1}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default PressableBounceWrapper;
