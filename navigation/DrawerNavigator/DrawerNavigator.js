import React, { useState } from 'react';
import { View } from 'react-native';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

import { MainLayout } from '../../screens';
import { COLORS } from '../../constants';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName='MainLayout'
        drawerContent={(props) => (
          <DrawerContent navigation={props.navigation} />
        )}
      >
        <Drawer.Screen name='MainLayout'>
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
