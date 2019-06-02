import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import TabBar from '../components/TabBar';

export default class ProfileScreen extends Component {

	static navigationOptions = {
        header: null
    };

    state = {
        firstName: null,
        lastName: null,
        email: null,
        profilePictureUri: null
    };

    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.onPressLogout = this.onPressLogout.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
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

    logoutUser = async () => {
        try {
            await AsyncStorage.removeItem('session');
            const { navigation } = this.props;
            navigation.navigate('LoginScreen');
            alert('Haz finalizado la sesión.');
        } catch (error) {
            alert('Ocurrió un error al cerrar sesión.');
        }
    };

    onPressLogout() {
        this.logoutUser();
    }

    componentWillMount() {
        this.getUser();
    }

	render() {
		return (
		<View style={styles.container}>
            <Text style={styles.lblProfile}>Perfil</Text>
            <Image
                style={styles.imgProfilePicture}
                source={{uri: this.state.profilePictureUri}}
            />
			<Text style={styles.lblFullName}>{this.state.firstName} {this.state.lastName}</Text>
            <Text style={styles.lblEmail}>{this.state.email}</Text>
            <Button title="Cerrar sesión" onPress={this.onPressLogout} color="#ff0000" style={styles.btnLogout} />
            <TabBar selected="profile"/>
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
  lblProfile: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20
  },
  imgProfilePicture: {
    width: 220, 
    height: 220,
    marginBottom: 20,
    borderRadius: 8
  },
  lblFullName: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  lblEmail: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#1990B8'
  },
  btnLogout: {
    margin: 15,
    paddingHorizontal: 8,
    paddingVertical: 6
  }
});