/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    ScrollView
} from 'react-native';
import { Colors, Metrics } from '../../Themes';
import styles from './WelcomeScreens.styles';
import { useWelcomeScreens } from './useWelcomeScreens';

import { LoadingOverlay, BaseScreens, ViewBox, Header } from '../../Components/index'
import { ScreenWidth } from '../../Transforms';

const WelcomeScreens = (props) => {
    const { data, state, actions } = useWelcomeScreens();
    const { actionsData } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <View style={{ flex: 1, backgroundColor: Colors.mainColor }}>
                <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 30, marginTop: 20, fontWeight: "bold" }}>SteeTaylor</Text>
                    <Text style={{ color: Colors.black, fontSize: 15, marginTop: 20, fontWeight: "normal" }}>Penjahit Profesional yang terlatih</Text>
                    <Text style={{ color: Colors.black, fontSize: 15, marginTop: 10, fontWeight: "normal" }}>Harga Transparan dan kompetitif</Text>
                    <Text style={{ color: Colors.black, fontSize: 15, marginTop: 10, fontWeight: "normal" }}>Konformasi dan ketersediaan Instan</Text>
                </ScrollView>
                <TouchableOpacity onPress={actionsData} style={{ width: ScreenWidth * 0.9, height: 40, backgroundColor: Colors.white, alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 19, fontWeight: "bold" }}>Mulai</Text>
                </TouchableOpacity>
            </View>
        </BaseScreens>
    )
}

export default WelcomeScreens;


