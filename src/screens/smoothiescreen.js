import {StyleSheet, View, Pressable, ToastAndroid} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSmoothieItems} from '../zustand/fruitcart';
import {borderRadius, hp, wp} from '../constants/responsive';
import {ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getSmoothieRecipe} from '../api/globalapi';
import Markdown from 'react-native-markdown-display';
import LinearGradient from 'react-native-linear-gradient';
import {
  Heading,
  UIColors,
  CaptionText,
  BodyText,
} from '../constants/uielements';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
const ICON = require('../assets/images/empty.json');
import {Player} from '@lordicon/react';

export default function SmoothieScreen() {
  // const {top} = useSafeAreaInsets();
  // const paddingTop = top > 0 ? top + 10 : top + 30;
  const [recipe, setRecipe] = useState('');
  const smoothieItems = useSmoothieItems(state => state.smoothieItems);
  const removeFruit = useSmoothieItems(state => state.removeFruit);
  const clearSmoothieItems = useSmoothieItems(
    state => state.clearSmoothieItems,
  );
  const playerRef = useRef(null);

  function showToast() {
    ToastAndroid.show('No Items Added', ToastAndroid.SHORT);
  }

  const handleRecipe = () => {
    if (!smoothieItems || smoothieItems.length === 0) {
      showToast();
      setRecipe('');
    } else {
      getSmoothieRecipe(smoothieItems)
        .then(recipe => setRecipe(recipe))
        .catch(error => console.error('Error:', error));
    }
  };

  useEffect(() => {
    handleRecipe();
  }, []);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <LinearGradient
      colors={[UIColors.gradient2[0], UIColors.gradient2[1]]}
      style={[styles.smoothie_page]}>
      <View style={styles.smoothie_header}>
        <Heading>Smoothie {'\n'}made with AI</Heading>
        <Pressable
          onPress={() => {
            clearSmoothieItems();
            setRecipe('');
          }}>
          <MaterialCommunityIcons
            name="notification-clear-all"
            size={35}
            color={UIColors.elementDark}
          />
        </Pressable>
      </View>
      <View>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          {smoothieItems.length ? (
            smoothieItems.map(fruit => (
              <View key={fruit.id} style={styles.recipe_item}>
                <CaptionText style={{fontSize: 15, color: UIColors.semiBlack}}>
                  {fruit.name}
                </CaptionText>
                <Pressable onPress={() => removeFruit(fruit.id)}>
                  <MaterialIcons
                    name="delete-outline"
                    size={20}
                    color={UIColors.elementDark}
                  />
                </Pressable>
              </View>
            ))
          ) : (
            <View style={styles.recipe_item}>
              <CaptionText style={{fontSize: 15, color: UIColors.semiBlack}}>
                Jar looks empty 🥤 Add Items
              </CaptionText>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            handleRecipe();
            ReactNativeHapticFeedback.trigger('impactHeavy');
          }}>
          <BodyText style={{color: UIColors.elementWhite, textAlign: 'center'}}>
            Generate Smoothie
          </BodyText>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        {recipe ? (
          <ScrollView>
            <Markdown style={{body: {fontSize: 15, color: UIColors.semiBlack}}}>
              {recipe}
            </Markdown>
          </ScrollView>
        ) : (
          <Player
            ref={playerRef}
            size={96}
            icon={ICON}
            onComplete={() => playerRef.current?.playFromBeginning()}
            style={{alignSelf: 'center', marginVertical: hp(25)}}
          />
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  smoothie_page: {
    flex: 1,
    paddingHorizontal: wp(3),
  },
  smoothie_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  horizontalScroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  recipe_item: {
    backgroundColor: UIColors.gradient3[0],
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: UIColors.elementDark,
    marginBottom: wp(5),
    borderRadius: borderRadius,
    padding: 10,
    marginRight: 5,
  },
  buttonContainer: {
    width: wp(90),
    backgroundColor: UIColors.elementDark,
    borderRadius: borderRadius,
    paddingVertical: 15,
  },
});
