import { View, Text, StyleSheet } from "react-native";

export default function InfoCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông tin sinh viên</Text>
            <Text style={styles.infoText}>Email: minhanh@sv.edu.vn</Text>
            <Text style={styles.infoText}>Lớp: CNTT-K24</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#bae1e3",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#a0c9da",
        alignSelf: "center",
        marginTop: 15
    },
    title: {
        fontSize: 16,
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        marginBottom: 6,
        color: "#1a1a1a",
    },
    infoText: {
        fontSize: 13,
        fontFamily: "Times New Roman",
        color: "#4a4a4a",
        marginTop: 4,
    },
});