import React from "react";
import {View,Text, StyleSheet} from "react-native";
export default class Body extends React.Component{
    render =()=>{
        return <View style={styles.container}>
                    <Text style={styles.bodyHeader}>{this.props.header}</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                    <Text>Shake your  to open the developer menu.</Text>
                </View>;
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding:20,
        marginLeft:"5%",
        width:"90%",
        marginBottom:10,
        backgroundColor:"white",
        shadowOpacity:0.8,
        shadowColor:"black",

    },
bodyHeader:{
    fontSize:25,
}
})