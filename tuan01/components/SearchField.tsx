import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

export default function SearchField() {
    const [keyword, setKeyword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tìm kiếm thông tin..."
                placeholderTextColor="#8c8c8c"
                value={keyword}
                onChangeText={setKeyword}
            />

            {keyword.length > 0 && (
                <Pressable
                    onPress={() => setKeyword("")}
                    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    accessibilityRole="button"
                    accessibilityLabel="Xóa nội dung tìm kiếm"
                    accessibilityHint="Nhấn để xóa toàn bộ chữ đã nhập trong ô tìm kiếm"
                    style={({ pressed }) => [
                        styles.clearButton,
                        pressed && styles.clearButtonPressed,
                    ]}
                >
                    <Text style={styles.clearIcon}>✕</Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        borderWidth: 1,
        borderColor: "#d0d0d0",
        borderRadius: 8,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 12,
        marginVertical: 10,
        alignSelf: "center"
    },
    input: {
        flex: 1,
        height: 48,
        fontSize: 14,
    },
    clearButton: {
        minWidth: 48,
        minHeight: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
    },
    clearButtonPressed: {
        backgroundColor: "#e0e0e0",
        borderWidth: 1,
        borderColor: "#bbbbbb",
    },
    clearIcon: {
        fontSize: 16,
        color: "#555555",
        fontWeight: "bold",
    },
});