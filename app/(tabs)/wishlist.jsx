//Wishlist Ravishka
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseInit"; // Update the path as per your project structure
import { useGlobalContext } from "../../context/GlobalProvider"; 

const Wishlist = () => {
  const { user} = useGlobalContext();
  // Sample user data
  // const user = {
  //   name: "Sapumal Kumara",
  //   id: "12345678",
  // };

  const [fullName, setFullName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [edition, setEdition] = useState("");
  const [description, setDescription] = useState("");

  const handleRequest = async () => {
    if (!fullName || !authorName || !edition || !description) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "wishlist"), {
        fullName: fullName,
        authorName: authorName,
        edition: edition,
        description: description,
        userId: user.id, // Include user ID for reference
      });
      Alert.alert("Success", "Request submitted successfully.");
      // Clear form fields after submission if needed
      setFullName("");
      setAuthorName("");
      setEdition("");
      setDescription("");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View>
          <View style={{ alignItems: "center", marginTop: 24 }}>
            <Text style={{ fontSize: 24, marginBottom: 8 }}>Wishlist</Text>
            <Text style={{ textAlign: "center", marginBottom: 16 }}>
              Request any book. We'll notify you when it's available.
            </Text>
            <Image
              source={require("../../assets/images/profile.png")} // Update with your profile image source
              style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 8 }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.name}</Text>
            <Text style={{ color: "gray" }}>#{user.id}</Text>
          </View>

          <View style={{ marginTop: 24 }}>
            <TextInput
              style={{ backgroundColor: "#E5E7EB", padding: 12, borderRadius: 8, marginBottom: 12 }}
              placeholder="E-Book Full Name"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
            <TextInput
              style={{ backgroundColor: "#E5E7EB", padding: 12, borderRadius: 8, marginBottom: 12 }}
              placeholder="E-Book Author Name"
              value={authorName}
              onChangeText={(text) => setAuthorName(text)}
            />
            <TextInput
              style={{ backgroundColor: "#E5E7EB", padding: 12, borderRadius: 8, marginBottom: 12 }}
              placeholder="Edition of E-Book"
              value={edition}
              onChangeText={(text) => setEdition(text)}
            />
            <TextInput
              style={{ backgroundColor: "#E5E7EB", padding: 12, borderRadius: 8, marginBottom: 12 }}
              placeholder="Description"
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity
              style={{ backgroundColor: "#4B5563", padding: 12, borderRadius: 8, alignItems: "center" }}
              onPress={handleRequest}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlist;