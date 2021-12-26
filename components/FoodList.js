import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { FoodListHeader, HorizontalFoodCard } from '.';
import { SIZES, dummyData, FONTS, COLORS } from '../constants';

const FoodList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //Handler
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);
    // Set menu based on categoryId
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <FoodListHeader
          selectedMenuType={selectedMenuType}
          setSelectedMenuType={setSelectedMenuType}
          handleChangeCategory={handleChangeCategory}
          selectedCategoryId={selectedCategoryId}
        />
      }
      data={menuList}
      keyExtractor={(item) => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <HorizontalFoodCard
            containerStyle={{
              height: 130,
              alignItems: 'center',
              marginHorizontal: SIZES.padding,
              marginBottom: SIZES.radius,
            }}
            imageStyle={{ marginTop: 20, height: 110, width: 110 }}
            item={item}
            onPress={() => console.log('HorizontalFoodCard')}
          ></HorizontalFoodCard>
        );
      }}
    />
  );
};

export default FoodList;
