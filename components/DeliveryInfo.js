import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, dummyData, FONTS, SIZES, icons } from '../constants';

const DeliveryInfo = () => {
  return (
    <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
      <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
        DELIVERY TO:
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: SIZES.base,
          alignItems: 'center',
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{dummyData?.myProfile?.address}</Text>
        <Image
          source={icons.down_arrow}
          style={{ marginLeft: SIZES.base, height: 20, width: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryInfo;
