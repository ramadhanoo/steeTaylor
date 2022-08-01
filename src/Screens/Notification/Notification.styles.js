import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import { ScreenHeight, ScreenWidth, scaleWithPixel } from '../../Transforms';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textColor: {
        color: Colors.greyText,
        fontFamily: Fonts.type.black,
    },
    button: {
        width: 200,
        backgroundColor: 'blue',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        ...Fonts.style.inputBoldWhite
    },
    test: {
        height: 300,
        width: 100
    }
});
