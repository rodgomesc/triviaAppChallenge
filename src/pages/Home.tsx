import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Heading, Body, ScreenContainer } from "../components";

const styles = StyleSheet.create({
  centerWrapper: {
    height: 300,
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Heading>Welcome to the trivia challenge!</Heading>
      <View style={styles.centerWrapper}>
        <Body>You will be presented with 10 True or False questions.</Body>
        <Body>Can you score 100%?</Body>
      </View>
      <Pressable onPress={() => navigation.navigate("Quiz")}>
        <Body>Begin</Body>
      </Pressable>
    </ScreenContainer>
  );
};

export default Home;
