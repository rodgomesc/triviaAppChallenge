import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 26,
    maxWidth: 300,
    textAlign: "center",
  },
});

const Heading: React.FC = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default Heading;
