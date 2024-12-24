/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from '@react-native-vector-icons/fontawesome6';
import HealYourCrop from './components/HealYourCrop';
import Diagnosis from './components/Diagnosis';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailedDiagnosis from './components/DetailedDiagnosis';
import treatment from './components/Treatment';
import Treatment from './components/Treatment';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>

      <SafeAreaView style={styles.rootstyle}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="healCropOption" component={HealYourCrop} />
            <Stack.Screen name="diagnosis" component={Diagnosis} />
            <Stack.Screen name="detailedDiagnosis" component={DetailedDiagnosis} />
            <Stack.Screen name="treatment" component={Treatment} />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10
  },
  rootstyle: {
    flex: 1,
    backgroundColor: "white"
  },

});

export default App;
