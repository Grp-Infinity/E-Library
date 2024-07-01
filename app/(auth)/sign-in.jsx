import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../../context/GlobalProvider"; 
import useFetchUsers from "../../middleware/fetchUsers"; // Import Middleware

export default function SignIn() {
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
cl
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { users } = useFetchUsers();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('(tabs)');
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    const isUser = users.find(user => user.email === email && user.password === password);
    if (isUser) {
      setUser(isUser);
      setIsLoggedIn(true);
      navigation.navigate('(tabs)');
    } else {
      Alert.alert('Authentication Failed','Invalid email or password');
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('signup');
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/BG_01.png")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sign In</Text>
        <Text style={styles.subtitleText}>
          Sign in to our e-library app and embark on your journey through the world of knowledge!
        </Text>
      </View>
      <View style={styles.loginArea}>
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
        <View style={styles.centered}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signupText}>Don't have an account? 
          <Text style={styles.link} onPress={navigateToSignUp}> Sign Up</Text>
        </Text>
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
    marginTop: 10,
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
    fontWeight: '900',
    color: '#000',
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
  loginButton: {
    backgroundColor: "#2F2F2F",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 10,
    textAlign: "center",
    color: "#000",
  },
  link: {
    color: "#3498db",
    fontSize: 16,
  },
  centered: {
    alignItems: "center",
  },
  socialLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  horizontalLine: {
    height: 1,
    width: "80%",
    backgroundColor: "black",
    marginBottom: 10,
  },
});