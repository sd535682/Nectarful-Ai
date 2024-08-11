import { BarChart } from 'react-native-gifted-charts';
import { View, Text, ScrollView } from 'react-native';
import { UIColors } from '../constants/uielements';

export default function NutriGraph({props}) {
  return (
      <BarChart
        showValuesAsTopLabel
        horizontal
        hideRules
        barWidth={20}
        barBorderRadius={4}
        frontColor={UIColors.elementDark}
        data={props}
        yAxisThickness={0}
        xAxisThickness={0}
        minHeight={5}
        xAxisLabelsHeight={20}
        hideYAxisText
        labelsDistanceFromXaxis={20}
        labelsExtraHeight={30}
        xAxisLabelsVerticalShift={10}
      />
  );
}
