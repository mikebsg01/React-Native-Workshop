import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Navigator = createStackNavigator({
    LoginScreen,
    RegisterScreen,
    ProfileScreen
}, {
	initialRouteName: 'LoginScreen'
});

export default createAppContainer(Navigator);