import { View, Text, Image, StyleSheet } from "react-native";

export default function InfoRow() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    source={{ uri: "https://ui-avatars.com/api/?name=SV&background=E8F1FB&color=1D7FDB&bold=true" }}
                    style={styles.avatar}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>Nguyễn Minh Anh</Text>
                <Text style={styles.mssv}>Mã SV: 24CNTT001</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 20,
    },
    left: {
        marginRight: 22,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    right: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Times New Roman",
    },
    mssv: {
        fontSize: 12,
        marginTop: 4,
        fontFamily: "Times New Roman",
        color: "#a3a3a3",
    },
});