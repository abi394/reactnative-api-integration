import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, Text, View } from "react-native";
import { reporter } from "../metro.config";

export default function ImageDetails({ props, navigation, setImageUri }) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try{
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
                    console.log("i am here1")
                    throw new Error(`${response.status}`);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, 4000)); 
                    const data = await response.json()
                    console.log(data)
                    setLoading(false)
                    setImageUri(null)
                    navigation.navigate('diagnosis');
                }
            }catch(error){
                console.log("i am here2")
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
                    { cancelable: true} 
                );
            }
            

        }
        fetchData()
    }, [])
    const createFormData = () => {
        const formData = new FormData();
        formData.append("image", props); 
        formData.append("application_used_image_gallery", "true");
        return formData;
    };
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>

            <Image source={{ uri: props }} style={{ width: "100%", flex: 1 }} resizeMode="contain" />
            <View style={{ width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={75} color="green" />
            </View>


            {/* <View style={{ flex: 1, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>

            </View> */}
        </View>


    )
}