import React, { useState } from "react";
import {
    View,
    ActivityIndicator,
} from "react-native";
import Modal from 'react-native-modal';
import styles from './LoadingOverlay.styles'
import { useLoadingOverlay } from "./useLoadingOverlay";

export const LoadingOverlay = ({ visible }) => {
    const { data, state, actions } = useLoadingOverlay();
    const { backgroundColor, themeRedux, textColor } = state

    return (
        <Modal
            isVisible={visible}
            style={styles.modal}
            animationIn={"fadeIn"}>
            <View style={[{ backgroundColor: backgroundColor }, styles.container]}>
                <ActivityIndicator size={"large"} color={textColor} />
            </View>
        </Modal>
    )
}

LoadingOverlay.defaultProps = {
    visible: false
  };
