// LatestSection.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
// import { libraryBooks } from "../../components/sampleData";
import LatestBook from "./LatestBook";
import useFetchBooks from "../../middleware/fetchBooks";

const LatestSection = ({ openPdf }) => {
  const {libraryBooks} = useFetchBooks();

  const latestBooks = libraryBooks.slice(0, 6);

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-2">Latest</Text>
      <ScrollView horizontal>
        {latestBooks.map((book) => (
          <LatestBook key={book.id} book={book} openPdf={openPdf} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LatestSection;