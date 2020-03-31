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
import { Icons } from '../../icons';
const { width: screenWidth } = Dimensions.get('window');

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
           <View style={{ flex: 1 }}>
               <Button title="Go to About"
                       onPress={() => this.props.navigation.push('Details')}
               />
            </View>
        );
    }
    }

const styles = StyleSheet.create({

    childrenStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: '#fff',
    },
    highlight: {
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowFull: {
    },
    item: {
        width: screenWidth / 2 - 30,
        height: screenWidth / 2 - 30,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10
    },
    itemFull: {
        width: screenWidth - 40,
        height: screenWidth / 2 - 30,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    itemFullNoneHeight: {
        width: screenWidth - 40,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    title: {
        color: '#222222',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    center: {
        justifyContent: 'center',
        flex: 1,
    },
    rowMargin: {
        alignItems: 'center'
    },
    marginTop: {
        marginTop: 10
    }
});
