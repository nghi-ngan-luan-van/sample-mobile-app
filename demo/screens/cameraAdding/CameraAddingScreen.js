import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    backgroundColor: 'black',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 12
  },
  inputContainer: {
    margin: 12,
    backgroundColor: '#fff',
    borderBottomColor: '#000000',
    flex: 1,
    borderBottomWidth: 1,
  },
});

export default class CameraAddingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }
  onChangeText = text => {
    console.log(text);
  };
  
  onPressVerify = () => {};

  onPressAdd = url => {
    this.setState({url: url});
  };

  render() {
    let value = null;
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <Text> Url: </Text>
          <TextInput
            style={styles.inputContainer}
            onChangeText={this.onChangeText}
            multiline
            value={value}
          />
        </View>
        <View style={styles.frame}>
          <TouchableOpacity style={styles.button} onPress={this.onPressVerify}>
            <Text style={{color: 'white'}}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.OnPressAdd}>
            <Text style={{color: 'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
