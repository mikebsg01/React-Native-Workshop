import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class TabBar extends Component {

	navigate = route => {
		const { navigation } = this.props;

		switch (route) {
			case 'articles':
				navigation.navigate('ArticleScreen');
				break;
			case 'red':
				navigation.navigate('RedScreen');
				break;
			case 'blue':
				navigation.navigate('BlueScreen');
				break;
			default:
				break;
		}
	}
	
	renderTab = ({ text, route }) => {
		const { selected } = this.props;

		return (
			<TouchableOpacity style={styles.tab} onPress={() => this.navigate(route)}>
				<Text>{text}</Text>
				{ selected === route && <View style={styles.tabLine}/> }
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderTab({ text: 'Artículos', route: 'articles' })}
				{this.renderTab({ text: 'Pantalla Roja', route: 'red' })}
				{this.renderTab({ text: 'Pantalla Azul', route: 'blue' })}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 56,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: '#f9f9f9',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	tabLine: {
		position: 'absolute',
		backgroundColor: 'red',
		height: 4,
		left: 16,
		right: 16,
		bottom: 0
	}
});

export default withNavigation(TabBar);