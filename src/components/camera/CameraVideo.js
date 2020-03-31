import React, {Component} from 'react';

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
import {LivePlayer} from 'react-native-live-stream';

let rtsp = 'rtsp://10.10.144.206:7777/h264_ulaw.sdp';

export default class CameraVieo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onDisplay: true,
            name: this.props.name || 'Camera default',
            url:'rtsp://10.10.144.206:7777/h264_ulaw.sdp',
        };
        this.rtspLink = '';
    }

    componentDidmount() {
        this.onReload();
    }

    onReload = () => {
        let {source, name} = this.props;

    };

    render() {
        // let {name} = this.state;
        let {source, name} = this.props;
        return (
            <View
                style={styles.scrollView}>
                <Text style={styles.sectionTitle}>{name}</Text>
                <LivePlayer
                    source={{uri: "rtsp://192.168.43.161/7777/h264_ulaw.sdp"}}
                    style={styles.video}
                    paused={false}
                    muted={true}
                    bufferTime={300}
                    maxBufferTime={1000}
                    resizeMode={'stretch'}
                    onLoading={() => {
                        console.log('LivePlayer_onLoading....');
                    }}
                    onLoad={() => {
                        console.log('LivePlayer_onLoad');
                    }}
                    onEnd={() => {
                        console.log('LivePlayer_onEnd');
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
        alignContent: 'center',
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.black,
    },
    video: {
        height: 200,
        // width:'100%',
        // flex: 1,
        // marginVertical: 12,
    },
});