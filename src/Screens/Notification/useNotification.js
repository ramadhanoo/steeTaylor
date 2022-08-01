import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index';
import {navigate} from  '../../Navigation/RootNavigation'


export const useNotification = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);
    const notif = useSelector((state) => state.notification);

    useEffect(() => {
        console.log(notif)
    }, []);

    const directDetail = (item) => {
        console.log("detail", item.detail)

        navigate("SummariesNotif", { pesanan: item.detail })
        
    }

    const showToast = () => {
        success("test","gaha")
    }

    return {
        state: {
            themes,
            notif
        },
        actions: {
            directDetail,
            showToast
        },
        data: {},
    };
}


