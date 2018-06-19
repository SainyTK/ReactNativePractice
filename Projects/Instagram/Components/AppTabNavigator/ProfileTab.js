import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {Icon} from 'native-base'

export default class ProfileTab extends Component {
   
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => (
            <Icon name="person" style={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileTab</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})