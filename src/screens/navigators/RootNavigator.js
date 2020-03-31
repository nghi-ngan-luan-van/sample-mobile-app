import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/home';
import Navigation from '../../src/components/navigation';

const RootNavigation = () => (
    <Navigation
        screen={HomeScreen}
        options={{
            title: 'Demo App',
        }}
        params={{ hello: 'world' }}
    />
);

export { RootNavigation };
