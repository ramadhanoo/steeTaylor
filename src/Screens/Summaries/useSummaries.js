import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import { navigate } from '../../Navigation/RootNavigation'


export const useSummaries = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);
    const [alamat, setAlamat] = useState("")

    useEffect(() => {
        
    }, []);

    const actionsData = (pesanan) => {
        var data = {
            ...pesanan,
            alamat: alamat 
        }

        navigate("Pembayaran", { pesanan: data })
    }

    return {
        state: {
            themes,
            alamat
        },
        actions: {
            actionsData,
            setAlamat
        },
        data: {},
    };
}


