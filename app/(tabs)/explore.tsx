import { StyleSheet, Image, Platform, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View className={"flex-1 flex justify-center items-center bg-[#323438]"}>
      <Text className="text-white text-2xl">History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
