import React, { useState } from "react";
import {
    View,
    ActivityIndicator,
    Text
} from "react-native";
import styles from './Header.styles'

export const HeaderDetailPesanan = ({ textHeader }) => {

    return (
        <View style={styles.headerDetail}>
            <Text style={styles.textHeaderDetail}>{textHeader}</Text>
        </View>
    )
}

HeaderDetailPesanan.defaultProps = {
    textHeader: ""
};
