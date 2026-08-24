import { Pressable, StyleSheet, View, Text } from "react-native";
import { Course } from "../src/data/courses";
interface CourseRowProps{
    course: Course;
    onPress: (course: Course) => void;
}

export default function CourseRow({course, onPress}: CourseRowProps){
    return (
        <Pressable
            onPress = {()=> onPress(course)}
            style = {({pressed}) => [
                styles.courseCard,
                pressed && styles.courseCardPressed,
            ]}
        >
            <Text style = {styles.courseTitle}>{course.title}</Text>
            <Text style = {styles.instructor}>
                Giảng viên: {course.instructor}
            </Text>

            <View style = {styles.courseFooter}>
                <Text style={styles.category}>{course.category}</Text>
                <Text style={styles.studentCount}>
                    {course.students} sinh viên
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    courseCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,

        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    courseCardPressed: {
        backgroundColor: "#F3F4F6",
        transform: [{ scale: 0.98 }],
    },

    courseTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
    },

    instructor: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 14,
    },

    courseFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#E5E7EB",
    },

    category: {
        fontSize: 13,
        fontWeight: "600",
        color: "#2563EB",
        backgroundColor: "#EFF6FF",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },

    studentCount: {
        fontSize: 13,
        color: "#6B7280",
        fontWeight: "500",
    },
});