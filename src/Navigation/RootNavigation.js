import { createNavigationContainerRef,StackActions } from '@react-navigation/native';


const navigationRef = createNavigationContainerRef()

const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

const push = (...args) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(...args));
    }
}

const replace = (...args) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(...args));
    }
}


export {
    navigationRef,
    navigate,
    push,
    replace
}