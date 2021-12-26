import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  FoodListHeader,
  HorizontalFoodCard,
  VerticalFoodCard,
  Section,
  FoodCategoryTab,
  DeliveryInfo,
} from '.';
import { SIZES, dummyData, FONTS, COLORS } from '../constants';

const FoodList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  //Handler
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // Populate the popular section
    let selectedPopular = dummyData.menu.find((a) => a.name == 'Popular');
    //Retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == 'Recommended');
    // Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);
    // Set menu based on categoryId
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
    // Set recommended based on categoryId
    setRecommended(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );
    // Set popular based on categoryId
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {/* Delivery To */}
          <DeliveryInfo />

          {/* Food Category Section */}
          <FlatList
            data={dummyData.categories}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <FoodCategoryTab
                containerStyle={{
                  flexDirection: 'row',
                  height: 55,
                  marginTop: SIZES.padding,
                  marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                  marginRight:
                    index == dummyData.categories.length - 1
                      ? SIZES.padding
                      : 0,
                  paddingHorizontal: 8,
                  borderRadius: SIZES.radius,
                  backgroundColor:
                    selectedCategoryId == item.id
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                item={item}
                selectedCategoryId={selectedCategoryId}
                onPress={() => {
                  setSelectedCategoryId(item.id);
                  handleChangeCategory(item.id, selectedMenuType);
                }}
              />
            )}
          />
          {/* Popular Section */}
          <Section
            title='Popular Near You'
            onPress={() => console.log('Show all popular items')}
          >
            <FlatList
              data={popular}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <VerticalFoodCard
                  containerStyle={{
                    marginLeft: index == 0 ? SIZES.padding : 18,
                    marginRight:
                      index == popular.length - 1 ? SIZES.padding : 0,
                  }}
                  item={item}
                  onPress={() => console.log('VerticalFoodCard')}
                />
              )}
            />
          </Section>
          {/* Recomended Section */}
          <Section
            title='Recommended'
            onPress={() => console.log('SHOW RECOMMENDED')}
          >
            <FlatList
              data={recommended}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <HorizontalFoodCard
                  item={item}
                  containerStyle={{
                    height: 180,
                    width: SIZES.width * 0.85,
                    marginLeft: index == 0 ? SIZES.padding : 15,
                    marginRight:
                      index == recommended.length - 1 ? SIZES.padding : 0,
                    paddingRight: SIZES.radius,
                    alignItems: 'center',
                  }}
                  imageStyle={{ marginTop: 35, height: 150, width: 150 }}
                  onPress={() => console.log('HorizontalFoodCard')}
                />
              )}
            />
          </Section>
          {/* Menu Type  */}
          <FoodListHeader
            selectedMenuType={selectedMenuType}
            setSelectedMenuType={setSelectedMenuType}
            handleChangeCategory={handleChangeCategory}
            selectedCategoryId={selectedCategoryId}
          />
        </View>
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
          />
        );
      }}
      ListFooterComponent={<View style={{ height: 200 }} />}
    />
  );
};

export default FoodList;
