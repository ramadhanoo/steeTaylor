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
import styles from './Pembayaran.styles';
import { usePembayaran } from './usePembayaran';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderDetailPesanan, HeaderIcons } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"
import { ScreenHeight, ScreenWidth } from '../../Transforms';

const Pembayaran = (props) => {
    const { data, state, actions } = usePembayaran();
    const { actionsData, openCamera } = actions;
    const { themes } = state;

    const { pesanan } = props.route.params

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <HeaderDetailPesanan textHeader={`Pembayaran`} />
            <ScrollView>
                <View style={styles.containerBahan}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 18, }}>Silahkan Pilih Metode Pembayaran</Text>
                    <View style={[styles.card]}>
                        <Text style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>Nomer Rekening Tujuan: 12323443434543534 AN Isti Marsih Bank Mandiri</Text>
                    </View>

                    <View style={[styles.card, { borderRadius: 10, paddingHorizontal: 10 }]}>
                        <Image source={Images.bca} style={{ width: "100%", height: 85, marginTop: 7 }} />
                        <Image source={Images.bri} style={{ width: "100%", height: 85 ,  marginTop: 7}} />
                        <Image source={Images.mandiri} style={{ width: "100%", height: 85,  marginTop: 7 }} />
                    </View>
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

export default Pembayaran;


