import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import GetStarted from "../components/GetStart/GetStart";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <GetStarted/>
    </View>
  );
}
