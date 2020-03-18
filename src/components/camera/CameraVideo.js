import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,

} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {LivePlayer} from "react-native-live-stream";
import {Video} from 'react-native-video';

let rtsp = 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa';

export default class CameraVieo extends Component{

    constructor(props){
        super(props);
        this.state = {
            onDisplay: true,
            name: this.props.name || 'Camera default'
        }
        this.rtspLink = '';
    }
    componentDidmount(){
       this.onReload();
    }

    onReload = () => {
        let {source, name} = this.props;
        this.rtspLink = source || rtsp;
        // this.rtspLink = 'http://wmccpinetop.axiscam.net/mjpg/video.mjpg';
    }
    render() {
        let {name} = this.state;
        return (
            <View
                        style={styles.scrollView}>
                        <Text style={styles.sectionTitle}>{name}</Text>
                        <LivePlayer
                            source={{uri: this.rtspLink}}
                            style={styles.video}
                            paused={false}
                            muted={false}
                            bufferTime={300}
                            maxBufferTime={1000}
                            resizeMode={"contain"}
                            onLoading={() => {
                                console.log('LivePlayer_onLoading....')
                            }}
                            onLoad={() => {
                                console.log('LivePlayer_onLoad')
                            }}
                            onEnd={() => {
                                console.log('LivePlayer_onEnd')
                            }}
                        />

                <Text style={styles.sectionTitle}></Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        // paddingHorizontal:12,
        justifyContent: 'center',
        alignContent: 'center'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    video:{
        height: 200,
        // width:'100%',
        // flex: 1,
        marginVertical:12
    }
});