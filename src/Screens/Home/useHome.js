import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index';
import { navigate, replace } from '../../Navigation/RootNavigation'
import { Linking } from 'react-native';
import SessionActions from '../../Redux/SessionRedux';
import NotificationActions from '../../Redux/NotificationRedux';


export const useHome = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const notification = useSelector((state) => state.notification.data)
    const themes = useSelector(ThemeSelectors.getColors);

    useEffect(() => {
        
    }, []);

    const actionsData = (data) => {
        navigate("Pesanan", { dataDetail: data })
    }

    const actionsDataNotification = (data) => {
        navigate("Notification")
    }

    const directToMaps = () => {
        const url = Platform.select({
            ios: `comgooglemaps://?center=-6.1699936,106.8309278&q=-6.1699936,106.8309278&zoom=14&views=traffic"`,
            android: `geo://?q=-6.1699936,106.8309278`,
        });
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(url);
                } else {
                    const browser_url = `https://www.google.de/maps/@-6.1699936,106.8309278`;
                    return Linking.openURL(browser_url);
                }
            })
            .catch(() => {
                if (Platform.OS === 'ios') {
                    Linking.openURL(
                        `maps://?q=-6.1699936,106.8309278`,
                    );
                }
            });
    }

    const logout = () => {
        dispatch(SessionActions.clearSession());
        dispatch(NotificationActions.reset());
        replace("AuthStackScreens");
    }


    return {
        state: {
            themes
        },
        actions: {
            actionsData,
            actionsDataNotification,
            directToMaps,
            logout
        },
        data: {},
    };
}


