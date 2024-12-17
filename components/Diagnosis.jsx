import Icon from "@react-native-vector-icons/fontawesome6"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Diagnosis({navigation}) {

    const navigate=()=>{
        navigation.navigate("detailedDiagnosis")
    }

    return (
        <ScrollView style={{ padding: 15 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Confirm a diagnosis</Text>
            <View style={{ backgroundColor: "#e0eaf3", flexDirection: "row", paddingHorizontal: 7, paddingVertical: 14, borderRadius: 10, gap: 10, justifyContent: "center", marginTop: 15 }}>
                <Icon name="circle-info" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                <Text style={{ flex: 1, fontFamily: "san-sheriff" }}>
                    Please Check if any of the below diseases match the damage on your crop
                </Text>
            </View>
            <View style={{ marginTop: 20, borderWidth: 1, borderColor: "grey", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10,paddingBottom:25 }}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                    Bacteria sport
                </Text>
                <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
                    <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Symptoms</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}>
                    <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                    <Text style={{ flex: 1 }}>Small dark spots with a yellow halo on leaves and fruits</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}>
                    <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                    <Text style={{ flex: 1 }}>Small dark spots with a yellow halo on leaves and fruits</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, borderRadius: 20, overflow: "hidden", marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                            style={{ flex: 1, height: 225, }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
                        <Image
                            source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                            style={{ flex: 1, height: 110 }}
                            resizeMode="cover"
                        />
                        <Image
                            source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                            style={{ flex: 1, height: 110 }}
                            resizeMode="cover"
                        />

                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={navigate} >
                        <Text style={styles.buttonText}>See diagnosis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    button: {
        width: "90%",
        backgroundColor: '#1c48bd',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        alignItems: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    }
})