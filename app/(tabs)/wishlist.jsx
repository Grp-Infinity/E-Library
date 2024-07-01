import { images } from "../../constants";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";

const wishlist = () => {
  // Sample user data
  const user = {
    profilePicture: images.profile,
    name: "Sapumal Kumara",
    id: "12345678",
  };
  return (
    <SafeAreaView className="mt-10">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View>
          <View className="items-center">
            <View className="items-center mt-6 mb-6 justify-between space-y-4">
              <Text className="text-3xl">Wishlist</Text>
              <Text className="text-center ">
                Request any book. We'll notify you when it's available.
              </Text>
            </View>
            <Image
              source={images.profile}
              className="w-24 h-24 rounded-full mb-2"
            />
            <Text className="text-xl font-semibold">{user.name}</Text>
            <Text className="text-gray-500">#{user.id}</Text>
          </View>

          <View className="space-y-4">
            <TextInput
              className="bg-gray-200 rounded-md p-3"
              placeholder="E-Book Full Name"
            />
            <TextInput
              className="bg-gray-200 rounded-md p-3"
              placeholder="E-Book Author Name"
            />
            <TextInput
              className="bg-gray-200 rounded-md p-3"
              placeholder="Edition of E-Book"
            />
            <TextInput
              className="bg-gray-200 rounded-md p-3"
              placeholder="Description"
            />
            <TouchableOpacity className="bg-teal-500 rounded-md p-3 items-center">
              <Text className="text-white font-semibold">Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default wishlist;
