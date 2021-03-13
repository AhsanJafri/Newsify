import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';

import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {FontStyles, images} from '../constants/assets';
const {height, width} = Dimensions.get('screen');
import LinearGradient from 'react-native-linear-gradient';
import {items} from '../assests/helper';
import {colors} from '../constants/themes';
import axios from 'axios';
const HEADER = height / 8;
const CONTENT = height - height / 8;
function DateFunc() {
  let a = new Date();
  return a.getDate() + '-' + a.getMonth() + '-' + a.getFullYear();
}
export class DetailNews extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {item} = this.props.route.params;
    return (
      <View style={{flex: 1, backgroundColor: colors.WHITE}}>
        <StatusBar />
        <View style={{height: HEADER}}>
          <LinearGradient
            colors={[
              'rgba(0,0,200,0.7)',
              'rgba(0,0,180,0.6)',
              'rgba(0,0,160,0.5)',
            ]}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.07,
                color: colors.WHITE,
              }}>
              {' '}
              Newsify{' '}
            </Text>
          </LinearGradient>
        </View>
        <View style={{height: CONTENT}}>
          <ScrollView>
            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.04,
                textAlign: 'center',
                marginVertical: 4,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.022,
                marginVertical: 4,
                marginLeft: '3%',
                marginTop: '5%',
              }}>
              <Text style={{fontWeight: 'bold'}}>Description:</Text>
              {'\n\n'}
              {item.description}
            </Text>
            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.022,
                marginVertical: 4,
                marginLeft: '3%',
                marginTop: '5%',
              }}>
              <Text style={{fontWeight: 'bold'}}>Content:</Text>
              {'\n\n'}
              {item.content}
            </Text>

            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.03,
                marginVertical: 4,
                marginLeft: '3%',
                marginTop: '5%',
                textAlign: 'center',
              }}>
              {item.author}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DetailNews;
