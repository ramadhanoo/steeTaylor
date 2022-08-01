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
import styles from './Home.styles';
import { useHome } from './useHome';
import { Colors, Metrics, Images } from '../../Themes';
import { BaseScreens, Header, HeaderIcons, HeaderDetailPesanan } from '../../Components/index'
import { DataTylor } from "../../Data/Constans"

const Home = (props) => {
    const { data, state, actions } = useHome();
    const { navigateToLogin, actionsData, actionsDataNotification, directToMaps, logout } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>

            <HeaderIcons textHeader={"Stee Taylor"} onPressHeader={actionsDataNotification} />
            <ScrollView>
                <View style={styles.contentView}>
                    <Text style={styles.textHeader}>pilih kategori yang di butuhan</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={Images.header}
                            style={styles.imageStyle}
                        />
                    </View>
                    <TouchableOpacity onPress={directToMaps} style={styles.buttonLocation}>
                        <Text style={styles.textButton}>Lokasi SeeTaylor</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerKategori}>Kategori</Text>
                    <Text style={styles.textHeader}>Silahkan Pilih Model yang akan di jahit</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.containerCard}>
                        {DataTylor.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => actionsData(item)} key={index} style={styles.card}>
                                    <Image source={item.image} style={styles.imageCard} />
                                    <Text style={styles.cardTeext}>{item.text}</Text>
                                </TouchableOpacity>
                            )
                        })}


                    </ScrollView>
                    <TouchableOpacity onPress={logout} style={[styles.buttonLocation, { marginBottom: 40 }]}>
                        <Text style={styles.textButton}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </BaseScreens>
    )
}

export default Home;


