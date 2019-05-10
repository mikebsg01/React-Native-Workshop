import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SecretScreen extends Component {
	render() {
		return (
			<View style={style.container}>
				<Text style={style.text}>Congrats! You've found the secret zone... :)</Text>
			</View>
		);
	}
};

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		margin: 30,
		textAlign: 'center',
		fontSize: 24,
		lineHeight: 32
	}
});