import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';


export default class HomeScreen extends Component {

    onPress = () =>{
        let navigation = this.props.navigation;
        navigation.navigate('CameraAdding')

    }

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <TouchableOpacity style={{backgroundColor:'red', width:60}}
                    onPress={this.onPress}
                >
                    <Text>nav button</Text>
                </TouchableOpacity>
            </View>
        );
    }


}
