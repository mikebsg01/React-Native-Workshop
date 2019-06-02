import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, FlatList, ScrollView, Button, Image, Picker } from 'react-native';
import TabBar from '../components/TabBar';

export default class SearchScreen extends Component {

	static navigationOptions = {
		header: null
	};

	state = {
		firstName: null,
		lastName: null,
		email: null,
		profilePictureUri: null,
		breeds: [			
			'African',
			'Akita',
			'Beagle',
			'Borzoi',
			'Bouvier',
			'Boxer',
			'Chihuahua',
			'Chow',
			'Ibizan Hound',
			'Saluki'
		],
		breedSelected: null
	};

	constructor(props) {
		super(props);
		this.getUser = this.getUser.bind(this);
	}

	getUser = async () => {
		try {
			const session = JSON.parse(await AsyncStorage.getItem('session'));
			const { navigation } = this.props;

			if (session === null) {
				navigation.navigate('LoginScreen');
				return;
			}

			this.setState({
				firstName: session.firstName,
				lastName: session.lastName,
				email: session.email,
				profilePictureUri: session.profilePictureUri
			});
		} catch (error) {
			alert('Ocurrió un error al cargar los datos.');
		}
	};

	componentWillMount() {
		this.getUser();
	}

	onPressSearch = () => {
		const { navigation } = this.props;
		
		navigation.navigate({
			routeName: 'HomeScreen', 
			key: 'HomeScreen', 
			params: { 
				breed: this.state.breedSelected 
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.lblTitle}>Búsqueda de perritos por raza:</Text>
				<Picker
					style={styles.pickerBreed}
					selectedValue={this.state.breedSelected}
					onValueChange={(itemValue, itemIndex) => this.setState({ breedSelected: itemValue })}>
					{this.state.breeds.map((breed, index) => {
						return <Picker.Item label={breed} value={breed} key={index} />
					})}
				</Picker>
				<Button title="Buscar" onPress={this.onPressSearch} style={styles.btnSearch} />
				<TabBar selected="search" />
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
		backgroundColor: '#fff'
	},
	lblTitle: {
		fontSize: 22,
		textAlign: 'center',
		marginTop: 30,
		marginBottom: 15
	},
	pickerBreed: {
		width: 220,
		height: 60,
		marginBottom: 15
	},
	btnSearch: {
		marginVertical: 15,
		marginHorizontal: 5,
		paddingHorizontal: 8,
		paddingVertical: 6
	}
});