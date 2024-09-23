import {BarChart} from 'react-native-gifted-charts';
import {View} from 'react-native';
import {UIColors} from '../constants/uielements';
import {wp} from '../constants/responsive';

export default function NutriGraph({props}) {
  return (
    <View style={{marginVertical: wp(5)}}>
      <BarChart
        key={props}
        isAnimated
        formatYLabel={value => `${value}g`}
        disableScroll
        adjustToWidth={true}
        autoCenterTooltip={true}
        yAxisTextStyle={{
          fontSize: 10,
          color: UIColors.semiBlack,
          fontFamily: 'SpaceMono',
        }}
        xAxisLabelTextStyle={{
          fontSize: 10,
          color: UIColors.semiBlack,
          fontFamily: 'SpaceMono',
        }}
        labelWidth={30}
        labelsDistanceFromXaxis={0}
        endSpacing={5}
        fromZero={true}
        showValuesAsTopLabel
        topLabelTextStyle={{
          fontSize: 10,
          lineHeight: 20,
          color: UIColors.semiBlack,
          fontFamily: 'SpaceMono',
        }}
        hideRules
        barWidth={30}
        showFractionalValues={true}
        frontColor={UIColors.gradient1[1]}
        // gradientColor={'#FF9800'}
        // showGradient
        barBorderTopLeftRadius={4}
        barBorderTopRightRadius={4}
        data={props}
        yAxisThickness={1}
        xAxisThickness={1}
        minHeight={5}
        xAxisLabelsHeight={20}
        xAxisLabelsVerticalShift={10}
      />
    </View>
  );
}
