import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import { ScreenHeight, ScreenWidth, scaleWithPixel } from '../../Transforms';

const imageWidth = ScreenWidth * 0.8;
const heightWidth = imageWidth * 1;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBahan: {
        width: ScreenWidth,
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginTop: 20
    },
    containerTest: {
        width: ScreenWidth,
        paddingHorizontal: 20,
        backgroundColor: 'transparent'
    },
    containerChild: {
        width: '45%'
    },
    card: {
        width: "100%",
        paddingVertical: 8,
        backgroundColor: Colors.white,
        paddingHorizontal: 6,
        borderRadius: 3,
        justifyContent: 'center',
        elevation: 6,
        marginTop: 8
    },
    cardContent: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.white,
        elevation: 5,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 5
    },
    cardWarna: {
        width: "100%",
        paddingVertical: 8,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 6,
        marginTop: 8,
        paddingHorizontal: 5
    }
});
