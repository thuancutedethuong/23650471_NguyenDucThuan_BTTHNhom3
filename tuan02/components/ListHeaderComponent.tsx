import { StyleSheet, View, Text, TextInput } from "react-native";
import { Course } from "../src/data/courses";

interface ListHeaderComponentProps {
  query: string;
  setQuery: (value: string) => void;
  filteredCourses: Course[];
}

export default function ListHeaderComponent({
  query,
  setQuery,
  filteredCourses,
}: ListHeaderComponentProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.screenTitle}>
        Course Catalog
      </Text>

      <Text style={styles.subtitle}>
        Khám phá các khóa học đang mở
      </Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Tìm theo tên, giảng viên hoặc danh mục"
        placeholderTextColor="#8A8F98"
        returnKeyType="search"
        style={styles.searchInput}
      />

      <Text style={styles.resultText}>
        Tìm thấy {filteredCourses.length} khóa học
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#F8FAFC",
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 16,
  },

  searchInput: {
    height: 50,
    width: "100%",
    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,

    paddingHorizontal: 16,

    fontSize: 15,
    color: "#111827",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 2,
  },

  resultText: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
  },
});
