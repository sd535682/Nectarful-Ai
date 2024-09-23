import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../constants/responsive';
import {BodyText, Heading, UIColors} from '../constants/uielements';

export default function Carousel_Card({props}) {
  const carousel_data = {
    fact: props.fact,
    desc: props.text,
    url: props.url,
  };

  return (
    <LinearGradient
      colors={['#fb7182', '#f43f55', '#be1233']}
      style={styles.carousel_card}>
      <View style={styles.factContainer}>
        <Heading style={{fontSize: 15, color: 'white'}}>
          #Fact {carousel_data.fact}
        </Heading>
        <BodyText
          numberOfLines={2}
          style={{fontSize: 12, color: UIColors.semiWhite}}>
          {carousel_data.desc}
        </BodyText>
      </View>
      <View style={styles.carousel_image_container}>
        <Image
          source={{uri: carousel_data.url}}
          style={styles.card_image}
          resizeMode="cover"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  carousel_card: {
    paddingLeft: 10,
    paddingVertical: 10,
    height: hp(15),
    width: wp(80),
    borderRadius: 15,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  carousel_image_container: {
    flex: 0.25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  factContainer: {flex: 0.75},
});
