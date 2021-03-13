import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {FontStyles, images} from '../constants/assets';
import {colors} from '../constants/themes';
import {LinearColorText} from '../components/index';

import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('screen');
export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('GetStart');
    }, 4000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.WHITE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OIZC95WMkDMP9Ye8lt0AVa4NUdCcGVNKHg&usqp=CAU',
          }}
          style={{
            height: height / 4,
            width: height / 4,
            borderRadius: height / 4,
          }}
          resizeMode="cover"
        />

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
      </View>
    );
  }
}

export default Splash;
