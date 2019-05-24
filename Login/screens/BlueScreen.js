import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from '../components/TabBar';

export default class BlueScreen extends Component {

  render() {
    return (
		<View style={styles.container}>
			<Text style={styles.txt}>Pantalla azul</Text>
			<TabBar selected="blue"/>
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
		backgroundColor: '#00f'
	},
	txt: {
		color: '#ffff'
	}
});