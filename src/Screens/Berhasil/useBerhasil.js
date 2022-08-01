import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import { navigate, replace } from '../../Navigation/RootNavigation'


export const useBerhasil = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    useEffect(() => {
        
    }, []);

    const actionsData = () => {
        replace("HomeStackScreens")
    }

    return {
        state: {
            themes
        },
        actions: {
            actionsData
        },
        data: {},
    };
}


