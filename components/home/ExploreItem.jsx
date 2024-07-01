import React from "react";
import { View, Text, Image } from "react-native";

const ExploreItem = ({ book }) => {
  return (
    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
      <Image source={book.image} style={{ width: 50, height: 50, marginRight: 10 }} />
      <View>
        <Text style={{ fontSize: 16 }}>{book.title}</Text>
        <Text style={{ fontSize: 14, color: "gray" }}>{book.author}</Text>
        <Text style={{ fontSize: 14 }}>{`Rating: ${book.rating}`}</Text>
      </View>
    </View>
  );
};

export default ExploreItem;
