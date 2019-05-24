import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TabBar from '../components/TabBar';

const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];

export default class ArticleScreen extends Component {

  render() {
    return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContentContainer}>
				{cards.map(card => {
				return <View style={[styles.card, styles[card]]} key={card}>
					<Text style={styles.cardText}>Texto {card}</Text>
				</View>
				})}
			</ScrollView>
			<TabBar selected="articles"/>
	  	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},	
	scrollContentContainer: {
		backgroundColor: '#fff',
		paddingVertical: 30,
		paddingHorizontal: 15
	},
	card: {
		flex: 1,
		paddingVertical: 15,
		paddingHorizontal: 20,
		minHeight: 180,
		maxHeight: 180,
		borderRadius: 8,
		elevation: 8,
		marginBottom: 25
	},
	card1: {
		backgroundColor: '#FBB13C'
	},
	card2: {
		backgroundColor: '#F63E02'
	},
	card3: {
		backgroundColor: '#1B5299'
	},
	card4: {
		backgroundColor: '#60992D'
	},
	card5: {
		backgroundColor: '#D81159'
	},
	cardText: {
		color: '#f9f9f9'
	}
});