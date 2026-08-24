import { Pressable, StyleSheet, Text, View } from "react-native";
import { Student } from "../src/data/students";

interface StudentRowProps {
    student: Student;
    onPress: (student: Student) => void;
}

export default function StudentRow({ student, onPress }: StudentRowProps) {
    const isActive = student.status === "Đang học";

    return (
        <Pressable
            onPress={() => onPress(student)}
            style={({ pressed }) => [
                styles.studentCard,
                pressed && styles.studentCardPressed,
            ]}
        >
            {/* Avatar */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {getInitials(student.fullName)}
                </Text>
            </View>

            {/* Thông tin sinh viên */}
            <View style={styles.studentContext}>
                <Text style={styles.studentName}>
                    {student.fullName}
                </Text>

                <Text style={styles.studentMeta}>
                    {student.studentId} · {student.className}
                </Text>
            </View>

            {/* Trạng thái */}
            <View
                style={[
                    styles.statusBadge,
                    isActive
                        ? styles.activeBadge
                        : styles.pauseBadge,
                ]}
            >
                <Text
                    style={[
                        styles.statusText,
                        isActive
                            ? styles.activeText
                            : styles.pauseText,
                    ]}
                >
                    {student.status}
                </Text>
            </View>
        </Pressable>
    );
}

function getInitials(fullName: string) {
    const words = fullName.trim().split(/\s+/);

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

const styles = StyleSheet.create({
    // Card sinh viên
    studentCard: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginHorizontal: 12,
        marginVertical: 6,

        backgroundColor: "#fff",
        borderRadius: 12,

        // Shadow cho iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Shadow cho Android
        elevation: 3,
    },

    // Khi nhấn vào card
    studentCardPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },

    // Avatar
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,

        backgroundColor: "#e3f2fd",

        alignItems: "center",
        justifyContent: "center",

        marginRight: 12,
    },

    avatarText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1976d2",
    },

    // Khu vực thông tin
    studentContext: {
        flex: 1,
        justifyContent: "center",
    },

    studentName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 4,
    },

    studentMeta: {
        fontSize: 13,
        color: "#777",
    },

    // Badge trạng thái
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginLeft: 8,
    },

    // Đang học
    activeBadge: {
        backgroundColor: "#e8f5e9",
    },

    activeText: {
        color: "#2e7d32",
    },

    // Tạm nghỉ / trạng thái khác
    pauseBadge: {
        backgroundColor: "#fff3e0",
    },

    pauseText: {
        color: "#ef6c00",
    },

    statusText: {
        fontSize: 12,
        fontWeight: "600",
    },
});