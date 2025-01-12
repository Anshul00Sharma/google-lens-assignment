import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const PulseComponent = ({ val }: { val: string }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 0.9,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);

    return () => clearTimeout(timer);
  }, [val]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    >
      <View style={[styles.container]}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {val === "translate" ? (
            <MaterialCommunityIcons
              name="translate"
              size={50}
              color="white"
              style={{ top: 130, left: 130 }}
            />
          ) : val === "homework" ? (
            <Ionicons
              name="school-outline"
              size={50}
              color="white"
              style={{ top: 130, left: 130 }}
            />
          ) : (
            <Ionicons
              name="search-sharp"
              size={50}
              color="white"
              style={{ top: 130, left: 130 }}
            />
          )}
        </Animated.View>

        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 300,
    height: 300,
  },
  corner: {
    position: "absolute",
    width: 55,
    height: 55,
    borderColor: "white",
    borderWidth: 2,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 30,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 30,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 30,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 30,
  },
});

export default PulseComponent;
