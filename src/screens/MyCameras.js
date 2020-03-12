import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import CameraVideo from '../components/camera/CameraVideo';

const {width} = Dimensions.get('window');

const rtsp = 'rtsp://freja.hiof.no:1935/rtplive/definst/hessdalen03.stream';
// const rtsp = 'rtsp://10.10.144.206:7777/h264_ulaw.sdp';
const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';

export default class MyCameras extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{name: 'Camera 01', url: rtsp}, {name: 'Camera 02', url: rtsp}],
        };
    }

    componentDidMount() {

    }

    onPressAdd = () => {
        let navigation = this.props.navigation;
        navigation.navigate('CameraAdding');

    };

    onPressCam = (name, source) => () => {
        let {navigation} = this.props;
        navigation.navigate('CameraPlaying', {
            cameraName: name,
            source: source,
        });
    };

    render() {

        return (
            <ScrollView containerStyle={styles.body}>
                <FlatList
                    containerStyle={{backgroundColor:'yellow'}}
                    horizontal={true}
                    data={this.state.data}
                    keyExtractor={item => item.name}
                    renderItem={({item}) =>
                        <TouchableOpacity style={styles.camera} onPress={this.onPressCam(item.name, item.url)}>
                            <CameraVideo
                                source={item.url}
                                name={item.name}
                            />
                        </TouchableOpacity>
                    }
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressAdd}
                >
                    <Text style={styles.text}>Add Camera</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 6,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    camera: {
        paddingHorizontal:12,
        flex: 1,
        // height:200,
        width: width,
        // height:2000,
    },
    button: {
        height: 50,
        backgroundColor: '#000',
        width: 100,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    text: {
        color: '#fff',
    },
});
