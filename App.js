import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {YellowBox} from 'react-native';

import Screens from './demo/screens';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }

    render() {
        return (<Screens/>);
    }
}

