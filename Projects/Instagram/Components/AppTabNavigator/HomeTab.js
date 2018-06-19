import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import CardComponent from '../CardComponent'
import {
    Icon,
    Container,
    Content,
} from 'native-base'

export default class HomeTab extends Component {
   
    static navigationOptions = {
        tabBarIcon : ({ tintColor }) => (
            <Icon name="ios-home" style={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent image="1" likes="123"/>
                    <CardComponent image="2" likes="100"/>
                    <CardComponent image="3" likes="20"/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
})