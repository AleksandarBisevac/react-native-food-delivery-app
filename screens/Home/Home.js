import React, { useState } from 'react';
import { View } from 'react-native';

import { Search, FoodList, FilterModal } from '../../components';

const Home = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* SEARCH SECTION */}
      <Search setShowFilterModal={setShowFilterModal} />
      {/* FILTER MODAL */}
      <FilterModal
        isVisible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
      {/* LIST SECTION */}
      <FoodList />
    </View>
  );
};

export default Home;
