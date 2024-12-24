import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { reporter } from "../metro.config";
import Icon from "@react-native-vector-icons/fontawesome6";

export default function ImageDetails({ props, navigation, setImageUri }) {
    const [loading, setLoading] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)
    const [errorData, setErrorData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(
                    "https://stoplight.io/mocks/plantix/api-reference/382663/v2/image_analysis",
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer 123456",
                        },
                        body: createFormData(),
                    }
                )
                if (!response.ok) {

                    throw new Error(`${response.status}`);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, 2000));


                    const data = await response.json()

                    if (data?.crop_health != "unknown") {
                        setErrorData(data)
                        // console.log(errorData,123456)
                        setDisplayModal(true)
                    } else {

                        setLoading(false)
                        setImageUri(null)
                        navigation.navigate('diagnosis');
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

    // useEffect(() => {
    //     console.log(errorData, "Updated Error Data");
    // }, [errorData]);


    const createFormData = () => {
        const formData = new FormData();
        formData.append("image", props);
        formData.append("application_used_image_gallery", "true");
        return formData;
    };

    function openCamera() {
        console.log(456)
        setImageUri(null)
    }
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>

            <Image source={{ uri: props }} style={{ width: "100%", flex: 2 }} resizeMode="contain" />
            <View style={{ width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={75} color="green" />
            </View>

            {displayModal && <View style={{ flex: 1, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <Text style={{ fontSize: 28, paddingHorizontal: 20, marginVertical: 10 }}>
                    data deteceted
                </Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10, maxHeight: 70 }}>iidos df hh9ds9d 99shsbb sishffh fowfowhfuiwo f wwhhfuhoefwnhcnkshco
                    jfvjdbvbeihvuvosjoviu viuhvuhviuhvis hiuhudhviuhviuviuush viuh visuv hsuv h
                    dhf uhovsjivsjos gshvo udgchdiuvhdiuhvi shviu hoa hfo efwhouf hwouf hwuf howowjeo iehifie
                    iidos df hh9ds9d 99shsbb sishffh fowfowhfuiwo f wwhhfuhoefwnhcnkshco
                    jfvjdbvbeihvuvosjoviu viuhvuhviuhvis hiuhudhviuhviuviuush viuh visuv hsuv h
                    dhf uhovsjivsjos gshvo udgchdiuvhdiuhvi shviu hoa hfo efwhouf hwouf hwuf howowjeo iehifie
                </Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10 }}>Distance:good</Text>
                <Text style={{ paddingHorizontal: 20, marginBottom: 10 }}>focus:good</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={openCamera}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon name="camera" size={20} color="white" iconStyle="solid" />
                            <Text style={styles.buttonText}>New Picture</Text>
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