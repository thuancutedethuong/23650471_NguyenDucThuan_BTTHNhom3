import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Course, courses } from './src/data/courses';
import CourseRow from './components/CourseRow';
import { useState } from 'react';
import ListHeaderComponent from './components/ListHeaderComponent';


export default function App() {
  const [query, setQuery] = useState('');
  
  const normalizedQuery = query.trim().toLocaleLowerCase('vi');
 const filteredCourses = courses.filter((course) => 
    `${course.title} ${course.instructor} ${course.category}`
    .toLocaleLowerCase('vi')
    .includes(normalizedQuery)
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Tìm kiếm khóa học..."
        style = {styles.searchInput}
      ></TextInput> */}
      <ListHeaderComponent
        query={query}
        setQuery={setQuery}
        filteredCourses={filteredCourses}
      />
      <CounrseListScreen/>
    </SafeAreaView>
  );

  function CounrseListScreen(){

  return(
    <FlatList
      data = {filteredCourses}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
        <CourseRow
          course = {item}
          onPress = {openCourse}
          />
      )}
    >
    </FlatList>
  )
}
}


const openCourse = (course: Course) => {
  Alert.alert(
    course.title,
      `Giảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`,
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
