import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Easing,
} from 'react-native';

import { IconButton, FilterSection } from '.';
import Slider from '@react-native-community/slider';

import { constants, icons, FONTS, COLORS, SIZES } from '../constants';

const FilterModal = ({ isVisible, onClose }) => {
  const [showModal, setShowModal] = useState(isVisible);
  const [distanceVal, setDistanceVal] = useState(0);
  const animatedVal = useRef(new Animated.Value(0)).current;
  // interpolate Animated Value
  const modalY = animatedVal.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.fullHeight, 0],
  });

  useEffect(() => {
    setShowModal(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (showModal) {
      Animated.timing(animatedVal, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedVal, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setDistanceVal(0);
        onClose();
      });
    }
  }, [showModal]);

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      style={{ margin: 0 }}
      statusBarTranslucent={true}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
          minHeight: Dimensions.get('screen').height,
        }}
      >
        {/* Transparent Background */}
        <TouchableWithoutFeedback
          onPress={() => {
            setShowModal(false);
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          ></View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '80%',
            transform: [{ translateY: modalY }],
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          {/* HEADER */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
          {/* FILTERS CONTAINER */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {/* Distance Section */}
            <FilterSection title='Distance'>
              <Text style={{ width: 200, textAlign: 'center' }}>
                {distanceVal}
              </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                maximumValue={15}
                minimumValue={0}
                maximumTrackTintColor={COLORS.lightOrange}
                minimumTrackTintColor={COLORS.primary}
                thumbTintColor={COLORS.primary}
                step={1}
                onValueChange={(value) => setDistanceVal(value)}
              />
            </FilterSection>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
