import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";
import ExploreItem from "../../components/home/ExploreItem";
import { images } from "../../constants";

const SavedBooks = ({ book }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Fetch updated saved books data
    setRefreshing(false);
  };

  const savedBooks = [
    {
      id: 1,
      title: "Lunar Storm",
      author: "Kumara Siriwan",
      // image: images.book1,
      rating: 5.7,
    },
    {
      id: 2,
      title: "Harry Potter",
      author: "J.K. Rowling",
      // image: images.book3,
      rating: 7.7,
    },
    {
      id: 3,
      title: "Harry Potter",
      author: "J.K. Rowling",
      // image: images.book2,
      rating: 7.7,
    },
  ];

  return (
    <SafeAreaView className="bg-primary-100 p-2 h-full">
      <FlatList
        data={savedBooks}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
            <Text className="text-xl text-black font-bold text-center">
              Saved Books
            </Text>
          </View>
        )}
        renderItem={({ item }) => <ExploreItem book={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default SavedBooks;
