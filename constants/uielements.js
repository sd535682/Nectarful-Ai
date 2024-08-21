import React from "react";
import { Text, StyleSheet } from "react-native";
import { wp } from "./responsive";

// Base Text
export const BaseText = ({ style, children, ...props }) => (
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
    color: "#232323",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: 30,
    lineHeight: wp(10),
  },
  subheading: {
    fontFamily: "Nunito",
    fontSize: 20,
    fontWeight: "700",
  },
  bodyText: {
    fontFamily: "Nunito",
    fontSize: 16,
    fontWeight: "700",
  },
  captionText: {
    fontFamily: "SpaceMono",
    fontSize: 16,
  },
});

// Colors and Gradients
export const UIColors = {
  semiWhite: "#FFFBF5",
  semiBlack: "#151515",
  elementGrey: "#b0b0b0",
  baseGrey: "#6d6d6d",
  elementWhite: "#fef2f2",
  elementDark: "#3b0a08",
  elementBlack: "#191919",
  gradient1: ["#f19ca2", "#a62025"],
  gradient2: ["#faf7f0", "#f1ebdb"],
  gradient3: ["#fecdd3", "#fda4af"],
};