import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons, FONTS, COLORS, SIZES } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        width: 200,
        paddingVertical: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}
    >
      {/* Calories section and Favorite*/}
      <View style={{ flexDirection: 'row' }}>
        {/* Calories */}
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
            {item.calories} cal
          </Text>
        </View>
        {/* Favorite */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
            marginRight: SIZES.radius,
          }}
        />
      </View>
      {/* Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={item.image} style={{ height: '100%', width: '100%' }} />
      </View>

      {/* Info */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -20,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.darkGray2,
            textAlign: 'center',
          }}
        >
          {item.description}
        </Text>
        <Text style={{ ...FONTS.h2, marginTop: SIZES.radius }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
