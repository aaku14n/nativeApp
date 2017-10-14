import React from "react";
import {View,Text ,StyleSheet ,TextInput,Button} from "react-native";
import InputBox from "./InputBox";
export default class SetName extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
      }
      setTempName(name){
          this.setState({
              text:name
          });
      }

    render = ()=>{
        return <View style={styles.container}>
            <Text style={styles.label}>WelCome to React Native</Text>
            <InputBox name={"aaku"} setName={(name)=>this.setTempName(name)}/>
            <Button 
            title="Submit"
            style={styles.button}
            onPress={()=>this.props.setName(this.state.text)}
            />
            </View>;
    }
}
styles = StyleSheet.create({
    container:{
        height:"auto",
        marginTop:"50%",
        justifyContent: "center",
        alignItems: "center"
    },
    label:{
      fontSize:30,
      color:"#156115" ,
      marginBottom:100 ,
      padding:10,
      shadowColor: "#62ca62",
      borderRadius:10,
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 2
      }
    },
    button:{
        color:"#841584",
        padding:10,
        fontSize:20,
        backgroundColor:"red",
    }
})