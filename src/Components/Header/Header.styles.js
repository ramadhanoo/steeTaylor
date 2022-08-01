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
    },
    header: {
        width: ScreenWidth,
        height: 60,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    headerDetail: {
        width: ScreenWidth,
        height: 60,
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerIcons: {
        width: ScreenWidth,
        height: 60,
        backgroundColor: Colors.mainColor,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: "bold",
        paddingBottom: 10
    },
    textHeaderDetail: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: "bold",
    },
    icons: {
        width: 30,
        height: 30,
    }

});
