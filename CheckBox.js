import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';
import {  View,Text } from 'react-native';
class CheckBox extends Component {


  render() {
    let iconName =  'check-box';
    let color =  '#000';

    return (
        <View>
        <Text>Aaakrsh is here...</Text>
      <Icon.Button
        data={"Raam"}
        name={iconName}
        backgroundColor='rgba(0,0,0,0)'
        color={color}
        underlayColor='rgba(0,0,0,0)'
        size={20}
        iconStyle={{marginLeft: -10, marginRight: 0}}
        activeOpacity={1}
        borderRadius={5}
      >
      </Icon.Button>
      </View>
    );
  }
}

module.exports = CheckBox;