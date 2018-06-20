import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  Container,
  Content,
  Body,
  Left,
  Right,
  Text,
  Thumbnail,
  Header,
  Icon,
  Button,
} from 'native-base';
import {map} from 'react'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const images = {
  '1':
    'https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg',
  '2':
    'https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg',
  '3':
    'http://www.sciencemag.org/sites/default/files/styles/article_main_medium/public/images/ss-bird_honeycreeper.jpg?itok=eEm6TBrb',
  '4':
    'http://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000',
  '5':
    'https://media.boingboing.net/wp-content/uploads/2018/03/Ossi-Saarinen-01.jpg',
  '6': 'https://insider.si.edu/wp-content/uploads/2017/04/SCTA-copy.jpg',
  '7':
    'https://vignette.wikia.nocookie.net/birds/images/0/09/Birds-01.jpg/revision/latest?cb=20160529133431',
};

const images2 = [
    {uri:'http://www.mangaloretoday.com/contentfiles/2017/feb/Manipal%20Bird%2020%20feb%202017%202.jpg',},
    {uri:'https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg'},
    {uri:'https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg'},
    {uri:'http://www.sciencemag.org/sites/default/files/styles/article_main_medium/public/images/ss-bird_honeycreeper.jpg?itok=eEm6TBrb'},
    {uri:'http://content.presspage.com/uploads/1763/1920_year-of-the-bird-george-grall.jpg?10000'},
    {uri:'https://media.boingboing.net/wp-content/uploads/2018/03/Ossi-Saarinen-01.jpg'},
    {uri:'https://insider.si.edu/wp-content/uploads/2017/04/SCTA-copy.jpg'},
    {uri:'https://vignette.wikia.nocookie.net/birds/images/0/09/Birds-01.jpg/revision/latest?cb=20160529133431'},
    {uri:'https://mymodernmet.com/wp/wp-content/uploads/2018/02/bird-photography-rupa-sutton-6.jpg'},
    {uri:'https://i.guim.co.uk/img/media/98f9bb221c0e7cf77d7b54352e996b4bc437da73/0_0_1653_1131/master/1653.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=dff93ecb6c4fb0c2a1dd0d268a27596b'},
    {uri:'https://cdn.brainpop.com/science/diversityoflife/birds/screenshot1.png'},
];

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index,
    });
  };

  renderSectionOne = () => {
   return images2.map((image, index) => {
      return (
          <View key={index} style={[{width:SCREEN_WIDTH/3}, {height:SCREEN_WIDTH/3},index % 3 !== 0 ? {paddingLeft:2} : {paddinfLeft:0} ,{marginBottom:2}]}>
            <Image source={image} style={[{flex:1,width:undefined,height:undefined}]}/>
          </View>
        )
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      );
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Icon name="md-person-add" style={{ fontSize: 24 }} />
          </Left>
          <Body>
            <Text>Jukkru</Text>
          </Body>
          <Right>
            <EntypoIcon name="back-in-time" style={{ fontSize: 24 }} />
          </Right>
        </Header>
        <Content>
          <View>
            <View style={styles.topTopContainer}>
              <View style={styles.profileImageContainer}>
                <Thumbnail source={{ uri: images[1] }} large />
              </View>
              <View style={styles.topRightContainer}>
                <View style={styles.topStatContainer}>
                  <View style={styles.statContainer}>
                    <Text style={{ fontWeight: 'bold' }}>20</Text>
                    <Text note>posts</Text>
                  </View>
                  <View style={styles.statContainer}>
                    <Text style={{ fontWeight: 'bold' }}>206</Text>
                    <Text note>followers</Text>
                  </View>
                  <View style={styles.statContainer}>
                    <Text style={{ fontWeight: 'bold' }}>167</Text>
                    <Text note>followings</Text>
                  </View>
                </View>
                <View style={styles.topButtonContainer}>
                  <Button
                    bordered
                    style={[styles.ButtonBorder, { flex: 3, marginLeft: 10 }]}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'black',
                      }}>
                      Edit Profile
                    </Text>
                  </Button>
                  <Button
                    bordered
                    style={[styles.ButtonBorder, { flex: 1, marginLeft: 5 }]}>
                    <Icon
                      name="settings"
                      style={{ fontSize: 16, color: 'black' }}
                    />
                  </Button>
                </View>
              </View>
            </View>
            <View style={styles.topBottomContainer}>
              <Text style={{ fontWeight: 'bold' }}>Jukkru</Text>
              <Text>Bird</Text>
              <Text>www.Birds.com</Text>
            </View>

            <View>
              <View style={styles.navButtonContainer}>
                <Button
                  transparent
                  onPress={() => this.segmentClicked(0)}
                  active={this.state.activeIndex == 0}>
                  <Icon
                    name="ios-apps-outline"
                    style={[
                      this.state.activeIndex == 0 ? {} : { color: 'grey' },
                    ]}
                  />
                </Button>
                <Button
                  transparent
                  onPress={() => this.segmentClicked(1)}
                  active={this.state.activeIndex == 1}>
                  <Icon
                    name="ios-list-outline"
                    style={[
                      this.state.activeIndex == 1 ? {} : { color: 'grey' },
                    ]}
                  />
                </Button>
                <Button
                  transparent
                  onPress={() => this.segmentClicked(2)}
                  active={this.state.activeIndex == 2}>
                  <Icon
                    name="ios-people-outline"
                    style={[
                      this.state.activeIndex == 2 ? {} : { color: 'grey' },
                    ]}
                  />
                </Button>
                <Button
                  transparent
                  onPress={() => this.segmentClicked(3)}
                  active={this.state.activeIndex == 3}>
                  <Icon
                    name="ios-bookmark-outline"
                    style={[
                      this.state.activeIndex == 3 ? {} : { color: 'grey' },
                    ]}
                  />
                </Button>
              </View>
            </View>
            {this.renderSection()}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  topContainer: {},
  topTopContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  profileImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightContainer: {
    flex: 3,
  },
  topStatContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  ButtonBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderColor: '#ddd',
  },
  topBottomContainer: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
