import React from "react";
import {   Text, View ,StyleSheet } from 'react-native';
export default class Header extends React.Component{
render =() =>{
    return (<View>
        <Text style={styles.Header}>{this.props.header}</Text>
        </View>);
}
}
const styles = StyleSheet.create({

    Header:{
      backgroundColor:"white",
      zIndex:10,
      width:"96%",
      marginTop:40,
      marginLeft:"2%",
      height:40,
      fontSize:20,
      padding:10,
      shadowColor: "#05A5D1",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 2
      }
    },
  });