// Home.js
import React, { useState} from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Modal,
  Button,
} from "react-native";
import EmptyState from "../../components/EmptyState";
import Header from "../../components/home/Header";
import Categories from "../../components/home/Categories";
import LatestSection from "../../components/home/LatestSection";
import ExploreItem from "../../components/home/ExploreItem";
import usefetchBooks from '../../middleware/fetchBooks';  // Fetch Book Data from Middleware


const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [pdfUri, setPdfUri] = useState(null);
  
  const onRefresh = async () => {
    setRefreshing(true);
    // Add your refresh logic here
    setRefreshing(false);
  };

  const openPdf = (uri) => {
    setPdfUri(uri);
  };

  const closePdf = () => {
    setPdfUri(null);
  };

/////////////////////////////////////////

const {libraryBooks} = usefetchBooks();  // Get books Array

/////////////////////////////////////////

  return (
    <SafeAreaView className="bg-white p-2 h-full">
      <FlatList
        data={libraryBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExploreItem book={item} openPdf={openPdf} />}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6">
            <Header />
            <Categories />
            <LatestSection openPdf={openPdf} />
            <View>
              <Text className="text-lg text-black font-regular mb-3">
                Explore
              </Text>
              <Text className="text-sm text-gray-500 mb-4">
                Our store has more than 390 books
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Books Found"
            subtitle="Be the first one to upload a book"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <Modal visible={!!pdfUri} animationType="slide" onRequestClose={closePdf}>
        <Button title="Close" onPress={closePdf} />
        {pdfUri && <PdfReader uri={pdfUri} />}
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
