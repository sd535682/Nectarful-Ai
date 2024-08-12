import { View } from "react-native";
import React from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { UIColors } from "../constants/uielements";

const ListShimmer = () => {
  return (
    <View>
      <ShimmerPlaceHolder
        shimmerColors={[UIColors.gradient3[0], UIColors.gradient3[1]]}
        location={[0.3, 1]}
        LinearGradient={LinearGradient}
        style={{ width: "100%", height: 250, borderRadius: 15 }}
      />
    </View>
  );
};

export default ListShimmer;