import React, {Component} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {FontStyles, images} from '../constants/assets';
import {colors} from '../constants/themes';
import {LinearColorText} from '../components/index';

import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');
export class GetStart extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.WHITE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={[
            'rgba(0,0,200,0.7)',
            'rgba(0,0,180,0.6)',
            'rgba(0,0,160,0.5)',
          ]}
          style={{
            borderRadius: 20,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
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
        <View
          style={{
            width: '90%',
            height: height / 1.8,
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Text
            style={{
              fontFamily: FontStyles.Comfortaa,
              fontSize: height * 0.03,
              textAlign: 'center',
            }}>
            Well, all I know is what I read in the newspapers-{' '}
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Will Smits
            </Text>
          </Text>

          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: colors.RED.DEFAULT,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              alignSelf: 'center',
            }}
            onPress={() => this.props.navigation.navigate('NewsScreen')}>
            <Text
              style={{
                padding: 15,
                color: colors.WHITE,
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.03,
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GetStart;
