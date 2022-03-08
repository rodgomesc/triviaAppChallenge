import React from "react";
import { Text, StyleSheet, ViewStyle, StyleProp } from "react-native";

const styles = StyleSheet.create({
  body: {
    fontSize: 26,
    width: 300,
    textAlign: "center",
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Body: React.FC<Props> = ({ children, style }) => {
  return <Text style={[styles.body, style]}>{children}</Text>;
};

export default Body;
