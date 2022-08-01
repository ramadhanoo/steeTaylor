/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Colors, Fonts } from '../../Themes';
import styles from './Notification.styles';
import { useNotification } from './useNotification';
import { LoadingOverlay, BaseScreens, ViewBox, HeaderDetailPesanan } from '../../Components/index'
import { ScreenWidth } from '../../Transforms';

const Notification = (props) => {
    const { data, state, actions } = useNotification();
    const { actionsData, showToast, directDetail } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <HeaderDetailPesanan textHeader={'Notification'} />


            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 10 }}>
                {
                    state.notif.data.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => directDetail(item)} style={{ width: ScreenWidth * 0.8, height: 40, elevation: 5, backgroundColor: Colors.white, justifyContent: 'center', marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }}>
                                <Text style={{ color: Colors.black }}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </BaseScreens>
    )
}

export default Notification;


