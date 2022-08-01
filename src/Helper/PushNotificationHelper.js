import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import React, { useCallback } from 'react';
import { success } from '../Components/index'
import { Linking } from 'react-native'

export const FCMService = () => {

    const url = "templatereactnavigation://app/notification"

    const messageListener = useCallback(messaging().onMessage(async remoteMessage => {
        console.log('[FCMService] A new FCM message kocok!', remoteMessage);
        if (remoteMessage) {
            let notification = null;
            if (Platform.OS === 'ios') {
                notification = remoteMessage.date.notification;
                success(notification?.title ?? "Notification", notification?.body ?? "");
            } else {
                notification = remoteMessage.notification;
                success(notification?.title ?? "Notification", notification?.body ?? "");
            }

            Linking.openURL(url)
        }
    }), [])

    const register = (onRegister, onOpenNotification) => {
        checkPermission(onRegister);
        createNotificationListeners(
            onRegister,
            onOpenNotification,
        );
    }

    const registerAppWithFCM = async () => {
        if (Platform.OS === 'ios') {
            await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true);
        }
    };

    const checkPermission = (onRegister) => {
        messaging()
            .hasPermission()
            .then(enabled => {
                if (enabled) {
                    //user has permissions
                    getToken(onRegister);
                } else {
                    //User doesn't have permission
                    requestPermission(onRegister);
                }
            })
            .catch(error => {
                console.log('Permission Rejected', error);
            });
    }

    const getToken = (onRegister) => {
        messaging()
            .getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    onRegister(fcmToken);
                } else {
                    console.log("User doesn't have device token");
                }
            })
            .catch(error => {
                console.log('getToken rejected', error);
            });
    }

    const requestPermission = (onRegister) => {
        messaging()
            .requestPermission()
            .then(() => {
                getToken(onRegister);
            })
            .catch(error => {
                console.log('Request Permission rejected', error);
            });
    }

    const deleteToken = () => {
        messaging()
            .deleteToken()
            .catch(error => {
                console.log('Delete token error', error);
            });
    }

    const createNotificationListeners = (onRegister, onOpenNotification) => {
        // When the app is running, but in the background
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                '[FCM Serivce] onNotificationOpenedApp Notification caused app to open from background state: ',
                remoteMessage,
            );
            console.log("sikat")
            if (remoteMessage) {
                const notification = remoteMessage.notification;
                // console.log("Notification opened by device user", notification.getData());  
                onOpenNotification(notification);
            }
        });

        // When the app is opened from  a quit state.
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                console.log(
                    '[FCM Serivce] getInitialNotification Notification caused app to open from quit state: ',
                    remoteMessage,
                );
                
                if (remoteMessage) {
                    const notification = remoteMessage.notification;
                    onOpenNotification(notification);
                }
            });

        //Foreground state messages


        //Triggered when have new token
        messaging().onTokenRefresh(fcmToken => {
            console.log('New token refresh: ', fcmToken);
            onRegister(fcmToken);
        });
    }

    const unRegister = () => {
        if (messageListener) {
            console.log("lsakdfasbdkfbaskbdfabsrjf hahahahahaahah")
            messageListener();
        }
    };

    return {
        register
    };
}

