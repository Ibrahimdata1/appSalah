import { View, Text, ScrollView, StatusBar, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Award, Briefcase, Rocket } from "lucide-react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import images from "../assets/images";

export default function Index() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#0f172a");
  }, []);
  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-center items-center flex-1 px-4">
          <Image source={images.work} className="w-[130px] h-[84px]" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
