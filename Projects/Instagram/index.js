import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import MainScreen from './Components/MainScreen'

export default class Instagram extends Component{
    render(){
        return(
            <AppStackNavigator/>
        )
    }
}

const AppStackNavigator = createStackNavigator({
    Main:{
        screen: MainScreen,
    }
})