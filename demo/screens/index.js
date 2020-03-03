import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { RootNavigation } from '../navigators/RootNavigator';

class Screens extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <RootNavigation />
            </View>
        );
    }
}

export default Screens;
