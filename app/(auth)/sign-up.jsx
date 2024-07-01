import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebaseInit"; 

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        password: password
      });
      Alert.alert("Success", "User registered successfully.");
      navigation.navigate("index"); // Navigate to signin or any other screen
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/BG_01.png")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sign Up</Text>
        <Text style={styles.subtitleText}>Make Your Profile</Text>
      </View>
      <View style={styles.loginArea}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 150,
  },
  welcomeText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    padding: 20,
  },
  loginArea: {
    flex: 1,
    width: "100%",
    padding: 40,
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "900",
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
  },
  signupButton: {
    backgroundColor: "#2F2F2F",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
