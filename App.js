import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/home";
import CameraDetail from "./src/screens/CameraDetail";


import CameraAddingScreen from './src/screens/cameraAdding/CameraAddingScreen';

export default class App extends Component {
    render() {
        return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={CameraDetail} />
            </Stack.Navigator>
        </NavigationContainer>

    );
    }
}

const Stack = createStackNavigator();

const StackNavigator = (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen} // <----
        />
        <Stack.Screen
            name="Details"
            component={CameraDetail} // <----
        />
    </Stack.Navigator>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
