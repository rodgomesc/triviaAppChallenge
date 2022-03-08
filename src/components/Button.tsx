import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#aeaeae",
    borderRadius: 8,
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Button: React.FC<Props> = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
