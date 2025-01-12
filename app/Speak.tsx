import { View, Text } from "react-native";
import PressableBounceWrapper from "@/components/PressableBounceWrapper";
import { Router, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
// import im from "../assets/images/speak.gif";
import { Image } from "expo-image";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const NavBar = ({ router }: { router: Router }) => {
  return (
    <View className="w-full h-20 flex flex-row items-center justify-between px-5">
      <PressableBounceWrapper onPress={() => router.back()}>
        <AntDesign
          name="left"
          size={24}
          color="#989EA1"
          className="mr-8  p-2.5 bg-[#43474A] rounded-full"
        />
      </PressableBounceWrapper>
      <Feather
        name="globe"
        size={24}
        color="#989EA1"
        className=" p-2.5 bg-[#43474A] rounded-full"
      />
    </View>
  );
};
const SearchASong = () => {
  return (
    <View className="w-full h-20 flex justify-center items-center mt-[200px]">
      <View className="w-48 h-[60%] bg-[#202226] rounded-full border border-[#444648] flex flex-row items-center  ">
        <MaterialCommunityIcons
          name="music-note"
          size={22}
          color="#989EA1"
          className="ml-4  "
        />
        <Text className="text-[#989EA1]  ml-2 mb-0.5">Search a song</Text>
      </View>
    </View>
  );
};
const Heading = () => {
  return (
    <Text className="text-[#989EA1] text-3xl mt-[120px] text-center ">
      Speak now
    </Text>
  );
};
const FourDots = () => {
  return (
    <Image
      style={{ height: 90, width: 150, alignSelf: "center", marginTop: 150 }}
      source={require("../assets/images/speak.gif")}
      autoplay
    />
  );
};

export default function Search() {
  const router = useRouter();
  return (
    <View className={"flex-1 bg-[#2F3133] pt-16"}>
      <NavBar router={router} />
      <Heading />
      <FourDots />
      <SearchASong />
    </View>
  );
}
