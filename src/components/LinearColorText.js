import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LinearColorText = (props, {colors}) => {
  return <LinearGradient colors={colors}>{props.children}</LinearGradient>;
};

export default LinearColorText;
