import {View} from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {UIColors} from '../constants/uielements';
import {MasonryFlashList} from '@shopify/flash-list';
import {wp} from '../constants/responsive';

export default function ListShimmer() {
  const DATA = [1, 2, 3, 4];
  const screenWidth = wp(100);
  const itemWidth = screenWidth / 2 - 20;

  const renderShimmerItem = () => (
    <ShimmerPlaceHolder
      shimmerColors={[UIColors.gradient3[0], UIColors.gradient3[1]]}
      location={[0.3, 1]}
      LinearGradient={LinearGradient}
      style={{
        width: itemWidth,
        height: 272.3,
        borderRadius: 15,
        margin: 5,
      }}
    />
  );

  return (
    <View style={{flex: 1}}>
      <MasonryFlashList
        data={DATA}
        numColumns={2}
        renderItem={renderShimmerItem}
        estimatedItemSize={272.3}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
}
