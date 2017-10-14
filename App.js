import React from 'react';
import { Image, ScrollView,StyleSheet, Text, View ,Button} from 'react-native';
import CheckBox from './CheckBox';
import Header from "./Header";
import Body from "./Body";
import SetName from "./SetName";
export default class App extends React.Component {
  constructor(props)
  {super(props);
  this.state = ({
    profile:null
  })
}
setName(name){
  this.setState({profile:name})
}
  render() {
    return (this.state.profile ?
      <View style={styles.container}>
        <Header header={this.state.profile}/>
        <Button title="Reset" onPress={()=>this.setState({profile:null})} />
        <ScrollView>
        <Body header={'Aaku'}/>
        <Body header={'Aakarsh'}/>
        <Body header={'Yadav'}/>
        <Body header={'My self'}/>
        <Body header={'yahoo'}/>
        <Body header={'React is awesome'}/>
        <Body header={'Cool Syntex'}/>
        </ScrollView>
      </View> 
:
        <ScrollView>
       <SetName setName={(name)=>this.setName(name)} />
         </ScrollView>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },

});
