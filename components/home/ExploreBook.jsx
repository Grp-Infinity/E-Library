import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import { FontAwesome } from "@expo/vector-icons";

const ExploreBook = ({ book }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openBook = async () => {
    const fileUri = FileSystem.documentDirectory + book.pdf;
    await FileSystem.downloadAsync(book.pdf, fileUri);
    navigation.navigate("PdfReader", { uri: fileUri });
  };

  return (
    <TouchableOpacity
      onPress={openBook}
      className="flex flex-row items-center m-2"
    >
      <Image source={{ uri: book.image }} className="w-16 h-24 rounded-lg" />
      <View className="flex flex-col ml-4 flex-1">
        <Text className="text-sm font-bold">{book.title}</Text>
        <Text className="text-xs text-gray-500">By {book.author}</Text>
        <Text className="text-xs text-yellow-500">★ {book.rating}</Text>
      </View>
      <TouchableOpacity onPress={toggleFavorite}>
        <FontAwesome
          name={isFavorite ? "bookmark" : "bookmark-o"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ExploreBook;
