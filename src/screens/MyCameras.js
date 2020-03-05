import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

const { width } = Dimensions.get('window');

import CameraVideo from '../components/camera/CameraVideo';
const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';


export default class MyCameras extends Component {

    onPressAdd = () =>{
        let navigation = this.props.navigation;
        navigation.navigate('CameraAdding')

    }

    onPressCam = (name, source) => {
        let {navigation} = this.props;
        navigation.navigate('CameraPlaying', {
            cameraName: name,
            source: source,
        });
    }

    render() {
        let rtsp = 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa'
        let link = 'http://wmccpinetop.axiscam.net/mjpg/video.mjpg'
        return (
            <ScrollView containerStyle={styles.body}>
                <TouchableOpacity style={styles.camera} onPress={this.onPressCam('camra 01', rtsp)}>
                    <CameraVideo
                        source={rtsp}
                        name='Camera 01'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.camera}>
                    <CameraVideo
                        source={rtsp}
                        name='Camera 02'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={this.onPressAdd}
                >
                    <Text style={styles.text}>Add Camera</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        padding: 6,
        justifyContent:'center',
        alignContent: 'center',
        alignItems:'center',
        marginBottom:6
    },
    camera:{
        padding:12,
        flex:1,
        // height:200,
        width: '100%',
        // height:2000,
    },
    button: {
        height: 50,
        backgroundColor:'#000',
        width:100,
        borderRadius: 4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },

    text:{
        color:'#fff'
    }
})
