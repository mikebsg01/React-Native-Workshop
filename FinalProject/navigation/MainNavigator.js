import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Navigator = createStackNavigator({
    LoginScreen,
    RegisterScreen,
    ProfileScreen,
    HomeScreen,
    SearchScreen
}, {
	initialRouteName: 'LoginScreen'
});

export default createAppContainer(Navigator);