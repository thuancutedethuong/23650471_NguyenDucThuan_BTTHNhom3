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
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>
            Không tìm thấy khóa học
      </Text>
      <Text style={styles.emptyText}>
            Không tìm thấy khóa học
      </Text>
    </View>
  );
}

