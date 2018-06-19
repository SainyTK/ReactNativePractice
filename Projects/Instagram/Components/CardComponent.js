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

        const images = {
            "1" : {uri: "https://s7d2.scene7.com/is/image/PetSmart/ARHERO-CaringForYourBird-20160818?$AR0301$" },
            "2" : {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Riesenseeadler_Walsrode_2014_01.jpg/220px-Riesenseeadler_Walsrode_2014_01.jpg"},
            "3" : {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Steller%27sSeaEagle.jpg/800px-Steller%27sSeaEagle.jpg"},
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg" }} />
                        <Body>
                            <Text>Huzen_Karode</Text>
                            <Text note>Jun 12, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image source={images[this.props.image]} style={{ width: null, height: 300, flex: 1 }} />
                </CardItem>

                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send-outline' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem style={{height:50}}>
                    <Text>
                        {this.props.likes}
                    </Text>
                </CardItem>

                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>Huzen_Karode </Text>
                        Birds, also known as Aves, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5 cm (2 in) bee hummingbird to the 2.75 m (9 ft) ostrich. They rank as the world’s most numerically-successful class of tetrapods, with approximately ten thousand living species, more than half of these being 
                    </Text>
                </CardItem>
            </Card>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
})