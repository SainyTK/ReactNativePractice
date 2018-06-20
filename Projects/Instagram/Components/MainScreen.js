import React, { Component, } from 'react';
import { View, StyleSheet, Text,Platform} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import { Icon ,Left} from 'native-base'

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

export default class MainScreen extends Component {

    static navigationOptions = {
        header:null,
    }

    render() {
        return (
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor: 'white',
                }
            }),
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel:false,
        showIcon:true,
    },
});