import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import StoryUsers from '../StoryUsers';
import CardComponent from '../CardComponent';
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Text,
} from 'native-base';

const images = [
  {
    uri:
      'https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg',
  },
  {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg',
  },
  {
    uri:
      'http://www.sciencemag.org/sites/default/files/styles/article_main_medium/public/images/ss-bird_honeycreeper.jpg?itok=eEm6TBrb',
  },
  {
    uri:
      'http://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000',
  },
  {
    uri:
      'https://media.boingboing.net/wp-content/uploads/2018/03/Ossi-Saarinen-01.jpg',
  },
  { uri: 'https://insider.si.edu/wp-content/uploads/2017/04/SCTA-copy.jpg' },
  {
    uri:
      'https://vignette.wikia.nocookie.net/birds/images/0/09/Birds-01.jpg/revision/latest?cb=20160529133431',
  },
  {
    uri:
      'http://www.mangaloretoday.com/contentfiles/2017/feb/Manipal%20Bird%2020%20feb%202017%202.jpg',
  },
  {uri:'https://mymodernmet.com/wp/wp-content/uploads/2018/02/bird-photography-rupa-sutton-6.jpg'},
  {uri:'https://i.guim.co.uk/img/media/98f9bb221c0e7cf77d7b54352e996b4bc437da73/0_0_1653_1131/master/1653.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=dff93ecb6c4fb0c2a1dd0d268a27596b'},
  {uri:'https://cdn.brainpop.com/science/diversityoflife/birds/screenshot1.png'},
];

const stories = [
  {
    image: images[0],
    name: 'You',
  },
  {
    image: images[1],
    name: 'JJ',
  },
  {
    image: images[2],
    name: 'Tom',
  },
  {
    image: images[3],
    name: 'Kyle',
  },
  {
    image: images[4],
    name: 'Humis',
  },
  {
    image: images[5],
    name: 'Jordan',
  },
  {
    image: images[6],
    name: 'Tomson',
  },
];

const cards = [
  {
    profileImage: images[0],
    name: 'Jukkru',
    place: 'Phuket, Thailand',
    image: images[7],
    likes:'30',
    caption: 'Sweet',
    time: '1 MIN AGO',
  },
  {
    profileImage: images[2],
    name: 'Tom',
    place: 'Bankok, Thailand',
    image: images[8],
    likes:'42',
    caption: 'Couple <3',
    time: '20 MINS AGO',
  },
  {
    profileImage: images[1],
    name: 'JJ',
    place: 'Phuket, Thailand',
    image: images[9],
    likes:'102',
    caption: 'Birds, also known as Aves, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,',
    time: '1 HOUR AGO',
  },
];
export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    ),
  };

  renderStories = () => {
    return stories.map((story, index) => {
      return <StoryUsers data={story} />;
    });
  };

  renderCards = () => {
    return cards.map((card, index) => {
      return <CardComponent data={card} />;
    });
  };

  render() {
    return (
      <Container style={styles.container}>
      
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Icon name="ios-camera-outline" />
          </Left>
          <Body>
            <Text>Instagram</Text>
          </Body>
          <Right>
            <Icon name="ios-send-outline" />
          </Right>
        </Header>
        
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 7,
              }}>
              <Text style={{ fontWeight: 'bold' }}>Storires</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: 'bold' }}>Watch All</Text>
              </View>
            </View>
            
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5,
                }}>
                {this.renderStories()}
              </ScrollView>
            </View>
            
          </View>
          {this.renderCards()}
        </Content>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
