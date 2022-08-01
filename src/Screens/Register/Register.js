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
import styles from './Register.styles';
import { useRegister } from './useRegister';
import { Colors, Metrics } from '../../Themes';
import { LoadingOverlay, BaseScreens, ViewBox, Header } from '../../Components/index'

const Register = (props) => {
    const { data, state, actions } = useRegister();
    const { navigateToLogin, regis } = actions;
    const { themes } = state;


    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <Header textHeader={"Stee Taylor"} />
            <ScrollView contentContainerStyle={styles.containerStyle}>
                <View style={styles.buttonInput}>
                    <Text style={styles.text}>Daftar Sekarang Yuk</Text>
                </View>
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    onChangeText={(text) => actions.setNama(text)}
                    value={state.nama}
                    placeholder={"Nama"}
                />
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    onChangeText={(text) => actions.setTelepon(text)}
                    value={state.telepon}
                    keyboardType={"number-pad"}
                    placeholder={"No Hp"}
                />
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    onChangeText={(text) => actions.setEmail(text)}
                    value={state.email}
                    placeholder={"Email"}
                />
                <TextInput
                    placeholderTextColor={Colors.black}
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text) => actions.setPassword(text)}
                    value={state.password}
                    placeholder={"Kata Sandi"}
                />
                <TouchableOpacity onPress={navigateToLogin}>
                    <Text style={styles.textDesc}>sudah punya akun? masuk</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={regis} style={styles.button}>
                    <Text style={styles.textHeader}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        </BaseScreens>
    )
}

export default Register;


