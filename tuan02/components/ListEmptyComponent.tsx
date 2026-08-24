import { StyleSheet, View, Text } from "react-native";

export default function ListEmptyComponent() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>
        Không tìm thấy khóa học
      </Text>

      <Text style={styles.emptyText}>
        Hãy thử tìm kiếm bằng một từ khóa khác
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    margin: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },

  emptyText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
});