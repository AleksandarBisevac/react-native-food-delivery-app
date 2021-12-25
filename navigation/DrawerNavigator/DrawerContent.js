import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  SIZES,
  icons,
  COLORS,
  dummyData,
  FONTS,
  constants,
} from '../../constants';

import DrawItem from './DrawItem';

const DrawerContent = ({ navigation, setSelectedTab, selectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close */}
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              navigation.closeDrawer();
            }}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
            marginBottom: SIZES.radius,
          }}
          onPress={() => console.log('PROFILE')}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData?.myProfile.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View Your Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <DrawItem
          label={constants.screens.home}
          icon={icons.home}
          isFocused={selectedTab === constants.screens.home}
          onPress={() => {
            setSelectedTab(constants.screens.home);
            navigation.navigate('MainLayout');
          }}
        />
        <DrawItem
          label={constants.screens.my_wallet}
          icon={icons.wallet}
          isFocused={selectedTab === constants.screens.my_wallet}
          onPress={() => {
            setSelectedTab(constants.screens.my_wallet);
            navigation.navigate('MyWallet');
          }}
        />
        <DrawItem
          label={constants.screens.notification}
          icon={icons.notification}
          isFocused={selectedTab === constants.screens.notification}
          onPress={() => {
            setSelectedTab(constants.screens.notification);
            navigation.navigate('Notification');
          }}
        />
        <DrawItem
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={selectedTab === constants.screens.favourite}
          onPress={() => {
            setSelectedTab(constants.screens.favourite);
            navigation.navigate('Favorite');
          }}
        />
        {/* Line Divider */}
        <View
          style={{
            height: 1,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor: COLORS.lightGray1,
          }}
        />
        <DrawItem label='Track Your Order' icon={icons.location} />
        <DrawItem label='Coupons' icon={icons.coupon} />
        <DrawItem label='Settings' icon={icons.setting} />
        <DrawItem label='Invite a Friend' icon={icons.profile} />
        <DrawItem label='Help Center' icon={icons.help} />
      </View>
      <View style={{ marginBottom: SIZES.padding }}>
        <DrawItem label='Log Out' icon={icons.logout} />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
