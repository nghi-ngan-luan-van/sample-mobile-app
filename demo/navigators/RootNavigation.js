import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyCameras from '../../src/screens/MyCameras';
import CameraAddingScreen from '../../demo/screens/cameraAdding/CameraAddingScreen';
import CameraPlaying from '../../src/screens/camera/CameraPlaying';
import LocalAlbum from '../../src/screens/localAlbum/LocalAlbum';
import MyProfile from '../../src/screens/myProfile/MyProfile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="Local Album" component={LocalAlbumStackScreen}/>
            <Tab.Screen name="MyProfile" component={SettingsStackScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
);

export {RootNavigation};

function DetailsScreen(props) {
    let name = props && props.route && props.route.name|| '';
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Details ! {!!name && typeof name === 'string' && name}</Text>
        </View>
    );
}

function SettingsScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="MyCameras" component={MyCameras}/>
            <HomeStack.Screen
                name="CameraAdding"
                component={CameraAddingScreen}
            />
            <HomeStack.Screen
                name="CameraPlaying"
                component={CameraPlaying}
                options={{}}
            />

        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="MyProfile" component={MyProfile}/>
            <SettingsStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    );
}

const LAlbumStack = createStackNavigator();

function LocalAlbumStackScreen() {
    return (
        <LAlbumStack.Navigator>
            <LAlbumStack.Screen name="LocalAlbum" component={LocalAlbum}/>
            <LAlbumStack.Screen name="Details" component={DetailsScreen}/>
        </LAlbumStack.Navigator>
    );
}

