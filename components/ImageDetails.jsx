import React, { Component } from "react";
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@react-native-vector-icons/fontawesome6";

export default class ImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      displayModal: false,
      errorData: null,
    };
  }

  componentDidMount() {
    console.log(process.env.test_key, 123456897456);
    console.log(this.props.props, "img");
    this.fetchData();
  }

  fetchData = async () => {
    const { setImageUri, navigation } = this.props;
    this.setState({ loading: true });

    try {
      const response = await fetch(process.env.mock_api, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.mock_test_key}`,
        },
        body: this.createFormData(),
      });

      if (!response.ok) {
        console.log(await response.json());
        throw new Error(`${response.status}`);
      } else {
        const data = await response.json();
        console.log(data);

        if (data?.crop_health === "unknown") {
          this.setState({ errorData: data, displayModal: true });
        } else {
          this.setState({ loading: false });
          setImageUri(null);
          navigation.navigate("diagnosis", { data: data });
        }
      }
    } catch (error) {
      this.setState({ loading: false });
      setImageUri(null);
      Alert.alert(
        `Something Went Wrong(${error.message})`,
        "Please Try Again",
        [
          {
            text: "Cancel",
            onPress: () => this.setState({ loading: false }),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => this.setState({ loading: false }),
          },
        ],
        { cancelable: true }
      );
    }
  };

  createFormData = () => {
    const formData = new FormData();
    formData.append("image", {
      uri: this.props.props, // The local URI from the image picker
      name: "photo.jpg", // Set a default name or get it from the picker
      type: "image/jpeg", // Set the MIME type
    });
    formData.append("application_used_image_gallery", "false");
    console.log(formData, "formData");
    return formData;
  };

  openCamera = () => {
    console.log(456);
    this.props.setImageUri(null);
    this.props.SetIsModalVisible(true);
  };

  formatWord = (word) => {
    if (typeof word !== "string") {
      return "Invalid input. Please provide a valid string.";
    }
    const formattedWord = word.replace(/_/g, " "); // Replace underscores with spaces
    return `${formattedWord} detected`; // Append "detected"
  };

  render() {
    const { props } = this.props;
    const { loading, displayModal, errorData } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Image source={{ uri: props }} style={{ width: "100%", flex: 2 }} resizeMode="contain" />
        {loading && (
          <View style={{ width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={75} color="green" />
          </View>
        )}

        {displayModal && (
          <View style={{ flex: 1, backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 5 }}>
            <Text style={{ fontSize: 28, paddingHorizontal: 20, marginVertical: 10, fontWeight: "bold" }}>
              {this.formatWord(errorData?.errors[0]?.type)}
            </Text>
            <Text style={{ paddingHorizontal: 20, marginBottom: 10, maxHeight: 70, fontSize: 15, color: "grey" }}>
              {errorData?.errors[0]?.message}
            </Text>
            <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: "bold" }}>
              Distance: {errorData?.image_feedback?.distance}
            </Text>
            <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: "bold" }}>
              Focus: {errorData?.image_feedback?.focus}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this.openCamera}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon name="camera" size={20} color="white" iconStyle="solid" />
                  <Text style={styles.buttonText}>Take New Picture</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 8,
  },
});
