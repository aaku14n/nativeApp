import React, { Component } from 'react';
import {  TextInput,View,Text,StyleSheet } from 'react-native';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
  render() {
    return (<View>
      <TextInput
        style={styles.input}
        placeholder={this.props.name}
        onChangeText={(text) => this.setState({text})}
        onBlur={() => this.props.setName(this.state.text)}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    input:{
        height: 40, 
        borderColor: 'gray',
        width:200, 
        borderWidth: 1,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:5,

    }
})