import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { wp } from '../constants/responsive';

const HomeCarousel = forwardRef<ICarouselInstance>((props, ref) => {
  const [data] = useState([...new Array(6).keys()]);
  const [isFast] = useState(false);
  const [isAutoPlay] = useState(false);
  const [isPagingEnabled] = useState(true);
  const carouselRef = useRef<ICarouselInstance>(null);

  useImperativeHandle(ref, () => ({
    ...carouselRef.current,
  }));

  const baseOptions = {
    vertical: false,
    width: wp(85),
    height: wp(100) / 2,
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        loop={false}
        ref={carouselRef}
        style={{ width: '100%' }}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={data}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View style={{ flex: 1, marginLeft: '2.5%' }}>
            <View>
              <Text>Hello {index}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
});

export default HomeCarousel;