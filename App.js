import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator/DrawerNavigator';
import useCachedResources from './hooks/useFont';

const Stack = createStackNavigator();

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name='Home' component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
export default App;
