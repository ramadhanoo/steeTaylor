import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Pesanan from '../Screens/Pesanan/Pesanan';
import Summaries from '../Screens/Summaries/Summaries'
import Pembayaran from '../Screens/Pembayaran/Pembayaran';
import Upload from '../Screens/Upload/Upload';
import Berhasil from '../Screens/Berhasil/Berhasil';
import Notification from '../Screens/Notification/Notification'
import SummariesNotif from '../Screens/Summaries/SummariesNotif';

const Stack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <Stack.Navigator mode={"modal"}>
      <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Pesanan" component={Pesanan} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Summaries" component={Summaries} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Pembayaran" component={Pembayaran} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Upload" component={Upload} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Berhasil" component={Berhasil} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Notification" component={Notification} options={{
        headerShown: false
      }} />
      <Stack.Screen name="SummariesNotif" component={SummariesNotif} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  ); s
}

export default HomeStackScreens;