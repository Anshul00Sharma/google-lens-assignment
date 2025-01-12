import { View, Text, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PressableBounceWrapper from "@/components/PressableBounceWrapper";
import { Router, useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const History = ({ text }: { text: string }) => {
  return (
    <View className="w-full h-14 flex flex-row items-center px-5 mt-5">
      <FontAwesome5
        name="clock"
        size={24}
        color="#86888A"
        className="pl-[5.2px] pr-[5px] pt-[5.2px] pb-[5px] bg-[#303236] rounded-full ml-2"
      />
      <Text className="text-[#989EA1] font-medium text-sm ml-5 ">{text}</Text>
    </View>
  );
};
const SearchBar = ({ router }: { router: Router }) => {
  return (
    <View className="w-full h-20  mt-20">
      <View className="w-[95%] h-[100%] bg-[#2F3133] rounded-full  flex-row items-center justify-between px-8 mx-auto">
        <View className="flex flex-row items-center">
          <PressableBounceWrapper onPress={() => router.back()}>
            <AntDesign
              name="left"
              size={24}
              color="#989EA1"
              className="mr-8  p-2"
            />
          </PressableBounceWrapper>

          <TextInput
            className=" text-xl text-white  w-[180px] "
            placeholder="Search or type URL"
            placeholderTextColor={"#989EA1"}
            keyboardType="default"
          />
        </View>
        <View className="flex flex-row items-center">
          <PressableBounceWrapper onPress={() => router.push("/Speak")}>
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color="#FDFEFE"
              className="mr-10"
            />
          </PressableBounceWrapper>
          <PressableBounceWrapper onPress={() => router.push("/Camera")}>
            <MaterialCommunityIcons
              name="google-lens"
              size={28}
              color="#FDFEFE"
            />
          </PressableBounceWrapper>
        </View>
      </View>
    </View>
  );
};

const SearchHistory = () => {
  return (
    <>
      <History text="Lorem ipsum dolor sit amet " />
      <History text="vvvd " />
      <History text="Lorem ipsum dolor sit amet " />
      <History text="Lorem ipsum dolor sit  " />
      <History text="Lorem ipsum dolor  " />
      <History text="Lorem ipsum dolor sit amet " />
      <History text="Lorem ipsum  " />
      <History text="Lorem ipsum dolor sit amet " />
    </>
  );
};
const SubControls = () => {
  return (
    <View className="w-full h-12  flex flex-row items-center justify-between px-5">
      <Text className="text-[#989EA1] text-sm">Recent searches</Text>
      <Text className="text-[#989EA1] text-sm">MANAGE HISTORY</Text>
    </View>
  );
};

export default function Search() {
  const router = useRouter();
  return (
    <View className={"flex-1 bg-[#1F2125]"}>
      <SearchBar router={router} />
      <SubControls />
      <SearchHistory />
    </View>
  );
}
