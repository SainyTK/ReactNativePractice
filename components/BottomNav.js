import React,{Component} from 'react';
import {Image,View,StyleSheet,Text,ScrollView} from 'react-native';
import {IconMessages,IconNewsfeed,IconNotification,IconSearch,IconUpload}  from './Iconss'

export default class BottomNav extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
              <View style={styles.navcontainer}>
               <IconNewsfeed iconName='messages' style={styles.iconContainer}/>
               <IconSearch iconName='messages' style={styles.iconContainer}/>
               <IconUpload iconName='messages' style={styles.iconContainer}/>
               <IconNotification iconName='messages' style={styles.iconContainer}/>
               <IconMessages iconName='messages' style={styles.iconContainer}/>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
          height:50,
        },
        navcontainer:{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-around',
          borderWidth:1,
          borderRadius:2,
          borderColor:'black'
        },
        iconContainer:{
          flex:1,
        }
    }
)