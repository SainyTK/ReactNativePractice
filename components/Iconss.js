import React,{Component} from 'react';
import {Image,View,StyleSheet,Text,ScrollView} from 'react-native';

export class IconMessages extends Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../resources/icon_messages.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>MESSAGES</Text>
                </View>
            </View>
        );
    }
}

export class IconNewsfeed extends Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../resources/icon_newsfeed.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>NEWSFEED</Text>
                </View>
            </View>
        );
    }
}


export class IconNotification extends Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../resources/icon_notification.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>NOTIFICATION</Text>
                </View>
            </View>
        );
    }
}


export class IconSearch extends Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../resources/icon_search.png')}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>SEARCH</Text>
                </View>
            </View>
        );
    }
}

export class IconUpload extends Component{

    render(){
        return (
            <View style={styles.container}>
              <View style={styles.iconContainer}>
            <Image style={styles.bigIcon} source={require('../resources/icon_upload.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            width:65,
            height:50,
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',

            
        },
        iconContainer:{
            flex:1,
            margin:5,
        },
        icon:{
          height:25,
          width:25,
        },
        bigIcon:{
          height:40,
          width:40,
        },
        textContainer:{
            flex:1,
        },
        textStyle:{
          fontSize:8,
          margin:1,
        }
    }
)