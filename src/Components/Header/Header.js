import React, { useState } from "react";
import {
    View,
    ActivityIndicator,
    Text
} from "react-native";
import styles from './Header.styles'

export const Header = ({ textHeader }) => {

    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{textHeader}</Text>
        </View>
    )
}

Header.defaultProps = {
    textHeader: ""
};
