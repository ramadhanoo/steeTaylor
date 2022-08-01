import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const useLoadingOverlay = () => {
    const themeRedux = useSelector((state) => state.theme);
    const {
        backgroundColor,
        secondBackground,
        textColor,
        secondText,
        bottomBlur,
        iconsColors,
        statusBarColor
    } = themeRedux.data[themeRedux.defaultTheme]


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


