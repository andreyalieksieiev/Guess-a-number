import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TitleText = ({children, style}) => (
  <Text style={{...styles.title, ...style}}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
});

export default TitleText;
