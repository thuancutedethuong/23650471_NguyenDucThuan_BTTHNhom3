import { ScrollView, Text, View, StyleSheet } from "react-native";
export default function InfoRow(){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Text>
                    Hinh avatar
                </Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>
                    Nguyen Minh Anh
                </Text>
                <Text style={styles.mssv}>
                    Ma SV: 24NCTT001
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        color: "#1d7fdb",
        backgroundColor: "#ffffff",
        padding: 20,
        
    },
    left:{
        width: "38%",
    },
    right: {
        width: "52%",
    }, 
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
        fontFamily: "Times New Roman",
    },
    mssv: {
        fontSize: 12,
        marginTop: 4,
        fontFamily: "Times New Roman",
        color: "#a3a3a3",
    }
})