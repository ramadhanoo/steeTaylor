import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index';
import { navigate, replace } from '../../Navigation/RootNavigation'
import { Alert } from 'react-native';
import SessionActions from '../../Redux/SessionRedux';


export const useLogin = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const session = useSelector((state) => state.session.data)
    const themes = useSelector(ThemeSelectors.getColors);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        
    }, []);

    const navigateToRegister = () => {
        navigate("Register");
    }

    const navigateToHome = () => {
        replace("HomeStackScreens");
    }

    const checkLogin = () => {
        if(email.toLocaleLowerCase() == session.email.toLocaleLowerCase() && password.toLocaleLowerCase() == session.password.toLocaleLowerCase()) {
            console.log("berhasil Login")
            dispatch(SessionActions.login());
            replace("HomeStackScreens");
        } else {
            Alert.alert("Warning", "Username atau password salah")
        }
    }


    return {
        state: {
            themes
        },
        actions: {
            navigateToRegister,
            navigateToHome,
            checkLogin,
            setPassword,
            setEmail,
            email,
            password
        },
        data: {},
    };
}


