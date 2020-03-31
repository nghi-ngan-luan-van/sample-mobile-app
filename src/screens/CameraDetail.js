import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Button

} from 'react-native';

//example
// import MomoButtonDemo from '../../../src/components/button/ButtonDemo';
const { width: screenWidth } = Dimensions.get('window');

export default class CameraDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button title="Go to About"
                        onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}
