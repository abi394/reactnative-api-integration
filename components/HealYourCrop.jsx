import Icon from '@react-native-vector-icons/fontawesome6';
import React, { Component } from 'react';
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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageDetails from './ImageDetails';

export default class HealYourCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null,
      isModalVisible: false,
    };
  }

  openCamera = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        this.setState({ isModalVisible: false, imageUri: response.assets[0].uri });
      }
    });
  };

  openGallery = () => {
    const options = { mediaType: 'photo', quality: 1 };
    launchImageLibrary(options, (response) => {
      if (response.assets) {
        this.setState({ isModalVisible: false, imageUri: response.assets[0].uri });
      }
    });
  };

  setModal = () => {
    this.setState({ isModalVisible: true });
  };

  render() {
    const { navigation } = this.props;
    const { imageUri, isModalVisible } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {!imageUri ? (
          <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/take_photo.png')} style={styles.image} />
                <Text style={styles.text}>Take a picture</Text>
              </View>
              <View style={styles.iconView}>
                <Icon name="angle-right" size={35} color="grey" iconStyle="solid" style={styles.Icon} />
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/diagnosis_new.png')} style={[styles.image]} />
                <Text style={styles.text}>see Diagnosis</Text>
              </View>
              <View style={styles.iconView}>
                <Icon name="angle-right" size={35} color="grey" iconStyle="solid" style={styles.Icon} />
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/medicine_new.png')} style={styles.image} />
                <Text style={styles.text}>Get Medicine</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this.setModal}>
                <Text style={styles.buttonText}>Take a Picture</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ImageDetails
            props={imageUri}
            navigation={navigation}
            setImageUri={(uri) => this.setState({ imageUri: uri })}
            SetIsModalVisible={(visible) => this.setState({ isModalVisible: visible })}
          />
        )}
        <Modal
          transparent={true}
          onRequestClose={() => this.setState({ isModalVisible: false })}
          visible={isModalVisible}
          animationType="slide"
        >
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 200, width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                  <TouchableOpacity
                    style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                    onPress={this.openCamera}
                  >
                    <View style={{ padding: 10, borderRadius: 100, borderColor: '#a1e58f', borderWidth: 2 }}>
                      <Icon name="camera" size={40} color="grey" iconStyle="solid" style={{ color: '#a1e58f' }} />
                    </View>

                    <Text style={{ color: 'grey' }}>Take photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                    onPress={this.openGallery}
                  >
                    <View style={{ padding: 10, borderRadius: 100, borderColor: '#a1e58f', borderWidth: 2 }}>
                      <Icon name="images" size={40} color="grey" iconStyle="solid" style={{ color: '#a1e58f' }} />
                    </View>

                    <Text style={{ fontSize: 14, color: 'grey' }}>Choose from gallery</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ isModalVisible: false })}
                    style={{
                      backgroundColor: 'lightgrey',
                      width: 100,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      borderRadius: 10,
                    }}
                  >
                    <Text style={{ textAlign: 'center' }}>cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2F2F2',
    height: 200,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    height: 60,
    width: 60,
    marginBottom: 2,
  },
  iconView: {
    width: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    width: 25,
    textAlign: 'center',
  },
  text: {
    color: 'grey',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: '#1c48bd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
