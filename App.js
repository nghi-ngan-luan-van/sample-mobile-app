import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/home";
import CameraDetail from "./src/screens/CameraDetail";
import SignIn from './src/screens/authentication/SignIn';

import CameraAddingScreen from './src/screens/cameraAdding/CameraAddingScreen';

export default class App extends Component {
    constructor(props){
        super(props)
        this.isLoggedin  = this.props.isLoggedin;
    }

    renderMain(){
        return(
            <AppContainer/>
        );
    }

    renderAuthen(){

    }

    render() {
        if(this.isLoggedin)
            this.renderMain();
        else this.renderAuthen();

    }
}

const AppContainer = createStackNavigator(StackNavigator);

const StackNavigator = (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="Details"
            component={CameraDetail}
        />
    </Stack.Navigator>
);

const AuthenContainer = createStackNavigator(AuthenNavigator);

const AuthenNavigator = (
    <Stack.Navigator>
        <Stack.Screen
            name="SignIn"
            component={SignIn}
        />
        <Stack.Screen
            name="Details"
            component={CameraDetail}
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
