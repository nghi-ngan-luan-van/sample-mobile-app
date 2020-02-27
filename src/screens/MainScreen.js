import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import NavBarComponent from '../components/NavBar/nav-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight:'bold'
  },
  text: {
    fontSize: 14,
  },
  icons:{
      position:'absolute',
      height:30, 
      top:6,
      right:12
    //   alignItems:'flex-end'
  }
});
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressAdd = () =>{
    Alert.alert('aaaaaaa')
  }
  renderEmty = () => {
    return <Text style={styles.text}>No camera found. Please add one</Text>;
  };
  render() {
    // let icon = require('../icons/ic_add');
    return (
      <View style={styles.container}>
        <NavBarComponent />

        <Text style={styles.title}> MainScreen </Text>
        {this.renderEmty()}
       
      <TouchableOpacity 
      style={styles.icons}
      onPress={this.onPressAdd}
      >
      <Image 
        source={require('../icons/ic_add.png')}
        
        />
      </TouchableOpacity>
      </View>

    );
  }
}

export default MainScreen;
