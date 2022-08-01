import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index';
import { navigate, replace } from '../../Navigation/RootNavigation'
import { Alert } from 'react-native';
import SessionActions from '../../Redux/SessionRedux';


export const useRegister = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nama, setNama] = useState("");
    const [telepon, setTelepon] = useState("");

    useEffect(() => {
        
    }, []);


    const navigateToLogin = () => {
        navigate("Login")
    }

    const regis = () => {
        if(email == "" || password == "" || nama == "" || telepon == "") {
            Alert.alert("Warning","Semua form harus di isi")
        } else {
            console.log("Berhasil");
            dispatch(SessionActions.setSession({ data: {  
                id: 1,
                nama: nama,
                email: email,
                noHp: telepon,
                password: password
            }}));
            dispatch(SessionActions.login());
            replace("HomeStackScreens"); 
        }
    }

    return {
        state: {
            themes,
            email,
            password,
            telepon,
            nama
        },
        actions: {
            navigateToLogin,
            regis,
            setEmail,
            setPassword,
            setNama,
            setTelepon
        },
        data: {},
    };
}


