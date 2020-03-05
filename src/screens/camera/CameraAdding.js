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
    }
    onChangeTab = () => {}

    render() {
        return (
            <View>
                <Text>camera adding Screen</Text>
                <TouchableOpacity style={{backgroundColor:'red'}}
                                  onPress={this.onPress}
                >
                    <Text>Detail nav</Text>
                </TouchableOpacity>
            </View>
        );
    }


}

