import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import { ScreenHeight, ScreenWidth, scaleWithPixel } from '../../Transforms';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
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
    },
    header: {
        width: ScreenWidth,
        height: 60,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center'
    },
    textHeader: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
    },
    textDesc: {
        marginTop: 16,
        marginBottom: 10,
        fontSize: 16,
        color: Colors.black,
        fontWeight: "normal",
    },
    textInput: {
        width: ScreenWidth * 0.8,
        height: 40,
        backgroundColor: Colors.greyLight2,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: Colors.greyLight2,
        borderWidth: 1,
        marginTop: 10,
        color: Colors.black
    },
    button: {
        width: ScreenWidth * 0.8,
        backgroundColor: Colors.mainColor,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textStyle: {
        marginTop: 20,
        fontSize: 20,
        color: Colors.black,
        fontWeight: "normal",
    },
    containerStyle: {
        alignItems: 'center',
        backgroundColor: Colors.mainColor
    }
});
