import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { reporter } from "../metro.config";
import Icon from "@react-native-vector-icons/fontawesome6";


export default function ImageDetails({ props, navigation, setImageUri, SetIsModalVisible }) {
    const [loading, setLoading] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)
    const [errorData, setErrorData] = useState(null)
    useEffect(() => {
        console.log(process.env.test_key,123456897456)
        console.log(props, "img")
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(
                   process.env.mock_api,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            // Authorization: "Bearer 1a863bfbc6beae98ad80afc441017cb4a181c8fc",
                            Authorization: `Bearer ${process.env.Mock_test_key}`,
                        },
                        body: createFormData(),
                    }
                )
                if (!response.ok) {
                    console.log(response.json())
                    throw new Error(`${response.status}`);
                } else {

                    const data = await response.json()
                    console.log(data)
                   
                    console.log(errorData,"lets see")
                    if (data?.crop_health == "unknown") {
                        // console.log(errorData,123456)
                        setErrorData(data)
                        setDisplayModal(true)
                    } else {

                        setLoading(false)
                        setImageUri(null)
                        navigation.navigate('diagnosis',{
                            data:data
                        });
                    }

                }
            } catch (error) {

                setLoading(false)
                setImageUri(null)
                Alert.alert(
                    `Something Went Wrong(${error.message})`,
                    "please Try Again",
                    [
                        {
                            text: "Cancel",
                            onPress: () => {
                                setLoading(false)
                                setImageUri(null)
                            },
                            style: "cancel",
                        },
                        {
                            text: "OK", onPress: () => {
                                setLoading(false)
                                setImageUri(null)
                            }
                        },
                    ],
                    { cancelable: true }
                );
            }


        }
        fetchData()
    }, [])


    const createFormData = () => {
        const formData = new FormData();
        formData.append('image', {
            uri: props, // The local URI from the image picker
            name: 'photo.jpg', // Set a default name or get it from the picker
            type: 'image/jpeg', // Set the MIME type
        });
        formData.append("application_used_image_gallery", "false");
        console.log(formData, "formData")
        return formData;
    };

    function openCamera() {
        console.log(456)
        setImageUri(null)
        SetIsModalVisible(true)
    }

    function formatWord(word) {
        if (typeof word !== "string") {
            return "Invalid input. Please provide a valid string.";
        }
        const formattedWord = word.replace(/_/g, " "); // Replace underscores with spaces
        return `${formattedWord} detected`; // Append "detected"
    }
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>

            <Image source={{ uri: props }} style={{ width: "100%", flex: 2 }} resizeMode="contain" />
            <View style={{ width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={75} color="green" />
            </View>

            {displayModal && <View style={{ flex: 1, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30,padding:5 }}>
                <Text style={{ fontSize: 28, paddingHorizontal: 20, marginVertical: 10,fontWeight:"bold" }}>
                    {formatWord(errorData?.errors[0]?.type)}
                </Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10, maxHeight: 70,fontSize:15,color:"grey"}}>
                {errorData?.errors[0]?.message}
                </Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10,fontWeight:"bold" }}>Distance:{errorData?.image_feedback?.distance}</Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10 ,fontWeight:"bold"}}>focus:{errorData?.image_feedback?.focus}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={openCamera}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon name="camera" size={20} color="white" iconStyle="solid" />
                            <Text style={styles.buttonText}>Take New Picture</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>


    )
}


const styles = StyleSheet.create({


    buttonContainer: {

        justifyContent: 'center',
        alignItems: 'center',
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
        marginLeft: 8

    }
})