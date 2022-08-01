import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import REDUX_PERSIST from '../../Config/ReduxPersist';
import StartupActions from '../../Redux/StartupRedux';
 


export const useLoadingBaseScreen = () => {
    const themeRedux = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const {
        backgroundColor,
        secondBackground,
        textColor,
        secondText,
        bottomBlur,
        iconsColors,
        statusBarColor,
        transparentColor 
    } = themeRedux.data[themeRedux.defaultTheme]

    useEffect(() => {

          dispatch(StartupActions.startup())
    }, [])

    return {
        state: {
            backgroundColor,
            themeRedux,
            textColor
        },
        actions: {},
        data: {},
    };
}


