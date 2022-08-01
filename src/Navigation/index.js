import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,

} from 'react-native';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux'
import AuthStackScreens from './AuthStackScreens';
import { LoadingBaseScreen } from '../Components/index';
import HomeStackScreens from './HomeStackScreens';
import WelcomeScreens from '../Screens/WelcomeScreens/WelcomeScreens'


const { width, height } = Dimensions.get("window");


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const getTabBarVisibilityHome = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = ["Details"];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;

}

const getTabBarVisibilityProfile = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = ["Settings"];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;

}

const getTabBarVisibilityOrder = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;

}

const getTabBarVisibilityGaleri = (route) => {
  //   // const routeName = route.state ? route.state.routes[route.state.index].name : '';
  //   // const params = route.state ? route.state.routes[route.state.index].params : '';
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;

}


const MyTabBar = ({ state, descriptors, navigation }) => {

  const test = useSelector((state) => state.theme)


  const themeRedux = useSelector((state) => state.theme);
  const { backgroundColor, secondBackground, textColor, secondText, bottomBlur } = themeRedux.data[themeRedux.defaultTheme]

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }


  return (
    <View style={{ width: width, height: 75, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor, borderColor: secondBackground, position: 'absolute', bottom: 0 }}>
      <View style={{ flexDirection: 'row', backgroundColor: backgroundColor, height: 60, justifyContent: "center", alignItems: "center", width: '100%' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });



            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }


          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };


          //   var image = (isFocused) => {
          //     if (label === "Home") {
          //       return <Foundation name={"home"} size={normalize(20)} color={isFocused ? Colors.buttonColor : bottomBlur} />
          //     } else if (label === "Profile") {
          //       return <Zocial name={"feed-person"} size={normalize(20)} color={isFocused ? Colors.buttonColor : bottomBlur} />
          //     } else if (label === "Orders") {
          //       return <MaterialIcons name={"delivery-dining"} size={normalize(20)} color={isFocused ? Colors.buttonColor : bottomBlur} />
          //     } else if (label === "Galeri") {
          //       return <Ionicons name={"ios-images"} size={normalize(20)} color={isFocused ? Colors.buttonColor : bottomBlur} />
          //     }
          //   }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center", backgroundColor: backgroundColor, height: '100%', alignItems: 'center' }}
            >
              <View style={{ backgroundColor: backgroundColor, justifyContent: "space-between", alignItems: 'center', height: 40, marginTop: 10, }}>
                {/* {image(isFocused)} */}
                {/* <Text style={[Style1.mini, { marginTop: 5, color: isFocused ? Colors.mainColor : secondBackground }]}>{label}</Text> */}
              </View>

            </TouchableOpacity>
          );
        })}
      </View>
    </View>

  );
}


// const MyTabs = () => {
//   return (
//     <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>

//       <Tab.Screen name="Home" component={HomeStackScreen}
//         options={({ route }) => ({
//           tabBarVisible: getTabBarVisibilityHome(route),
//           headerShown: false
//         })}
//       />

//       <Tab.Screen name="Orders" component={OrderStackScreen}
//         options={({ route }) => ({
//           headerShown: false,
//           tabBarVisible: getTabBarVisibilityOrder(route),
//         })}
//       />


//       <Tab.Screen name="Galeri" component={GaleriStackScreens}
//         options={({ route }) => ({
//           headerShown: false,
//           tabBarVisible: getTabBarVisibilityGaleri(route),
//         })}
//       />

//       <Tab.Screen name="Profile" component={ProfileStackScreen}
//         options={({ route }) => ({
//           headerShown: false,
//           tabBarVisible: getTabBarVisibilityProfile(route),
//         })}
//       />


//     </Tab.Navigator>
//   );
// }

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingBaseScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="WelcomeScreens" component={WelcomeScreens} options={{
        headerShown: false
      }} />
      <Stack.Screen name="AuthStackScreens" component={AuthStackScreens} options={{
        headerShown: false
      }} />
      <Stack.Screen name="HomeStackScreens" component={HomeStackScreens} options={{
        headerShown: false
      }} />


    </Stack.Navigator>
  );
}


export default MyStack;