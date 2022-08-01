import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import styles from './Upload.styles';
import { useUpload } from './useUpload';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderDetailPesanan, HeaderIcons } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"
import { ScreenHeight, ScreenWidth } from '../../Transforms';

const Upload = (props) => {
    const { data, state, actions } = useUpload();
    const { actionsData } = actions;
    const { themes } = state;

    const { pesanan } = props.route.params

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <HeaderDetailPesanan textHeader={`Bukti Pembayaran`} />
            <ScrollView>
                <View style={styles.containerBahan}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 18, }}>Kirim Screen Shoot Pembayaran</Text>
                    <TouchableOpacity onPress={actions.openCamera} style={{ width: ScreenWidth * 0.8, height: (ScreenWidth * 0.8) * 1, backgroundColor: Colors.greyLight2, marginTop: 10, borderColor: Colors.black, borderWidth: 1, }}>
                        <Image source={{ uri: state.pic }} style={{ width: "100%", height: '100%' }} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={actionsData} style={[styles.cardContent, { marginRight: 20, alignItems: 'center', marginTop: 8, paddingHorizontal: 10 }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, }}>Konfirmasi</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginRight: 8, justifyContent: 'flex-end', marginTop: 30, paddingBottom: 50, }}>
                    <TouchableOpacity onPress={() => actionsData(pesanan)} style={[styles.cardContent, { marginRight: 20, alignItems: 'center' }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>Selesai</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </BaseScreens>
    )
}

export default Upload;


