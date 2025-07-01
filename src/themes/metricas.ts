import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
  paddingContainner: 20,
  padding: 10,
  margin: 16,
  borderRadius: 8,
  statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 20,
  isTablet: width >= 768,
  gap: 10
};

export default metrics;