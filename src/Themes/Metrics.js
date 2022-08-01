import { Dimensions, Platform } from 'react-native';
import * as Utils from '../Transforms';

const { width, height } = Dimensions.get('window');
// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: Utils.scaleWithPixel(24),
  marginVertical: Utils.scaleWithPixel(16),
  section: Utils.scaleWithPixel(25),
  baseMargin: Utils.scaleWithPixel(10),
  doubleBaseMargin: Utils.scaleWithPixel(20),
  fourBaseMargin: Utils.scaleWithPixel(40),
  smallMargin: Utils.scaleWithPixel(5),
  doubleSection: Utils.scaleWithPixel(50),
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: Utils.scaleWithPixel(15),
    small: Utils.scaleWithPixel(20),
    medium: Utils.scaleWithPixel(30),
    large: Utils.scaleWithPixel(45),
    xl: Utils.scaleWithPixel(50),
  },
  images: {
    small: Utils.scaleWithPixel(20),
    medium: Utils.scaleWithPixel(40),
    large: Utils.scaleWithPixel(60),
    logo: Utils.scaleWithPixel(180),
  },
};

export default metrics;
