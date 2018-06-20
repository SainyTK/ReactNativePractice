import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
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

export default class StoryUsers extends Component {

  render() {
    const {image,name} = this.props.data;
    
    return (
      <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <Thumbnail
          style={{ marginHorizontal: 5, borderWidth: 2, borderColor: 'pink' }}
          source={image}
        />
        <Text style={{ fontSize: 12, paddingTop: 3 }}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
