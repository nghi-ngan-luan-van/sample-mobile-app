/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import NavBarComponent from './src/components/NavBar/nav-bar';
import MainScreen from './src/screens/MainScreen';
import CameraAddingScreen from './src/screens/cameraAdding/CameraAddingScreen';
const App: () => React$Node = () => {
  return (
    <>
      <CameraAddingScreen />
    </>
  );
};


export default App;
