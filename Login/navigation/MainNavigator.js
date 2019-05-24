import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import ArticleScreen from '../screens/ArticleScreen';
import RedScreen from '../screens/RedScreen';
import BlueScreen from '../screens/BlueScreen';

const Navigator = createStackNavigator({
	LoginScreen,
	ArticleScreen,
	RedScreen,
	BlueScreen
}, {
	initialRouteName: 'LoginScreen'
});

export default createAppContainer(Navigator);