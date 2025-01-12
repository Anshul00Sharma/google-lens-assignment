import {
  CameraView,
  CameraType,
  useCameraPermissions,
  CameraCapturedPicture,
} from "expo-camera";
import React, { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Square from "../components/ui/Square";
import { Router, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import PressableBounceWrapper from "../components/PressableBounceWrapper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomCamera from "@/components/ui/BottomCamera";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import gallery from "../assets/images/medium-shot-anime-woman-hugging-dog.jpg";

const NavBar = ({
  router,
  flash,
  setFlash,
}: {
  router: Router;
  flash: boolean;
  setFlash: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View className="w-full h-20 flex flex-row items-center justify-between px-5 mt-16">
      <View className="flex flex-row items-center">
        <PressableBounceWrapper onPress={() => router.back()}>
          <AntDesign
            name="left"
            size={24}
            color="white"
            className="mr-6  p-2.5  rounded-full"
          />
        </PressableBounceWrapper>
        {flash ? (
          <PressableBounceWrapper onPress={() => setFlash(!flash)}>
            <MaterialIcons
              name="flash-on"
              size={24}
              color="white"
              className="mr-2"
            />
          </PressableBounceWrapper>
        ) : (
          <PressableBounceWrapper onPress={() => setFlash(!flash)}>
            <MaterialIcons
              name="flash-off"
              size={24}
              color="white"
              className="mr-2"
            />
          </PressableBounceWrapper>
        )}
      </View>
      <View className="flex flex-row items-center mr-4">
        <Text className="text-white text-2xl font-medium">Google </Text>
        <Text className="text-white text-2xl "> Lens</Text>
      </View>
      <View className="flex flex-row items-center">
        <FontAwesome5 name="history" size={24} color="white" className="mr-6" />
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </View>
    </View>
  );
};

const SearchButton = ({
  val,
  takePicture,
}: {
  val: string;
  takePicture: () => void;
}) => {
  return (
    <View style={styles.buttonContainer}>
      <PressableBounceWrapper onPress={takePicture}>
        <View className="w-[90px] h-[90px] rounded-full border-2 border-[#ECEAE8] mb-5 flex items-center justify-center">
          <View className="flex  items-center justify-center w-[95%] h-[95%]  bg-[#ECEAE8] rounded-full">
            {val === "translate" ? (
              <MaterialCommunityIcons
                name="translate"
                size={35}
                color="#727070"
              />
            ) : val === "homework" ? (
              <Ionicons name="school-outline" size={35} color="#727070" />
            ) : (
              <Ionicons name="search-sharp" size={35} color="#727070" />
            )}
          </View>
        </View>
      </PressableBounceWrapper>
    </View>
  );
};

const GalleryButton = ({ pickImage }: { pickImage: () => void }) => {
  return (
    <View className="absolute bottom-6 rounded-full left-16 h-20 w-20  ">
      <PressableBounceWrapper onPress={pickImage}>
        <Image
          className="flex items-center justify-center w-full h-full rounded-full border-2 border-[#ECEAE8]"
          source={gallery}
        />
      </PressableBounceWrapper>
    </View>
  );
};

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [flash, setFlash] = useState<boolean>(false);
  const [val, setVal] = useState("search");
  const [photo, setPhoto] = useState<CameraCapturedPicture>();
  const [image, setImage] = useState<string>();
  const cameraRef = useRef<CameraView>(null);

  const router = useRouter();

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        imageType: "png",
      });
      setPhoto(photo);
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      // allowsEditing: false,r
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  useEffect(() => {
    console.log(photo?.uri);
    if (photo?.uri) {
      router.push({
        pathname: "/SearchImage",
        params: { image: photo.uri },
      });
    }
  }, [photo]);
  useEffect(() => {
    console.log(image);
    if (image) {
      router.push({
        pathname: "/SearchImage",
        params: { image: image },
      });
    }
  }, [image]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    requestPermission();
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        enableTorch={flash}
        ref={cameraRef}
      >
        <NavBar router={router} flash={flash} setFlash={setFlash} />
        <View className="w-full  flex flex-row items-center justify-center mt-[40%]">
          <Square val={val} />
        </View>
        <GalleryButton pickImage={pickImage} />
        <SearchButton val={val} takePicture={takePicture} />
      </CameraView>
      <BottomCamera val={val} setVal={setVal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#1F2125",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    width: "100%",
    height: "93%",
    borderRadius: 50,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
