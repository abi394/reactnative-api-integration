import { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export default function CameraUi() {

    const [imageUri, setImageUri] = useState(null);


    const openCamera = () => {
        const options = {
            mediaType: 'photo', // or 'video' or 'mixed'
            includeBase64: false, // Include base64 representation of the image
            quality: 1, // Image quality (0 to 1)
          };
        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };


    const openGallery = () => {
        const options = { mediaType: 'photo', quality: 1 };
        launchImageLibrary(options, response => {
            if (response.assets) {
                setImageUri(response.assets[0].uri);
            }
        });
    };


    return (
        <View style={styles.container}>
            <Button title="Pick Image from Gallery" onPress={ openCamera} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });