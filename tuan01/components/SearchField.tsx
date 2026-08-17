import { ScrollView, TextInput, View, StyleSheet } from "react-native";
export default function SearchField(){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Tim kiem thong tin..." />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignSelf: "center",
        borderWidth: 2,
        backgroundColor: "#ffffff",
    }
})