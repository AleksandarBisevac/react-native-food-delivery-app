import React from 'react';
import { View, Text } from 'react-native';
import { FONTS, SIZES } from '../constants';

const FilterSection = ({ containerStyle, title, children }) => {
  return (
    <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  );
};

export default FilterSection;
