import React, { useEffect, useRef } from "react";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import PressableBounceWrapper from "../../components/PressableBounceWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const BottomCamera = ({
  val,
  setVal,
}: {
  val: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: val === "translate" ? 130 : val === "homework" ? -130 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    animation.start();
  }, [val]);

  return (
    <Animated.View
      style={[{ transform: [{ translateX: scaleValue }] }]}
      className={`w-full h-14  flex flex-row items-center justify-center mt-1  `}
    >
      <PressableBounceWrapper
        onPress={() => {
          setVal("translate");
          Animated.sequence([
            Animated.timing(scaleValue, {
              toValue: 250,
              duration: 700,
              useNativeDriver: true,
            }),
          ]);
        }}
      >
        <View
          className={`w-[125px] h-10 ${
            val === "translate"
              ? "bg-[#394357]"
              : "bg-[#1F2125] border border-[#444648]"
          } rounded-full  flex flex-row items-center  mr-2`}
        >
          <MaterialCommunityIcons
            name="translate"
            size={20}
            color="#8EA5CD"
            className="ml-4  "
          />
          <Text
            style={{ color: val === "translate" ? "#8EA5CD" : "#989EA1" }}
            className={` ml-2 mb-0.5 mr-4`}
          >
            Translate
          </Text>
        </View>
      </PressableBounceWrapper>
      <PressableBounceWrapper onPress={() => setVal("search")}>
        <View
          className={`w-[110px] h-10 ${
            val === "search"
              ? "bg-[#394357]"
              : "bg-[#1F2125] border border-[#444648]"
          }  rounded-full  flex flex-row items-center mr-2 `}
        >
          <Ionicons
            name="search-sharp"
            size={20}
            color="#8EA5CD"
            className="ml-4  "
          />
          <Text
            style={{ color: val === "search" ? "#8EA5CD" : "#989EA1" }}
            className={`  ml-2 mb-0.5 mr-4`}
          >
            Search
          </Text>
        </View>
      </PressableBounceWrapper>
      <PressableBounceWrapper onPress={() => setVal("homework")}>
        <View
          className={`w-[15px]  h-10  ${
            val === "homework"
              ? "bg-[#394357]"
              : "bg-[#1F2125] border border-[#444648]"
          }  rounded-full  flex flex-row items-center  `}
        >
          <Ionicons
            name="school-outline"
            size={20}
            color="#8EA5CD"
            className="ml-4  "
          />

          <Text
            style={{ color: val === "homework" ? "#8EA5CD" : "#989EA1" }}
            className={`ml-2 mr-4 mb-0.5`}
          >
            Homework
          </Text>
        </View>
      </PressableBounceWrapper>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",

    height: 300,
    width: 300,
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

export default BottomCamera;

// ${
//     val === "translate"
//       ? "pl-[250px]"
//       : val === "homework"
//       ? "pr-[250px]"
//       : ""
//   }
