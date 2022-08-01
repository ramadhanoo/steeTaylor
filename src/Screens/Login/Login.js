/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    ScrollView
} from 'react-native';
import { Colors, Metrics } from '../../Themes';
import styles from './Login.styles';
import { useLogin } from './useLogin';

import { LoadingOverlay, BaseScreens, ViewBox, Header } from '../../Components/index'

const Login = (props) => {
    const { data, state, actions } = useLogin();
    const { navigateToRegister, navigateToHome, checkLogin, setEmail, setPassword, password, email } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <Header textHeader={"Stee Taylor"} />
            <ScrollView contentContainerStyle={styles.containerStyle}>
                <Text style={styles.textStyle}>Masuk</Text>
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    onChangeText={(text) => setEmail(text)}
                    placeholder={"Telepon atau email"}
                    value={email}
                />
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    placeholder={"Password"}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    value={password}
                />
                <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={styles.textDesc}>lupa kata sandi atau registrasi ulang</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={checkLogin} style={styles.button}>
                    <Text style={styles.textHeader}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </BaseScreens>
    )
}

export default Login;


