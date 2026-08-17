import React from "react";
import {
  View,
  Text,
  StyleSheet,

} from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>SmartCampus</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#1d7fdb",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    marginTop: 16,
  },
  topBar: {
    backgroundColor: "#1d7fdb",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  brand: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  }
});