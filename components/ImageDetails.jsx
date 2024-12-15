import { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { reporter } from "../metro.config";

export default function ImageDetails({ props,navigation }) {
    useEffect(() => {
        console.log(navigation,896)
        async function fetchData() {
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
                console.log("Error:", response.status, response.statusText)
            } else {
                const data = await response.json()
                console.log(data)
                navigation.navigate('diagnosisDetails');
            }

        }
        fetchData()
    }, [])
    const createFormData = () => {
        const formData = new FormData();
        formData.append("image", props); // Append image file
        formData.append("application_used_image_gallery", "false");
        return formData;
    };
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>

            <Image source={{ uri: props }} style={{ width: "100%", flex: 1 }} resizeMode="contain" />
            <View style={{ width:"100%",height:"100%", position: "absolute", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={75} color="green" />
            </View>


            {/* <View style={{ flex: 1, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>

            </View> */}
        </View>


    )
}