import {Dimensions} from 'react-native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

// Responsive Width and Height
export const wp = percentage => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};

export const hp = percentage => {
  const height = deviceHeight;
  return (percentage * height) / 100;
};

// Responsible List Columns
export const getColumn = () => {
  //Desktop view has 4 columns
  if (deviceWidth >= 1024) return 4;
  //Tablet view has 3 columns
  else if (deviceWidth >= 768) return 3;
  //Mobile view has 2 columns
  else return 2;
};

export const borderRadius = 15;
