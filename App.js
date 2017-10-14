import React from 'react';
import { Image, ScrollView,StyleSheet, Text, View } from 'react-native';
import CheckBox from './CheckBox';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerHeader}>Aakarsh</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      <Text>Shake your  to open the developer menu.</Text>
      <CheckBox data={"ffgsdf"} color={"#999"} ></CheckBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },
  containerHeader:{
    backgroundColor:"white",
    width:"90%",
    height:100,
    fontSize:20,
    padding:20,
  },
});
