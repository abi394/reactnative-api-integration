import Icon from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  useColorScheme,
  View,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import ImageDetails from './ImageDetails';


export default function HealYourCrop({navigation}) {

  const [imageUri, setImageUri] = useState(null);
  const [isModalVisible, SetIsModalVisible] = useState(false);

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
        SetIsModalVisible(false)
        setImageUri(response.assets[0].uri);
      }
    });
  };


  const openGallery = () => {
    const options = { mediaType: 'photo', quality: 1 };
    launchImageLibrary(options, response => {
      if (response.assets) {
        SetIsModalVisible(false)
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const setModal = () => {

    SetIsModalVisible(true)
  }
  return (
    <View style={{ flex: 1,backgroundColor:"white" }}>
      {!imageUri ? (<View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>
          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/take_a_picture.png')} style={styles.image} />
            <Text style={styles.text}>Take a picture</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name="angle-right" size={40} color="grey" iconStyle="solid" style={styles.Icon} />
          </View>
          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/diagnosis.png')} style={[styles.image,]} />
            <Text style={styles.text}>see Diagnosis</Text>
          </View>
          <View style={styles.iconView}>
            <Icon name="angle-right" size={40} color="grey" iconStyle="solid" style={styles.Icon} />
          </View>
          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../assets/medicine.png')} style={styles.image} />
            <Text style={styles.text}>Get Medicine</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={setModal} >
            <Text style={styles.buttonText}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      </View>

      ) : (
        <ImageDetails props={imageUri} navigation={navigation}/>
      )}
      <Modal
        transparent={true}
        onRequestClose={() => SetIsModalVisible(false)}
        visible={isModalVisible}
        animationType='slide'
      
      >
        <View style={{ backgroundColor: "black", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 200, width: "90%", backgroundColor: "white", borderRadius: 10, padding: 20 }}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={openCamera}>
                  <Icon name="camera" size={60} color="grey" iconStyle="solid" style={{ width: 65, color: "green" }} />
                  <Text>Take photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={openGallery}>
                  <Icon name="images" size={60} color="grey" iconStyle="solid" style={{ width: 65, color: "green" }} />
                  <Text style={{ fontSize: 14 }}>Choose from gallery</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={() => SetIsModalVisible(false)} style={{ backgroundColor: "grey", width: 100, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                  <Text style={{ textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>

  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#F2F2F2",
    height: 200,
    borderRadius: 10,
    padding: 10
  },
  image: {
    height: 60,
    width: 60,
    marginBottom: 2
  },
  iconView: {
    width: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    width: 25,
  },
  text: {
    color: "grey"
  },
  buttonContainer: {
    flex: 1,
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

  },

});