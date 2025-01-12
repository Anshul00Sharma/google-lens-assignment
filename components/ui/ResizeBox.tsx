import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
  Animated,
} from "react-native";

const MyComponent = () => {
  const [offset, setOffset] = useState(0);
  const [topHeight, setTopHeight] = useState(40); // min height for top pane header
  const [bottomHeight, setBottomHeight] = useState(40); // min height for bottom pane header
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [isDividerClicked, setIsDividerClicked] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponderRef = useRef(
    PanResponder.create({
      //   onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        setOffset(e.nativeEvent.pageY);
        setIsDividerClicked(true);
      },

      onPanResponderMove: (e, gestureState) => {
        const newBottomHeight =
          gestureState.moveY > deviceHeight - 40
            ? 40
            : deviceHeight - gestureState.moveY;
        setBottomHeight(newBottomHeight);
        setOffset(e.nativeEvent.pageY);
      },

      onPanResponderRelease: (e, gestureState) => {
        setOffset(e.nativeEvent.pageY);
        setIsDividerClicked(false);
      },
    })
  ).current;

  return (
    <View style={styles.content}>
      {/* Top View */}
      <Animated.View
        style={[
          { backgroundColor: "pink", minHeight: 40, flex: 1 },
          { height: topHeight },
        ]}
      >
        {/* Render child one if available */}
      </Animated.View>

      {/* Divider */}
      <View
        style={[
          { height: 10 },
          isDividerClicked
            ? { backgroundColor: "#666" }
            : { backgroundColor: "#e2e2e2" },
        ]}
        {...panResponderRef.panHandlers}
      />

      {/* Bottom View */}
      <Animated.View
        style={[
          { backgroundColor: "green", minHeight: 40 },
          { height: bottomHeight },
        ]}
      >
        {/* Render child two if available */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
});

export default MyComponent;
