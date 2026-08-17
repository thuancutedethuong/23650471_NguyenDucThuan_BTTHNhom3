import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Header() {
  return (


    <View style={styles.container}>
      <Text style={styles.brand}>
        SmartCampus
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
    backgroundColor: "#2f75b5",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  brand: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});