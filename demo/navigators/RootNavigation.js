import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/home';
import Navigation from '../../src/components/navigation';
// import NavigationButton from '../../src/components/navigation/NavigationButton';

const RootNavigation = () => (
    <Navigation
        screen={HomeScreen}
        options={{
            title: 'Demo App'
        }}
        params={{ hello: 'world' }}
    />
);

export { RootNavigation };
