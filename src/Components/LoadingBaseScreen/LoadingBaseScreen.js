import React,{ useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLoadingBaseScreen } from './useLoadingBaseScreen'
import styles from './LoadingBaseScreen.styles'

export const LoadingBaseScreen = ({ route, navigation }) => {
    const { data, actions, state } = useLoadingBaseScreen()
    const { backgroundColor, textColor, themeRedux } = state;
    return (
        <View style={[{ backgroundColor: backgroundColor }, styles.container]}>
            <ActivityIndicator size={"large"} color={textColor} />
        </View>
    );
}

