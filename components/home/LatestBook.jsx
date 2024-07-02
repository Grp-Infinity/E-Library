import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const LatestBook = ({ book, openPdf }) => {
  const handleOpenBook = () => {
    openPdf(book.pdf);
  };

  return (
    <TouchableOpacity
      onPress={handleOpenBook}
      className="flex flex-col items-center m-2"
    >
      <Image source={{ uri: book.image }} className="w-24 h-36 rounded-lg" />
      <Text className="text-sm font-bold mt-2">{book.title}</Text>
      <Text className="text-xs text-gray-500">By {book.author}</Text>
      <Text className="text-xs text-yellow-500">★ {book.rating}</Text>
    </TouchableOpacity>
  );
};

export default LatestBook;