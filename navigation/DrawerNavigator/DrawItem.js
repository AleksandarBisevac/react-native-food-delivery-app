import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const DrawItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
      }}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text
        style={{ marginLeft: SIZES.radius, color: COLORS.white, ...FONTS.h3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawItem;
