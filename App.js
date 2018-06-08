import React,{Component} from 'react';
import {Image,View,StyleSheet,Text,ScrollView} from 'react-native';
import BottomNav from './components/BottomNav'

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.bottomContainer}>
                   <BottomNav/>
                </View>
              
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
          paddingTop:20,
          flex:1,
        },
        bottomContainer:{
          flex:1,
          justifyContent:'flex-end'
        }
    }
)