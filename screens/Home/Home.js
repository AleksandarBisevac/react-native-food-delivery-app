import React from 'react';
import { View } from 'react-native';

import { Search, FoodList } from '../../components';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* SEARCH SECTION */}
      <Search />
      {/* LIST SECTION */}
      <FoodList />
    </View>
  );
};

export default Home;
