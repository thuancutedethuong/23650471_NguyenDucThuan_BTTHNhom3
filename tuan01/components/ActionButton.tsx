import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ActionButton() {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
    };

    return (
        <View style={styles.container}>
            <Pressable
                disabled={saved}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                onPress={handleSave}
                accessibilityRole="button"
                accessibilityLabel={saved ? "Hồ sơ đã được lưu" : "Lưu hồ sơ sinh viên"}
                accessibilityHint={saved ? undefined : "Nhấn để lưu thông tin hồ sơ hiện tại"}
                accessibilityState={{ disabled: saved }}
                style={({ pressed }) => [
                    styles.button,
                    pressed && !saved && styles.buttonPressed,
                    saved && styles.buttonDisabled,
                ]}
            >
                {({ pressed }) => (
                    <Text style={[styles.buttonText, saved && styles.buttonTextDisabled]}>
                        {saved ? "ĐÃ LƯU" : pressed ? "ĐANG NHẤN..." : "LƯU HỒ SƠ"}
                    </Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 16,
    },
    button: {
        backgroundColor: "#1d7fdb",
        minHeight: 48,
        minWidth: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "transparent",
    },
    buttonPressed: {
        backgroundColor: "#155a9c",
        borderColor: "#0d3d6b",
        paddingVertical: 10,
    },
    buttonDisabled: {
        backgroundColor: "#d6d6d6",
        borderColor: "transparent",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Times New Roman",
    },
    buttonTextDisabled: {
        color: "#8c8c8c",
    },
});