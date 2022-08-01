import React, { useRef } from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeSelectors } from '../../Redux/ThemeRedux';
import { useSelector } from 'react-redux';
import styles from './BaseScreens.styles'
import { Colors } from '../../Themes';

export const BaseScreens = React.forwardRef(({ children, ...props }, ref) => {
  const themes = useSelector(ThemeSelectors.getColors);
  const isDark = useSelector((state) => state.theme.dark);

  return (<>
    <SafeAreaView style={{ flex: 0, backgroundColor: props.safeAreaColor }} />
    <View {...props} backgroundColor={themes.backgroundColor}>
      <StatusBar
        barStyle={isDark == true ? 'light-content' : 'dark-content'}
        backgroundColor={themes.backgroundColor} />
      {children}
    </View>
    <SafeAreaView style={{ flex: 0.06, backgroundColor: Colors.mainColor }} />
  </>);
},
);

BaseScreens.defaultProps = {
  safeAreaColor: Colors.white
}
