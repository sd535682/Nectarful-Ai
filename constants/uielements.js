import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Base Text
const BaseText = ({ style, children, ...props }) => (
  <Text style={[styles.baseText, style]} {...props}>
    {children}
  </Text>
);

// Header Text
export const Heading = ({ style, ...props }) => (
  <BaseText style={[styles.heading, style]} {...props} />
);

// Subheading Text
export const Subheading = ({ style, ...props }) => (
  <BaseText style={[styles.subheading, style]} {...props} />
);

// Body Text
export const BodyText = ({ style, ...props }) => (
  <BaseText style={[styles.bodyText, style]} {...props} />
);

// Caption Text
export const CaptionText = ({ style, ...props }) => (
  <BaseText style={[styles.captionText, style]} {...props} />
);

const styles = StyleSheet.create({
  baseText: {
    color: '#232323',
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 35,
  },
  subheading: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: '700',
  },
  bodyText: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: '700'
  },
  captionText: {
    fontFamily: 'SpaceMono',
    fontSize: 16,
  }
});

export default BaseText;

// Colors and Gradients
export const UIColors = {
  textWhite: '#fef2f2',
  textBlack: '#1c0404',
  gradient1: ["#f19ca2", "#a62025"],
}

// const tintColorLight = '#0a7ea4';
// const tintColorDark = '#fff';
// export const UIelements = {
//   light: {
//     text: '#11181C',
//     background: '#fff',
//     tint: tintColorLight,
//     icon: '#687076',
//     tabIconDefault: '#687076',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#ECEDEE',
//     background: '#151718',
//     tint: tintColorDark,
//     icon: '#9BA1A6',
//     tabIconDefault: '#9BA1A6',
//     tabIconSelected: tintColorDark,
//   },
// };
