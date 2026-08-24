import {
  Alert,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Student, studentSections } from './src/data/students';
import StudentRow from './component/StudentRow';
import { useState, useMemo } from 'react';

export default function App() {
  const [query, setQuery] = useState('');

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi');
    if (!normalizedQuery) {
      return studentSections;
    }

    return studentSections
      .map((section) => ({
        ...section,
        data: section.data.filter((student) =>
          `${student.fullName} ${student.studentId} ${student.className}`
            .toLocaleLowerCase('vi')
            .includes(normalizedQuery),
        ),
      }))
      .filter((section) => section.data.length > 0)
  }, [query])

  const totalStudents = filteredSections.reduce(
    (total, section) => total + section.data.length,
    0
  )

  return (
    <SafeAreaView style={styles.container}>

      <StudentDirectoryScreen
        filteredSections={filteredSections}
        query={query}
        setQuery={setQuery}
        totalStudents={totalStudents}
      />
    </SafeAreaView>
  );
}

interface StudentDirectoryScreenProps {
  filteredSections: typeof studentSections;
}

function StudentDirectoryScreen({
  filteredSections,
  query,
  setQuery,
  totalStudents,
}: StudentDirectoryScreenProps & {
  query: string;
  setQuery: (text: string) => void;
  totalStudents: number;
}) {
  return (
    <SectionList
      sections={filteredSections}
      keyExtractor={(item) => item.id}

      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.screenTitle}>
            Student Directory
          </Text>

          <Text style={styles.subtitle}>
            Danh bạ sinh viên theo khoa
          </Text>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Tìm tên, mã sinh viên hoặc lớp"
            placeholderTextColor="#8A8F98"
            returnKeyType="search"
            autoCorrect={false}
            style={styles.searchInput}
          />

          <Text style={styles.resultText}>
            Tìm thấy {totalStudents} sinh viên
          </Text>
        </View>
      }

      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Không tìm thấy sinh viên
          </Text>
          <Text style={styles.emptyText}>
            Không có sinh viên phù hợp với “{query.trim()}”.
          </Text>
        </View>
      }

      ItemSeparatorComponent={() => (
        <View style={styles.separator}></View>
      )}

      renderItem={({ item }) => (
        <StudentRow
          student={item}
          onPress={openStudent}
        />
      )}

      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {section.title}
          </Text>
        </View>
      )}
    />
  );
}

const openStudent = (student: Student) => {
  Alert.alert(
    student.fullName,
    `Mã sinh viên: ${student.studentId}
Lớp: ${student.className}
Trạng thái: ${student.status}`,
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },

  screenTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',

    marginBottom: 4,
  },

  searchInput: {
    height: 48,
    width: '100%',

    backgroundColor: '#F1F3F5',

    borderWidth: 1,
    borderColor: '#E0E3E7',
    borderRadius: 12,

    paddingHorizontal: 16,

    fontSize: 15,
    color: '#222',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',

    marginBottom: 16,
  },

  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,

    backgroundColor: '#E8F0FE',

    borderBottomWidth: 1,
    borderBottomColor: '#D5DCE8',
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },

  resultText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',

    paddingHorizontal: 16,
    paddingVertical: 10,

    backgroundColor: '#F7F8FA',
  },

  emptyContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 30,
    paddingVertical: 50,

    backgroundColor: '#F7F8FA',
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#374151',

    marginBottom: 8,

    textAlign: 'center',
  },

  emptyText: {
    fontSize: 14,
    color: '#6B7280',

    textAlign: 'center',
    lineHeight: 21,

    maxWidth: 300,
  },



  separator: {
    height: 2,

    backgroundColor: '#E5E7EB',

    marginHorizontal: 16,
  },
});