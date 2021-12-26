import React from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';

import { icons, SIZES, COLORS, FONTS } from '../constants';

const Search = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}
    >
      {/* ICON */}
      <Image
        source={icons.search}
        style={{ width: 20, height: 20, tintColor: COLORS.black }}
      />
      {/* TEXT INPUT */}

      <TextInput
        style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
        placeholder='Search food'
      />

      {/* FILTER BTN */}
      <TouchableOpacity>
        <Image
          source={icons.filter}
          style={{ width: 20, height: 20, tintColor: COLORS.black }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
