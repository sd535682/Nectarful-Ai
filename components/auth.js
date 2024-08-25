import React, { useState } from "react";
import {
  ToastAndroid,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { supabase } from "../lib/supabaseClient";
import { wp, borderRadius } from "../constants/responsive";
import { UIColors, BodyText } from "../constants/uielements";
import { useRouter } from "expo-router";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    } else {
      router.push("/(home)");
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      name: name,
      email: email,
      password: password,
    });

    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Successfully Registered", ToastAndroid.SHORT);
      if (session) {
        router.push("/(home)");
      }
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter Email"
        placeholderTextColor="lightgrey"
        autoCapitalize="none"
        style={styles.userInput}
      />
      <TextInput
        label="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Enter Password"
        placeholderTextColor="lightgrey"
        autoCapitalize="none"
        style={styles.userInput}
      />
      <Pressable
        style={styles.buttonContainer}
        disabled={loading}
        onPress={() => signInWithEmail()}
      >
        <BodyText style={{ color: UIColors.elementWhite, textAlign: "center" }}>
          Sign In
        </BodyText>
      </Pressable>
      <Pressable
        style={styles.buttonContainer}
        disabled={loading}
        onPress={() => signUpWithEmail()}
      >
        <BodyText style={{ color: UIColors.elementWhite, textAlign: "center" }}>
          Sign Up
        </BodyText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10
  },
  buttonContainer: {
    width: wp(90),
    backgroundColor: UIColors.elementDark,
    borderRadius: borderRadius,
    paddingVertical: 15,
  },
  userInput: {
    width: wp(90),
    backgroundColor: UIColors.semiWhite,
    borderRadius: borderRadius,
    padding: 10,
    fontSize: 15,
    fontFamily: "Poppins",
  },
});
