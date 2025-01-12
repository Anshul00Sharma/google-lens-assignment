import { View, Text, StyleSheet, Animated } from "react-native";
import { Image, ImageBackground } from "expo-image";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Asset } from "expo-asset";
import { TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, Entypo } from "@expo/vector-icons";
import PressableBounceWrapper from "../components/PressableBounceWrapper";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import logo from "../assets/images/google_PNG.png";
import Drag from "reanimated-drag-resize";
import { useEffect } from "react";

import * as ImageManipulator from "expo-image-manipulator";

const Card = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between px-5 mt-6">
      <View className="w-[45%]  ">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: "100%", height: 450, borderRadius: 15 }}
        />
        <Text className="text-white text-sm mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          pariatur illo
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            width: "100%",
            height: 250,
            borderRadius: 15,
            marginTop: 20,
          }}
        />
        <Text className="text-white text-sm mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          pariatur illo
        </Text>
      </View>

      <View className="w-[45%] ">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: "100%", height: 250, borderRadius: 15 }}
        />
        <Text className="text-white text-sm mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          pariatur illo
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            width: "100%",
            height: 450,
            borderRadius: 15,
            marginTop: 20,
          }}
        />
        <Text className="text-white text-sm mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          pariatur illo
        </Text>
      </View>
    </View>
  );
};

