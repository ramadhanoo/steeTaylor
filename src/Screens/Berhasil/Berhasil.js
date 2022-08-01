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
import styles from './Berhasil.styles';
import { useBerhasil } from './useBerhasil';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderDetailPesanan, HeaderIcons } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"
import { ScreenHeight } from '../../Transforms';

const Berhasil = (props) => {
    const { data, state, actions } = useBerhasil();
    const { actionsData } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <HeaderDetailPesanan textHeader={`Pembayaran`} />
            <ScrollView>
                <View style={styles.containerBahan}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 18, }}>Pembayaran Berhasil Terima kasih</Text>
                    <TouchableOpacity onPress={actionsData} style={[styles.cardContent, { marginRight: 20, alignItems: 'center', marginTop: 50, paddingHorizontal: 10 }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, }}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </BaseScreens>
    )
}

export default Berhasil;


