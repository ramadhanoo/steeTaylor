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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    cardTest: {
        width: "90%",
        alignSelf: 'center',
        borderColor:Colors.greyLight2,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: Colors.greyLight2,
        padding: 7
    },
    card: {
        width: "90%",
        paddingVertical: 8,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 8,
        alignSelf: 'center',
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
