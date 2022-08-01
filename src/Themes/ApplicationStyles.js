import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';
import { scaleWithPixel } from '../Transforms';

const ApplicationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: scaleWithPixel(10),
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.line,
  },
  headerSectionRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleWithPixel(10),
    borderBottomWidth: 1,
    borderColor: Colors.greyDark,
  },
  headerSection: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingBottom: scaleWithPixel(10),
    borderBottomWidth: 1,
    borderColor: Colors.yellow,
  },
  imgProfile: {
    height: scaleWithPixel(50),
    width: scaleWithPixel(50),
    borderRadius: scaleWithPixel(25),
  },
  card: {
    borderRadius: scaleWithPixel(5),
    backgroundColor: Colors.white,
    marginBottom: Metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    marginHorizontal: scaleWithPixel(10),
    padding: scaleWithPixel(10),
  },
  shadowCard: {
    shadowColor: Colors.grey,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2
  }
});

export default ApplicationStyles;
