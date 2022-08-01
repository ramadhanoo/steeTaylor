import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import { navigate } from '../../Navigation/RootNavigation'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



export const usePembayaran = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    useEffect(() => {
        
    }, []);

    const actionsData = (pesanan) => {
        navigate("Upload", { pesanan: pesanan })
    }

    const openCamera = () => {
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } 
            else if (response.errorCode) {
                Alert.alert('Warning', 'Camera Not Availble');
            } else if (response.errorMessage) {
           
                Alert.alert('Warning', 'Camera Not Availble');
            } else {
                const source = { uri: response.uri };
                console.log("ada", source)
            }
        });
            
    }

    return {
        state: {
            themes
        },
        actions: {
            actionsData,
            openCamera
        },
        data: {},
    };
}


