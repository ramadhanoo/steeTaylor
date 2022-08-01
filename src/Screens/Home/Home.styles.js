import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import { ScreenHeight, ScreenWidth, scaleWithPixel } from '../../Transforms';

const imageWidth = ScreenWidth * 0.8;
const heightWidth = imageWidth * 1;

export default StyleSheet.create({
    container: {
        flex: 1, 
    },
    textHeader: {
        color: Colors.black,
        marginTop: 10
    },
    cardTeext: {
        alignSelf: 'center',
        color: Colors.black,
        marginTop: 8
    },
    textButton: {
        color: Colors.black,
    },
    contentView: {
        paddingHorizontal: 20
    },
    imageContainer: {
        marginTop: 10,
        width: imageWidth,
        height: heightWidth,
        backgroundColor: Colors.greyLight2,
        alignSelf: 'center',
        borderRadius: 10
    },
    imageStyle: {
        width: imageWidth,
        height: heightWidth,
        borderRadius: 10
    },
    imageCard: {
        width: ScreenWidth * 0.4,
        height: (ScreenWidth * 0.4) * 1,
        borderRadius: 10
    },
    buttonLocation: {
        alignSelf: 'center',
        height: 40,
        width: ScreenWidth * 0.6,
        backgroundColor: Colors.white,
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    headerKategori: {
        marginTop: 30,
        fontSize: 20,
        color: Colors.black
    },
    card: {
        width: ScreenWidth * 0.4,
        height: (ScreenWidth * 0.4) * 1,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginLeft: 10,
        backgroundColor: Colors.greyLight2,
    },
    containerCard: {
        marginTop: 10,
        paddingBottom: 40,
    },

});
