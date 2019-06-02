import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ProfileScreen extends Component {

	static navigationOptions = {
        header: null
    };

    state = {
        firstName: null,
        lastName: null,
        email: null
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
                email: session.email
            });
        } catch (error) {
            alert('Ocurrió un error al cargar los datos.');
        }
    };

    componentDidMount() {
        this.getUser();
    }

	render() {
		return (
		<View style={styles.container}>
            <Text>Perfil</Text>
			<Text>Nombre: {this.state.firstName}</Text>
            <Text>Apellido(s): {this.state.lastName}</Text>
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
  }
});