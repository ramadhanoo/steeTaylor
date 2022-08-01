import { StyleSheet } from 'react-native';
import { scaleWithPixel } from '../../Transforms';

export default StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        padding: 10,
        width: scaleWithPixel(70),
        height: scaleWithPixel(70),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        justifyContent: 'center', 
        margin: 0,
        alignItems: 'center'
    }
});
