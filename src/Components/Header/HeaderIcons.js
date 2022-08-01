import React, { useState } from "react";
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity
} from "react-native";
import styles from './Header.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../Themes";

export const HeaderIcons = ({ textHeader, onPressHeader }) => {

    return (
        <View style={styles.headerIcons}>
            <Text style={styles.textHeader}>{textHeader}</Text>
            <TouchableOpacity onPress={onPressHeader} style={styles.icons}>
                <Ionicons name="notifications" size={25} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

HeaderIcons.defaultProps = {
    textHeader: ""
};
