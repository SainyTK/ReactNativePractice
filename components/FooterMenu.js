import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

class FooterMenu extends Component {
    state = {  }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View>
                        <Image source={require('../resources/icon_newsfeed.png')} style={styles.icon}/>
                    </View>
                    <Text>123</Text>
                </View>
                <View style={styles.iconContainer}>
                    <View>
                        <Image source={require('../resources/icon_newsfeed.png')} style={styles.icon}/>
                    </View>
                    <Text>123</Text>
                </View>
                <View style={styles.iconContainer}>
                    <View>
                        <Image source={require('../resources/icon_newsfeed.png')} style={styles.icon}/>
                    </View>
                    <Text>123</Text>
                </View>
                <View>
                </View>
                <View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'rgb(200,200,200)',
    },
    icon:{
        width:40,
        height:40,
    },
    iconContainer:{
        width:50,
        height:80,
        flexDirection:'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
    },
});

export default FooterMenu;