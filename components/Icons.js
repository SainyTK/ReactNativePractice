import React,{Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';

export class MessagesIcon extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={sytles.container}>
                <View style={styles.iconContainer}>
                    <Image source={require('../resources/icon_messages.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text>MESSAGES</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            width:this.props.width,
            height:this.props.height,
            flexDirection: 'column',
            justifyContent:'space-around',
            alignItems:'center',
        },
        iconContainer:{
            flex:2
        },
        textContainer:{
            flex:1,
        }
    }
)