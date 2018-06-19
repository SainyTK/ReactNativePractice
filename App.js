import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Instagram from './Projects/Instagram'

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Instagram/>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
          paddingTop:20,
          flex:1,
        },
    }
)