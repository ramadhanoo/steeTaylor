import Toast from 'react-native-toast-message';

const success = (title, deskripsi) => {
    return Toast.show({
        type: 'success',
        text1: title,
        text2: deskripsi,
        position: 'top'
      });
}

const error = (title, deskripsi) => {
    return Toast.show({
        type: 'error',
        text1: title,
        text2: deskripsi,
        position: 'bottom'
      });
}

export {
    success,
    error
}