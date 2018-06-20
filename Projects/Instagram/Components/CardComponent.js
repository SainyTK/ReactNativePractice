import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail,
    Text,
    Body,
    Left,
    Button,
    Icon,
} from 'native-base';

export default class CardComponent extends Component {
    render() {
        
        const {profileImage,name,place,image,likes,caption,time} = this.props.data;

        return (
            <Card style={{borderColor:'white',shadowColor:'white',}}>
                <CardItem cardBody style={{padding:5,height:50}}>
                    <Left>
                        <Thumbnail small source={profileImage} />
                        <Body>
                            <Text>{name}</Text>
                            <Text note>{place}</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image source={image} style={{ width: null, height: 300, flex: 1 }} />
                </CardItem>

                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles-outline' style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send-outline' style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>

                <CardItem cardBody style={{ height: 50,paddingHorizontal:10}}>
                    <Text style={{ fontWeight: 'bold' }}>{likes} likes</Text>
                </CardItem>

                <CardItem cardBody style={{padding:10}}>
                    <Text>
                        <Text style={{ fontWeight: '900' }}>{name} </Text>
                        {caption}
                    </Text>
                </CardItem>

                <CardItem cardBody style={{paddingHorizontal:10}}>
                    <Text note style={{fontSize:10,height:20,}}>{time}</Text>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
})