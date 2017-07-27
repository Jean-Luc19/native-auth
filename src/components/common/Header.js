import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    color: 'goldenrod',
    fontSize: 20,
    fontWeight: '300'
  }
};

export  { Header };
