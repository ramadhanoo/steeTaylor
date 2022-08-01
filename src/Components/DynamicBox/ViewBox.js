import React, { useRef } from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeSelectors } from '../../Redux/ThemeRedux';
import { useSelector } from 'react-redux';

export const ViewBox = React.forwardRef(({ children, ...props }, ref) => {  
  return (
    <View {...props}>
       {children}
    </View>
  );
},
);