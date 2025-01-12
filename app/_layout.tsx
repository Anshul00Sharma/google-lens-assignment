import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#1F2125" }}>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="Search"
            options={{
              headerShown: false,
              // animationDuration: 500,
              presentation: "modal",

              animationTypeForReplace: "pop",
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="Speak"
            options={{
              headerShown: false,
              animationDuration: 500,

              animationTypeForReplace: "pop",
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="Camera"
            options={{
              headerShown: false,
              animationDuration: 500,

              animationTypeForReplace: "pop",
              animation: "fade_from_bottom",
            }}
          />
          <Stack.Screen
            name="SearchImage"
            options={{
              headerShown: false,
              // animation: "fade_from_bottom",
              animationDuration: 500,

              animationTypeForReplace: "pop",
              animation: "fade_from_bottom",
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </View>
  );
}
