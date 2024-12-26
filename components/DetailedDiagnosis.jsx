import React, { Component } from "react";
import Icon from "@react-native-vector-icons/fontawesome6";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class DetailedDiagnosis extends Component {
    constructor(props) {
        super(props);
    }

    navigate = () => {
        console.log("hello");
        this.props.navigation.navigate("treatment");
    };

    render() {
        const { data } = this.props.route.params;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1, padding: 10, backgroundColor: "#f2f2f2" }}>
                        <Text style={{ fontSize: 25, fontWeight: "500" }}>{data?.common_name}</Text>
                        <Text style={{ color: "grey", fontSize: 16, fontWeight: "500" }}>{data?.hosts}</Text>
                        <ScrollView horizontal style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
                            <Image
                                source={{ uri: data.image_references[0] }}
                                style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                                resizeMode="cover"
                            />
                            <Image
                                source={{ uri: data.image_references[1] }}
                                style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                                resizeMode="cover"
                            />
                            <Image
                                source={{ uri: data.image_references[2] }}
                                style={{ width: 300, height: 200, borderRadius: 20, marginLeft: 10 }}
                                resizeMode="cover"
                            />
                        </ScrollView>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                            <Text style={{ marginTop: 10, color: "grey", width: 60 }}>3 photos</Text>
                            <Icon name="right-long" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 12 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Symptoms</Text>
                        </View>
                        {data?.symptoms_short.map((obj, index) => (
                            <View
                                key={`symptom-${index}`}
                                style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}
                            >
                                <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                                <Text style={{ flex: 1, fontSize: 15, color: "grey" }}>{obj}</Text>
                            </View>
                        ))}
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Preventive Measures</Text>
                        </View>
                        {data?.preventive_measures.map((obj, index) => (
                            <View
                                key={`preventive-${index}`}
                                style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 10 }}
                            >
                                <Icon name="circle" size={6} color="grey" iconStyle="solid" style={{ width: 10, marginTop: 6 }} />
                                <Text style={{ flex: 1, fontSize: 15, color: "grey" }}>{obj}</Text>
                            </View>
                        ))}
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Treatment Chemicals</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: 15, color: "grey", marginTop: 10 }}>{data?.treatment_chemical}</Text>
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Treatment Organics</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: 15, color: "grey", marginTop: 10 }}>{data?.treatment_organic}</Text>
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Trigger</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: 15, color: "grey", marginTop: 10 }}>{data?.trigger}</Text>
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 40, alignItems: "center" }}>
                            <Icon name="book-medical" size={18} color="grey" iconStyle="solid" style={{ width: 20, marginTop: 2 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Scientific Name</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: 15, color: "grey", marginTop: 10 }}>{data?.scientific_name}</Text>
                    </View>
                </ScrollView>
                <View
                    style={{
                        height: 150,
                        backgroundColor: "transparent",
                        backgroundColor: "white",
                        borderTopColor: "#F5F5F5",
                        borderTopWidth: 3,
                     
                    }}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.navigate}>
                            <Text style={styles.buttonText}>Confirm and See Treatment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 17, fontWeight: "500", color: "darkblue" }}>See Similar Diagnosis</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,

    },
    button: {
        width: "90%",
        backgroundColor: "#1c48bd",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
