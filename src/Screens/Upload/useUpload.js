import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import { navigate } from '../../Navigation/RootNavigation'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import NotificationActions from '../../Redux/NotificationRedux';

import { Alert, PermissionsAndroid } from "react-native"


export const useUpload = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);
    const [pic, setPic] = useState("")

    useEffect(() => {

    }, []);

    const actionsData = (pesanan) => {
        console.log("pesasnan", pesanan)

        dispatch(NotificationActions.setNotif({
            data: [{
                id: 2,
                title: "pesanan anda sedang di Proses",
                isRead: false,
                detail: {
                    bahan: pesanan.bahan,
                    alamat: pesanan.alamat,
                    model: pesanan.model,
                    warna: pesanan.warna,
                    ukuran: pesanan.ukuran,
                    jk: pesanan.jk,
                    lingkarBadan: pesanan.lingkarBadan,
                    lingkarPinggang: pesanan.lingkarPinggang,
                    lingkarBahu: pesanan.lingkarBahu,
                    lingkarTangan: pesanan.lingkarTangan
                }
            }]
        }))
        success("Notification", "Pesanan anda sedang di proses");
        navigate("Berhasil");

    }

    const openCamera = async () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                launchCamera(options, (response) => {
                    console.log('Response = ', response);
                    setPic(response.assets[0].uri)

                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                        alert(response.customButton);
                    } else {
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
                });
            } else {
                Alert.alert('Permission Denied!', 'You need to give storage permission to take picture the file');
            }
        } catch (err) {
            console.warn(err);
        }




    }

    return {
        state: {
            themes,
            pic
        },
        actions: {
            actionsData,
            openCamera
        },
        data: {},
    };
}


