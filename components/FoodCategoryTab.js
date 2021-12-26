import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const FoodCategoryTab = ({
  containerStyle,
  item,
  selectedCategoryId,
  onPress,
}) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={item.icon}
        style={{ marginTop: 5, height: 50, width: 50 }}
      />
      <Text
        style={{
          alignSelf: 'center',
          marginRight: SIZES.base,
          color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
          ...FONTS.h3,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default FoodCategoryTab;
