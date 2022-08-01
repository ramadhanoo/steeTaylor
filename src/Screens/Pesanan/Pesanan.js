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
import styles from './Pesanan.styles';
import { usePesanan } from './usePesanan';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderDetailPesanan, HeaderIcons } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"
import { ScreenHeight } from '../../Transforms';

const Pesanan = (props) => {
    const { data, state, actions } = usePesanan();
    const { actionsData } = actions;
    const { themes } = state;
    const { dataDetail } = props.route.params;
    console.log("data detauk", dataDetail);

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <HeaderDetailPesanan textHeader={`Baju ${dataDetail.text}`} />
            <ScrollView>
                <View style={styles.containerBahan}>
                    <View style={styles.containerChild}>
                        <TouchableOpacity style={styles.card}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Pilih Bahan</Text>
                        </TouchableOpacity>
                        {
                            dataDetail.bahan.map((item) => {
                                return (
                                    <TouchableOpacity onPress={() => actions.selectedBahan(item)} style={[styles.card, { backgroundColor: state.bahan == item ? Colors.mainColor : Colors.white }]}>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14, }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={styles.containerChild}>
                        <TouchableOpacity style={styles.card}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Pilih Model</Text>
                        </TouchableOpacity>
                        {
                            dataDetail.model.map((item) => {
                                return (
                                    <TouchableOpacity onPress={() => actions.selectedModel(item)} style={[styles.card, { backgroundColor: state.model == item ? Colors.mainColor : Colors.white }]}>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    
                </View>

                <View style={styles.containerTest}>
                    <View style={styles.cardWarna}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Warna</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap" }}>
                        {
                            dataDetail.warna.map((item) => {
                                return (
                                    <TouchableOpacity  onPress={() => actions.selectedWarna(item)}  style={[styles.cardContent,  { backgroundColor: state.warna == item ? Colors.mainColor : Colors.white }]}>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                </View>

                <View style={[styles.containerTest, { marginTop: 10 }]}>
                    <View style={styles.cardWarna}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Ukuran</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap" }}>
                        {
                            dataDetail.ukuran.map((item) => {
                                return (
                                    <TouchableOpacity  onPress={() => actions.selectedUkuran(item)}  style={[styles.cardContent,  { backgroundColor: state.ukuran == item ? Colors.mainColor : Colors.white }]}>
                                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                </View>

                <View style={[styles.containerTest, { marginTop: 20 }]}>
                    <View style={styles.cardWarna}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Jenis Kelamin</Text>
                    </View>
                    <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap" }}>
                        <TouchableOpacity onPress={() => actions.selectedJk("L")}  style={[styles.cardContent,  { backgroundColor: state.jk == "L" ? Colors.mainColor : Colors.white }]}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => actions.selectedJk("P")}  style={[styles.cardContent,  { backgroundColor: state.jk == "P" ? Colors.mainColor : Colors.white }]}>
                            <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>P</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={[styles.containerTest, { marginTop: 20 }]}>
                    <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 16, fontWeight: "bold", }}>Custom Ukuran</Text>
                    <View style={{ width: "100%", backgroundColor: Colors.greyLight2, marginTop: 10, borderColor: Colors.greyLight2, borderWidth: 1 }}>
                        <View style={{ paddingHorizontal: 10, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black" }}>Lingkar Badan: </Text>
                            <TextInput value={state.lingkarBadan} onChangeText={(text) => actions.setLingkarBadan(text)} style={{ color: "black" }} />
                        </View>
                        <View style={{ paddingHorizontal: 10, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black" }}>Lingkar Pinggang: </Text>
                            <TextInput value={state.lingkarPinggang} onChangeText={(text) => actions.setLingkarPinggang(text)} style={{ color: "black" }} />
                        </View>
                        <View style={{ paddingHorizontal: 10, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black" }}>Lingkar Bahu: </Text>
                            <TextInput value={state.lingkarBahu} onChangeText={(text) => actions.setLingkarBahu(text)} style={{ color: "black" }} />
                        </View>
                        <View style={{ paddingHorizontal: 10, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black" }}>Lingkar Tangan: </Text>
                            <TextInput value={state.lingkarTangan} onChangeText={(text) => actions.setLingkarTangan(text)} style={{ color: "black" }} />
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', flexDirection: 'row', marginRight: 8, justifyContent: 'flex-end' , marginTop: 30, paddingBottom: 50}}>
                    <TouchableOpacity onPress={actionsData} style={[styles.cardContent, { marginRight: 20 }]}>
                        <Text numberOfLines={1} adjustsFontSizeToFit style={{ color: "black", fontSize: 14 }}>Lanjut</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </BaseScreens>
    )
}

export default Pesanan;


