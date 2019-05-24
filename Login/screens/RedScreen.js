import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from '../components/TabBar';

export default class RedScreen extends Component {

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.txt}>Pantalla roja</Text>
			<TabBar selected="red"/>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		backgroundColor: '#f00'
	},
	txt: {
		color: '#ffff'
	}
});