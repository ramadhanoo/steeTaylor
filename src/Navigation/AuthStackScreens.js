import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Notification from '../Screens/Notification/Notification'
import Register from '../Screens/Register/Register'


const Stack = createNativeStackNavigator();



const AuthStackScreen = () => {
  return (
    <Stack.Navigator mode={"modal"}>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Register" component={Register} options={{
        headerShown: false
      }} />


    </Stack.Navigator>
  );
}

export default AuthStackScreen;