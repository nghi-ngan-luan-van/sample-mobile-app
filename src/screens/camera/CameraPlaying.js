import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList
} from 'react-native';

const { width } = Dimensions.get('window');

import CameraVideo from '../../components/camera/CameraVideo';
const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';


const {width} = Dimensions.get('window');

import CameraVideo from '../../components/camera/CameraVideo';

const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';

// import{play} from ''

export default class CameraPlaying extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source : this.props.source,
            name: this.props.name
        };
    }
    onPress = () =>{
        let navigation = this.props.navigation;
        navigation.navigate('CameraAdding')

    }

    render() {
        let rtsp = this.rtsp;
        let {name, source} = this.state;
        let guesture = ['Play', 'Capture', 'Record', 'Pre', 'Next'];
        return (
            <View containerStyle={styles.body}>
                <TouchableOpacity style={styles.camera}>
                    <CameraVideo
                        source={source}
                        name={name}
                    />
                </TouchableOpacity>
                <FlatList
                    horizontal={true}

                    data={guesture}
                    renderItem={({item}) => <TouchableOpacity style={styles.button} onPress={this.onPress}>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                    }
                    keyExtractor={index => index}
                />

            </View>
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
        padding: 12,
        // flex: 1,
        // height:200,
        width: '100%',
        // height:2000,
    },
    button: {
        height: 50,
        backgroundColor:'#000',
        width:100,
        borderRadius: 4,
        margin:4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },

    text:{
        color:'#fff'
    }
})
