import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const {width} = Dimensions.get('window');

const rtsp = 'rtsp://10.10.144.206:7777/h264_ulaw.sdp';
const sampleAvatar = 'https://www.voicesofyouth.org/sites/default/files/styles/thumbnail/public/pictures/2019-03/nature-3125912_960_720.jpg?itok=ROz3xnZJ';

export default class LocalAlbum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{name: 'Camera 01', url: rtsp}, {name: 'Camera 02', url: rtsp}],
        };
        this.type = [
            {
                name: 'Local Video',
                img: sampleAvatar,
            },
            {
                name: 'Video Snapshots',
                img: sampleAvatar,
            },
            {
                name: 'Video download from cloud',
                img: sampleAvatar,
            },

        ];
    }

    componentDidMount() {

    }

    onPress = (item) =>() => {
        let {navigation} = this.props;
        navigation.navigate('Details', {
            name:item.name
        });
    }

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={this.onPress(item)}>
                <Image source={{uri:item.img}} style={styles.img}/>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.body}>
                <FlatList
                    data={this.type}
                    keyExtractor={item => item.name}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },

    text: {
        color: '#fff',
        fontSize: 16
    },

    img: {
        borderRadius: 12,
        height: 42,
        width: 42,
        margin:5
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 6,
        marginBottom: 12,
        backgroundColor: '#222',
        borderRadius:6,
        width:width - 24,
        height:60,
        alignItems:'center',

    },
});
