import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./sign-in";
import SignUpScreen from "./sign-up";

const Stack = createStackNavigator();

const AuthLayout = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </>
  );
};

export default AuthLayout;
