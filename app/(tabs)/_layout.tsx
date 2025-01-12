import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Platform, Text } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
// import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarButtonFocused: {
    backgroundColor: "#394357",
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 10,
  },
});

export default function TabLayout() {
  const CustomTabBarButton = ({ children, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.tabBarButton]}>
      {children}
    </TouchableOpacity>
  );

  // Custom Tab Bar Background
  const TabBarBackground = () => (
    <View style={{ backgroundColor: "pink", borderRadius: 20 }} />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8CB4F8",
        tabBarInactiveTintColor: "#6A6E71",
        tabBarActiveBackgroundColor: "#394357",
        tabBarStyle: {
          backgroundColor: "#2F3133",
          // backgroundColor: "black",

          // height: 100,
        },

        headerShown: false,
        tabBarButton: CustomTabBarButton,
        // tabBarBackground: TabBarBackground,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${
                focused === true
                  ? "flex justify-center items-center w-20 h-10 pb-1 bg-[#394357] rounded-3xl "
                  : ""
              }`}
            >
              <Foundation
                className="mt-0.5"
                size={30}
                name="home"
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${
                focused === true
                  ? "flex justify-center items-center w-20 h-10 pb-1 bg-[#394357] rounded-3xl "
                  : ""
              }`}
            >
              <MaterialIcons
                className="mt-0.5"
                size={28}
                name="history"
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          title: "notification",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${
                focused === true
                  ? "flex justify-center items-center w-20 h-10 pb-1 bg-[#394357] rounded-3xl "
                  : ""
              }`}
            >
              <Ionicons
                className="mt-0.5"
                size={28}
                name="notifications-outline"
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Menu"
        options={{
          title: "menu",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`${
                focused === true
                  ? "flex justify-center items-center w-20 h-10 pb-1 bg-[#394357] rounded-3xl "
                  : ""
              }`}
            >
              <Ionicons
                className="mt-0.5"
                size={30}
                name="menu"
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
