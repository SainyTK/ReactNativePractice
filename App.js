import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container:{
      marginTop:20,
      flex:1,
      flexDirection: 'row',
    },
  }
)