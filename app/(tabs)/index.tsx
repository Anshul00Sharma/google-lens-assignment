import { Image, ScrollView } from "react-native";
import { useRouter, Router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import logo from "../../assets/images/google_PNG.png";
import logo2 from "../../assets/images/gemini.png";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PressableBounceWrapper from "@/components/PressableBounceWrapper";
import Search from "../Search";

const Card = ({ image, text }: { image: string; text: string }) => {
  return (
    <PressableBounceWrapper>
      <View className="w-[100%] h-[300px]  flex justify-center items-center border-b border-[#323438] mt-5">
        <Image
          source={{
            uri: image,
          }}
          style={{ width: "95%", height: "70%" }}
          className="rounded-3xl"
        />
        <Text className="text-white text-2xl mt-2 w-[90%]">{text}</Text>
      </View>
    </PressableBounceWrapper>
  );
};
const SearchBar = ({ router }: { router: Router }) => {
  return (
    <PressableBounceWrapper
      onPress={() => router.push({ pathname: "/Search" })}
    >
      <View className="w-[100%] h-24 flex flex-row items-center justify-center mt-12 ">
        <View className="w-[95%] h-[100%] bg-[#2F3133] rounded-full  flex-row items-center justify-between px-8">
          <View className="flex flex-row items-center">
            <AntDesign
              name="search1"
              size={23}
              color="#989EA1"
              className="mr-4"
            />
            <Text className="text-[#989EA1] text-2xl ">Search</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons
              name="microphone"
              size={30}
              color="#FDFEFE"
              className="mr-10"
            />
            <MaterialCommunityIcons
              name="google-lens"
              size={30}
              color="#FDFEFE"
            />
          </View>
        </View>
      </View>
    </PressableBounceWrapper>
  );
};

const Widgets = () => {
  return (
    <View className="w-[100%] h-20 mt-5 flex flex-row items-center justify-around px-2">
      <View className="w-[20%] h-[100%] bg-[#4D4531] rounded-full flex justify-center items-center">
        <MaterialCommunityIcons
          name="image-search-outline"
          size={24}
          color="#F4D16D"
        />
      </View>

      <View className="w-[20%] h-[100%] bg-[#363F4E] rounded-full flex justify-center items-center">
        <MaterialIcons name="translate" size={24} color="#88B2F5" />
      </View>
      <View className="w-[20%] h-[100%] bg-[#33423B] rounded-full flex justify-center items-center">
        <MaterialCommunityIcons
          name="school-outline"
          size={24}
          color="#D0E5D8"
        />
      </View>
      <View className="w-[20%] h-[100%] bg-[#493034] rounded-full flex justify-center items-center">
        <MaterialCommunityIcons
          name="music-note-outline"
          size={24}
          color="#F28B83"
        />
      </View>
    </View>
  );
};

const Feed = () => {
  return (
    <>
      <Card
        image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/394100/394120.3.jpg"
        text="Is it too late for Virat Kohli to fix his weakness outside off stump?"
      />
      <Card
        image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/389700/389792.6.jpg"
        text="Shastri wants Rohit and Kohli to return to domestic cricket to rediscover form"
      />
      <Card
        image="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/640x427/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25821478/DSCF4454_Enhanced_NR.jpg"
        text="LG’s StanbyME sequel adds a carrying strap to the portable TV"
      />
    </>
  );
};
const Navbar = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-16 mx-5">
      <PressableBounceWrapper>
        <Ionicons name="flask" size={30} color="#A8C7FA" />
      </PressableBounceWrapper>
      <View className="w-44 h-14 bg-[#2F3133] rounded-xl flex flex-row items-center  px-2 mt-2">
        <View className="h-[80%] w-[70%] bg-black rounded-xl px-2 flex flex-row items-center">
          <Image source={logo} style={{ width: 30, height: 30 }} />
          <Text
            className="text-white text-sm ml-1"
            style={{ fontFamily: "OpenSans_400Regular" }}
          >
            Search
          </Text>
        </View>
        <Image
          source={logo2}
          style={{ width: 20, height: 20, marginLeft: 12 }}
        />
      </View>
      <PressableBounceWrapper>
        <View className="flex justify-center items-center w-11 h-11 bg-[#79929E] rounded-full">
          <Text className="text-white text-xl">A</Text>
        </View>
      </PressableBounceWrapper>
    </View>
  );
};

const Heading = () => {
  return (
    <View className=" w-[100%] flex flex-row items-center justify-center mt-12 ">
      <Text
        className="text-white text-5xl"
        style={{ fontFamily: "Roboto Mono" }}
      >
        Google
      </Text>
    </View>
  );
};
const Divider = () => {
  return <View className="h-1 border-b border-[#323438] mt-5" />;
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView className={"flex-1 bg-[#1F2125]"}>
      <Navbar />
      <Heading />
      <SearchBar router={router} />
      <Widgets />
      <Divider />
      <Feed />
    </ScrollView>
  );
}
