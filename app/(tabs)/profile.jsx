import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { images } from "../../constants";


/////////////////////////////////////////////////////////////////
import { useGlobalContext } from "../../context/GlobalProvider"; 
import { useNavigation } from "@react-navigation/native";
/////////////////////////////////////////////////////////////////

// // Sample user data
// const user = {
//   profilePicture: images.profile,
//   name: "Sapumal Kumara",
//   id: "12345678",
// };

const books = [
  {
    title: "Pathima",
    author: "Kumara Slimawan",
    rating: 5,
    total: 7,
    image: "https://example.com/pathima.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Doni Thama Loke",
    author: "Kumara Slimawan",
    rating: 5,
    total: 7,
    image: "https://example.com/doni_thama_loke.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Lunar Storm",
    author: "Kumara Slimawan",
    rating: 5,
    total: 7,
    image: "https://example.com/lunar_storm.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Lunar Storm",
    author: "Kumara Slimawan",
    rating: 5,
    total: 7,
    image: "https://example.com/lunar_storm.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Profile = () => {

  ////////////////////////////////////////////////////////////////////////
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const { user, setUser } = useGlobalContext();
  ////////////////////////////////////////////////////////////////////////


  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isProgressVisible, setIsProgressVisible] = useState(false);
  const [isMyBooksVisible, setIsMyBooksVisible] = useState(false);
  const [isPublishBookVisible, setIsPublishBookVisible] = useState(false); // State for Publish Book visibility
  const [selectedGender, setSelectedGender] = useState("Male"); // State for gender selection

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate('signin');
  }

  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
    setIsProgressVisible(false); // Ensure Progress view is hidden
    setIsMyBooksVisible(false); // Ensure My Books view is hidden
    setIsPublishBookVisible(false); // Ensure Publish Book view is hidden
  };

  const toggleProgress = () => {
    setIsProgressVisible(!isProgressVisible);
    setIsSettingsVisible(false); // Ensure Settings view is hidden
    setIsMyBooksVisible(false); // Ensure My Books view is hidden
    setIsPublishBookVisible(false); // Ensure Publish Book view is hidden
  };

  const toggleMyBooks = () => {
    setIsMyBooksVisible(!isMyBooksVisible);
    setIsSettingsVisible(false); // Ensure Settings view is hidden
    setIsProgressVisible(false); // Ensure Progress view is hidden
    setIsPublishBookVisible(false); // Ensure Publish Book view is hidden
  };

  const togglePublishBook = () => {
    setIsPublishBookVisible(!isPublishBookVisible);
    setIsSettingsVisible(false); // Ensure Settings view is hidden
    setIsProgressVisible(false); // Ensure Progress view is hidden
    setIsMyBooksVisible(false); // Ensure My Books view is hidden
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View className="flex-row justify-between items-center mb-6">
          {isSettingsVisible ||
          isProgressVisible ||
          isMyBooksVisible ||
          isPublishBookVisible ? (
            <TouchableOpacity
              className="p-2"
              onPress={() => {
                setIsSettingsVisible(false);
                setIsProgressVisible(false);
                setIsMyBooksVisible(false);
                setIsPublishBookVisible(false);
              }}
            >
              <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity className="p-2" onPress={toggleSettings}>
              <Icon name="bars" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        {isSettingsVisible ? (
          <View className="space-y-4">
            <View className="items-center mb-6">
              <Image
                source={images.profile}
                className="w-24 h-24 rounded-full mb-2"
              />
              <Text className="text-xl font-semibold">{user.name}</Text>
              <Text className="text-gray-500">#{user.id}</Text>
            </View>

            <View>
              <Text className="font-semibold mb-2">Password</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                secureTextEntry
                placeholder="Enter password"
              />
            </View>

            <View>
              <Text className="font-semibold mb-2">Re-Enter Password</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                secureTextEntry
                placeholder="Re-enter password"
              />
            </View>

            <View>
              <Text className="font-semibold mb-2">Gender</Text>
              <View className="flex-row items-center space-x-4">
                <TouchableOpacity
                  className={`flex-1 bg-gray-200 rounded-md p-3 items-center ${
                    selectedGender === "Male" ? "bg-teal-500" : "bg-gray-200"
                  }`}
                  onPress={() => setSelectedGender("Male")}
                >
                  <Text
                    className={`${
                      selectedGender === "Male" ? "text-white" : "text-black"
                    }`}
                  >
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex-1 bg-gray-200 rounded-md p-3 items-center ${
                    selectedGender === "Female" ? "bg-teal-500" : "bg-gray-200"
                  }`}
                  onPress={() => setSelectedGender("Female")}
                >
                  <Text
                    className={`${
                      selectedGender === "Female" ? "text-white" : "text-black"
                    }`}
                  >
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">Email Address</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                placeholder="Enter email address"
              />
            </View>

            <View>
              <Text className="font-semibold mb-2">Contact Number</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                placeholder="Enter contact number"
              />
            </View>

            <TouchableOpacity className="bg-teal-500 rounded-md p-3 items-center">
              <Text className="text-white font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        ) : isProgressVisible ? (
          <View>
            <Text className="text-xl font-semibold mb-4">Progress</Text>
            <View className="p-4 bg-white rounded-lg shadow mb-6">
              <View className="flex-row items-center mb-4">
                <Image
                  source={{ uri: "https://example.com/path-to-image.jpg" }}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <View>
                  <Text className="text-lg font-semibold">Lunar Storm</Text>
                  <Text className="text-gray-500">By Kumara Slimawan</Text>
                  <Text className="text-gray-500">5/7</Text>
                </View>
              </View>
              <Text className="text-gray-700 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
              <View className="w-full bg-gray-200 rounded-full h-2.5">
                <View
                  className="bg-teal-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></View>
              </View>
            </View>
          </View>
        ) : isMyBooksVisible ? (
          <View>
            <Text className="text-xl font-semibold mb-4">My Books</Text>
            {books.map((book, index) => (
              <View key={index} className="flex-row items-center mb-4">
                <Image
                  source={{ uri: book.image }}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <View className="flex-1">
                  <Text className="text-lg font-semibold">{book.title}</Text>
                  <Text className="text-gray-500">By {book.author}</Text>
                  <Text className="text-gray-500">
                    {book.rating}/{book.total}
                  </Text>
                  <Text className="text-gray-700">{book.description}</Text>
                </View>
                <TouchableOpacity className="p-2">
                  <Icon name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : isPublishBookVisible ? (
          <View>
            <View className="items-center mb-6">
              <Image
                source={images.profile}
                className="w-24 h-24 rounded-full mb-2"
              />
              <Text className="text-xl font-semibold">{user.name}</Text>
              <Text className="text-gray-500">#{user.id}</Text>
            </View>
            <TouchableOpacity className="bg-teal-500 p-4 rounded-lg items-center mb-4">
              <Text className="text-white text-lg">Select Your E-Book</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-teal-500 p-4 rounded-lg items-center mb-4">
              <Text className="text-white text-lg">Select E-Book Cover</Text>
            </TouchableOpacity>
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
                <Text className="text-white font-semibold">Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <View className="items-center mb-6">
              <Image
                source={images.profile}
                className="w-24 h-24 rounded-full mb-2"
              />
              <Text className="text-xl font-semibold">{user.name}</Text>
              <Text className="text-gray-500">#{user.id}</Text>
            </View>
            <TouchableOpacity
              onPress={togglePublishBook}
              className="bg-teal-500 p-4 rounded-lg items-center mb-4"
            >
              <Text className="text-white text-lg">
                Publish Your books for free
              </Text>
            </TouchableOpacity>
            <View className="space-y-4">
              <TouchableOpacity
                onPress={toggleMyBooks}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <Icon name="book" size={24} color="black" />
                <Text className="ml-4 text-lg">My Books</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleProgress}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <Icon name="line-chart" size={24} color="black" />
                <Text className="ml-4 text-lg">Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleSettings}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <Icon name="cog" size={24} color="black" />
                <Text className="ml-4 text-lg">Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                className="flex-row items-center p-4"
              >
                <Icon name="user" size={24} color="black" />
                <Text className="ml-6 text-lg text-red-600">Logout</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
