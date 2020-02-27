import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NavigationBar from 'react-native-navbar';

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let title1 = {
      title: 'Hello, world',
      tintColor :"white"
    };
    return (
      <View>
        <NavigationBar style={{backgroundColor:"grey"}} title={title1} />
      </View>
    );
  }
}

export default NavBarComponent;
