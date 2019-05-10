import { createStackNavigator, createAppContainer } from 'react-navigation';
import CalculatorScreen from '../screens/CalculatorScreen';
import SecretScreen from '../screens/SecretScreen';

const Navigator = createStackNavigator({
	CalculatorScreen,
	SecretScreen
}, {
	initialRouteName: 'CalculatorScreen'
});

export default createAppContainer(Navigator);