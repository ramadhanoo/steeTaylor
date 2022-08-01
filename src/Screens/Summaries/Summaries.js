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
import styles from './Summaries.styles';
import { useSummaries } from './useSummaries';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderDetailPesanan, HeaderIcons } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"
import { ScreenHeight } from '../../Transforms';
import { useSelector, useDispatch } from 'react-redux'

const Summaries = (props) => {
    const { data, state, actions } = useSummaries();
    const session = useSelector((state) => state.session.data)
    const { actionsData } = actions;
    const { themes } = state;

    const { pesanan } = props.route.params

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={[styles.container]}>
            <HeaderDetailPesanan textHeader={`Detail Pesanan`} />
            <ScrollView>
                <View style={styles.containerBahan}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 18, }}>Data Pelanggan</Text>
                </View>
                <TouchableOpacity style={[styles.card]}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>Nama: {session.nama}</Text>
                </TouchableOpacity>

                <TextInput placeholder='enter your alamat' value={state.alamat} onChangeText={(text) => actions.setAlamat(text)} placeholderTextColor={"#dcdcdc"} style={[styles.card, { color: "black", fontSize: 14, fontWeight: "normal" }]} />

                <View style={[styles.cardTest]}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 17, fontWeight: "normal" }}>Jahitan Yang Di Pesan</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, fontWeight: "normal", marginTop: 10 }}>-Bahan: {pesanan.bahan}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, fontWeight: "normal", marginTop: 10 }}>-Model:  {pesanan.model}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, fontWeight: "normal", marginTop: 10 }}>-Warna: {pesanan.warna}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, fontWeight: "normal", marginTop: 10 }}>-Ukuran:  {pesanan.ukuran}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 13, fontWeight: "normal", marginTop: 10, marginLeft: 5 }}>Lingkar Badan: {pesanan.lingkarBadan}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 13, fontWeight: "normal", marginTop: 10, marginLeft: 5 }}>Lingkar Pinggang: {pesanan.lingkarPinggang} </Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 13, fontWeight: "normal", marginTop: 10, marginLeft: 5 }}>Lingkar Bahu:  {pesanan.lingkarBahu}</Text>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 13, fontWeight: "normal", marginTop: 10, marginLeft: 5 }}>Lingkar Tangan:  {pesanan.lingkarTangan}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginRight: 8, justifyContent: 'flex-end', marginTop: 30, paddingBottom: 50 }}>
                    <TouchableOpacity onPress={() => actionsData(pesanan)} style={[styles.cardContent, { marginRight: 20 }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>Lanjut</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </BaseScreens>
    )
}

export default Summaries;


