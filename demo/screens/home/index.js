/* eslint-disable no-alert */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
// Declare Component in src/index.js before import bellow

const { width: screenWidth } = Dimensions.get('window');

export default class HomeScreen extends Component {
    openViewVertical = () => {
        const { navigator } = this.props;
        navigator.push({
            screen: MomoViewDemo,
            params: { orientation: 'vertical' },
            options: {
                title: 'MomoViewDemoVertical'
            }
        });
    }

    showDialog = () => {
        const { navigator } = this.props;
        console.log(this.props);
        navigator.show({
            screen: DisplayPopup,
            params: {
                source: { uri: 'https://i.imgur.com/s70S9s9.png' },
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                actionButton: 'Something',
                onPress: () => {
                    navigator.push({
                        screen: MomoViewDemo,
                        screenProps: { orientation: 'horizontal' }
                    });
                },
                onClose: () => {
                }
            }
        });
    }

    showBottomDialog = () => {
        const { navigator } = this.props;
        console.log(this.props);
        navigator.showBottom({
            screen: DisplayPopup,
            params: {
                source: { uri: 'https://i.imgur.com/s70S9s9.png' },
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
                onClose: () => {
                }
            }
        });
    }
    // openConfirmPasswordKeyboard = () => {
    //     const { navigator } = this.props;
    //     navigator.showBottom({
    //         screen: ConfirmPasswordKeyboard,
    //         params: {
    //
    //         }
    //     });
    // }

    render() {
        return (
            <View style={{ flex: 1 }}>

                        {this.renderComponent()}

            </View>
        );
    }

    renderComponent() {
        return (
            <ScrollView

            >
                <View style={styles.row}>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={this.openConfirmPasswordKeyboard}
                    >
                        <View style={[styles.item, { justifyContent: 'center', alignItems: 'center' }]}>
                            <MomoText style={styles.title}>Confirm Password Keyboard</MomoText>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    childrenStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor:'#fff',
    },
    highlight: {
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowFull: {
    },
    item: {
        width: screenWidth / 2 - 30,
        height: screenWidth / 2 - 30,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10
    },
    itemFull: {
        width: screenWidth - 40,
        height: screenWidth / 2 - 30,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    itemFullNoneHeight: {
        width: screenWidth - 40,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    title: {
        color: '#222222',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    center: {
        justifyContent: 'center',
        flex: 1,
    },
    rowMargin: {
        alignItems: 'center'
    },
    marginTop: {
        marginTop: 10
    }
});