export default function SearchImage() {
  const { image } = useLocalSearchParams();
  const [images, setImage] = useState<string>(image as string);
  const [height, setHeight] = useState({
    height: 0,
    originX: 0,
    originY: 0,
    width: 0,
  });

  useEffect(() => {
    console.log(images);
  }, [images]);
  useEffect(() => {
    console.log(
      height.originX,
      height.originY,
      height.width * 0.2,
      height.height * 0.2
    );
    console.log("Lo0du");

    const cropImage = async (
      imageUri: string,
      originX: number,
      originY: number,
      width: number,
      height: number
    ) => {
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        imageUri,
        [
          {
            crop: {
              originX: originX,
              originY: originY,
              width: width,
              height: height,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );

      return manipulatedImage;
    };

    cropImage(
      image as string,
      height.originX * 6,
      height.originY * 2,
      height.width * 2,
      height.height * 2
    )
      .then((res) => {
        console.log("res", res);
        console.log("---------------------------------------------------");
        setImage(res.uri);
      })
      .catch((err) => {
        console.log("----->", err);
      });
  }, [height]);

  const DATA_ARRAY = [
    {
      name: "Box 1",
      color: "pink",
      x: 80,
      y: 60,
      height: 450,
      width: 260,
    },
  ];

  const [limitationHeight, setLimitationHeight] = useState(0);
  const [limitationWidth, setLimitationWidth] = useState(0);

  const [boxArray, setBoxArray] = useState(DATA_ARRAY);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [value, setValue] = useState({ color: "white" });

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === 2) {
      setValue({ color: "#1F2125" });
    }
    if (index !== 2) {
      setValue({ color: "#2F3133" });
    }
  }, []);

  const snapPoints = useMemo(() => ["25%", "100%"], []);
  const router = useRouter();

  return (
    <View className={"flex-1 flex items-center pt-32 bg-black "}>
      <View className="w-full h-20 flex flex-row items-center justify-between px-5  absolute top-16 ">
        <View className="flex flex-row items-center">
          <PressableBounceWrapper onPress={() => router.back()}>
            <AntDesign
              name="left"
              size={24}
              color="white"
              className="mr-6  p-2.5  rounded-full"
            />
          </PressableBounceWrapper>
        </View>
        <View className="flex flex-row items-center mr-4">
          <Text className="text-white text-2xl font-medium">Google </Text>
          <Text className="text-white text-2xl "> Lens</Text>
        </View>
        <View className="flex flex-row items-center">
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </View>
      </View>

      <ImageBackground
        source={{ uri: image as string }}
        style={{ height: "70%", width: "90%" }}
        onLayout={(ev) => {
          const layout = ev.nativeEvent.layout;
          setLimitationHeight(layout.height);
          setLimitationWidth(layout.width);
        }}
      >
        {boxArray
          .filter((_) => limitationHeight > 0 && limitationWidth > 0)
          .map(({ color, name, x, y, height, width }, index) => (
            <Drag
              key={index}
              height={height}
              width={width}
              x={x}
              y={y}
              resizerImageSource={require("../assets/images/no.png")}
              limitationHeight={limitationHeight}
              limitationWidth={limitationWidth}
              onDragEnd={(boxPosition) => {
                setHeight({
                  height: boxPosition.height,
                  width: boxPosition.width,
                  originX: boxPosition.x,
                  originY: boxPosition.y,
                });
                const _boxArray = [...boxArray];
                const _box = _boxArray[index];
                _boxArray[index] = {
                  ..._box,
                  x: boxPosition.x,
                  y: boxPosition.y,
                  height: boxPosition.height,
                  width: boxPosition.width,
                };
                setBoxArray(_boxArray);
              }}
              onResizeEnd={(boxPosition) => {
                const _boxArray = [...boxArray];
                const _box = _boxArray[index];
                _boxArray[index] = {
                  ..._box,
                  x: boxPosition.x,
                  y: boxPosition.y,
                  height: boxPosition.height,
                  width: boxPosition.width,
                };
                setBoxArray(_boxArray);
              }}
            >
              <Animated.View
                className="flex items-center justify-center rounded-3xl"
                style={[StyleSheet.absoluteFill, styles.box]}
              >
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
              </Animated.View>
            </Drag>
          ))}
      </ImageBackground>
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={0}
        handleStyle={{
          backgroundColor: "#1F2125",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: "hidden",
          height: 1,
        }}
        handleIndicatorStyle={{ backgroundColor: value.color }}
        backgroundStyle={{
          backgroundColor: "#1F2125",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: "hidden",
          height: 1,
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className="w-full h-20 flex flex-row items-center justify-between mt-8 ">
            <View className="h-[80%] w-[90%] mx-auto bg-[#2F3133] rounded-full  items-center justify-between flex flex-row px-3 ">
              <View className="flex flex-row items-center">
                <Image source={logo} style={{ width: 45, height: 45 }} />
                <Image
                  contentFit="cover"
                  source={{
                    uri: images,
                  }}
                  style={{
                    width: 60,
                    height: 45,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <TextInput
                  className="text-white text-xl"
                  placeholder="Add to search"
                  placeholderTextColor={"#6C7174"}
                  // onBlur={() => bottomSheetRef.current?.snapToIndex(1)}
                  onFocus={() => bottomSheetRef.current?.snapToIndex(1)}
                  style={{ fontFamily: "OpenSans_400Regular" }}
                />
              </View>
              <View className="flex flex-row items-center">
                <View className="h-10 w-[2px] mr-2 bg-[#3E4042]" />
                <View className="w-12 h-12 bg-[##79929E] rounded-full flex justify-center items-center">
                  <Text className="text-white text-2xl">A</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View className="w-full h-[1px] bg-[#3E4042] mt-10" /> */}
        </BottomSheetView>
        <BottomSheetScrollView className="w-full  flex-1 bg-[#1F2125]">
          <Card />
          <Card />
        </BottomSheetScrollView>
        <View className="w-full h-[50px] bg-[#2F3133] mt-10 absolute bottom-0 flex flex-row  items-center justify-between px-10">
          <AntDesign name="left" size={24} color="#82888B" />
          <AntDesign name="right" size={24} color="#82888B" />
          <Ionicons name="home-outline" size={24} color="#82888B" />
          <MaterialCommunityIcons
            name="numeric-1-box-outline"
            size={24}
            color="#82888B"
          />
        </View>
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2125",
  },
  contentContainer: {
    height: 100,
    alignItems: "center",
    backgroundColor: "#1F2125",
  },

  box: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#9AA6B2",
    borderWidth: 0.5,
  },
  boxContainer: {
    flex: 1,
    margin: 40,
  },
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "white",
    borderWidth: 4,
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
    borderLeftWidth: -1,
    borderBottomWidth: -1,
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
    borderLeftWidth: -1,
    borderTopWidth: -1,
    borderBottomRightRadius: 30,
  },
});
