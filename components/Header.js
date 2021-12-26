import React from 'react';
import { View, Text } from 'react-native';
import { FONTS } from '../constants';

const Header = ({
  navigation,
  containerStyle,
  title,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View style={{ ...containerStyle, flexDirection: 'row' }}>
      {/* LEFT COMPONENT */}
      {leftComponent}
      {/* TITLE */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>

      {/* RIGHT COMPONENT */}
      {rightComponent}
    </View>
  );
};

export default Header;
