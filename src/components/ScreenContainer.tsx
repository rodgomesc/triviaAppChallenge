import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#c9c9c9",
    paddingVertical: 20,
  },
});

const ScreenContainer: React.FC = ({ children }) => (
  <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
  </>
);

export default ScreenContainer;
