import React from 'react';
import { connect } from 'react-redux';
import { setSelectedTab } from '../../stores/tab/tabActions';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

import { MainLayout, Notification, MyWallet, Favourite } from '../../screens';

import { COLORS } from '../../constants';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ setSelectedTab, selectedTab }) => {
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
          <DrawerContent
            navigation={props.navigation}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        )}
      >
        <Drawer.Screen name='MainLayout'>
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name='MyWallet'>
          {(props) => <MyWallet {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name='Notification'>
          {(props) => <Notification {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name='Favorite'>
          {(props) => <Favourite {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return { selectedTab: state.tabReducer.selectedTab };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
