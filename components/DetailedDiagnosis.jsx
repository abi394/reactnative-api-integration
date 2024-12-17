import Icon from "@react-native-vector-icons/fontawesome6";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailedDiagnosis() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, }}>
                {/* <View style={{backgroundColor:"grey",flex:1}}></View> */}
                <View style={{flex:1, padding: 10,backgroundColor:"#f2f2f2"}}>
                <Text style={{ fontSize: 25, fontWeight: "500" }}>Baterial Spot and Speck of Tomato</Text>
                <Text style={{ color: "lightGreen", fontSize: 16, fontWeight: "500" }}>Bacteria</Text>
                <ScrollView
                    horizontal
                    style={{ flex: 1, flexDirection: "row", marginTop: 15 }}
                >
                    <Image
                        source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                        style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                        resizeMode="cover"
                    />
                    <Image
                        source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                        style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                        resizeMode="cover"
                    />
                    <Image
                        source={{ uri: "https://content.peat-cloud.com/visualsearch/__w-100-200-400-600-800-1000__/c28c8366380688797dc08e766261a86a3f6afe6e.jpg" }}
                        style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                        resizeMode="cover"
                    />
                </ScrollView>
                <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                    <Text style={{ marginTop: 10, color: "grey", width: 60 }}>
                        3 photos

                    </Text>
                    <Icon name="right-long" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 12 }} />
                </View>
                </View>
                <View style={{flex:1, padding: 10,backgroundColor:"white"}}>
                <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                    <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Symptoms</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}>
                    <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                    <Text style={{ flex: 1, fontSize: 15, color: "grey" }}>Small dark spots with a yellow halo on leaves and fruits</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}>
                    <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                    <Text style={{ flex: 1, fontSize: 15, color: "grey" }}>Small dark spots with a yellow halo on leaves and fruits</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1, fontSize: 15, color: "grey", paddingBottom: 50 }}>
                        symptoms can be seen on the foliage stem fruit of tomato initially small yellow green solutions appears on young leaves for bacterial spot while bacterial speak cause black spot with narrow yellow hello they are usually
                        more numerous on leaf margin or tips which may appear deformed antisted in several cases the support of bacterial spect may collision or overlap resulting in larger regular relations
                        bacterial solutions can enlarged from 0.25 cm to 0.5 cm and become time to brown straight which will enlarge acterial spot lesions can enlarge from 0.25 cm to 0.5 cm and become tan to brownish-red, which
                        will eventually look like shot holes when the center dries up. Bacterial spot produces similar lesion of fruits as it does on the leaves and eventually roughen, becoming brown and scabbed.
                    </Text>
                </View>
                </View>
            </ScrollView>
            <View style={{ height: 150, backgroundColor: "transparent", borderTopLeftRadius: 20, borderBottomRightRadius: 20 ,backgroundColor:"white"}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}  >
                        <Text style={styles.buttonText}>Confirm and See treatment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 17, fontWeight: "500", color: "darkblue" }}>See Similar Diagnosis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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

});