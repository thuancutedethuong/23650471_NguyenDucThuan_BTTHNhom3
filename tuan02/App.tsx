import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import { Course, courses } from './src/data/courses';
import CourseRow from './components/CourseRow';
import { useState } from 'react';

import ListHeaderComponent from './components/ListHeaderComponent';
import ListEmptyComponent from './components/ListEmptyComponent';

export default function App() {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLocaleLowerCase('vi');

  const filteredCourses = courses.filter((course) =>
    `${course.title} ${course.instructor} ${course.category}`
      .toLocaleLowerCase('vi')
      .includes(normalizedQuery)
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredCourses}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <CourseRow
            course={item}
            onPress={openCourse}
          />
        )}

        ListHeaderComponent={
          <ListHeaderComponent
            query={query}
            setQuery={setQuery}
            filteredCourses={filteredCourses}
          />
        }

        ListEmptyComponent={
          <ListEmptyComponent />
        }

        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </SafeAreaView>
  );
}

const openCourse = (course: Course) => {
  Alert.alert(
    course.title,
    `Giảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`,
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    height: 12
  }
});