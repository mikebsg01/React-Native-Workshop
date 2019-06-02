import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {

	static navigationOptions = {
        header: null
    };

    state = {
        email: null,
        password: null
    };

    constructor(props) {
        super(props);
        this.keepSession = this.keepSession.bind(this);
        this.onPressLogin = this.onPressLogin.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    keepSession = async () => {
        try {
            const session = await AsyncStorage.getItem('session');

            if (session != null) {
                const { navigation } = this.props;
                navigation.navigate('HomeScreen');
            }
        } catch (error) {
            alert('Ocurrió un error al cargar los datos.');
        }
    };

    componentWillMount() {
        this.keepSession();
    }

    async getRandomDogImage() {
        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let responseJson = await response.json();
        return responseJson.message;
    }

    loginUser = async (user) => {
        try {
            const users = JSON.parse(await AsyncStorage.getItem('users')) || [];

            let userFound = users.find((e) => {
                return e.email === user.email && e.password === user.password;
            });

            if (typeof (userFound) === 'undefined') {
                alert('Correo electrónico y/o contraseña incorrecta.');
                return false;
            }

            userFound.profilePictureUri = await this.getRandomDogImage();
            await AsyncStorage.setItem('session', JSON.stringify(userFound));
            
            const { navigation } = this.props;
            navigation.navigate('HomeScreen');

            return userFound;
        } catch (error) {
            alert('Ocurrió un error al cargar los datos.');
        }
        return false;
    };

    onPressLogin() {
        const user = {
            email: this.state.email.trim(),
            password: this.state.password
        };

        this.loginUser(user);
    }
    
    onPressLinkRegister = () => {
        const { navigation } = this.props;
        navigation.navigate('RegisterScreen');
    }

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.lblLogin}>Iniciar sesión</Text>
			<TextInput placeholder="Correo electrónico" value={this.state.email} onChangeText={(text) => this.setState({ email: text })} keyboardType="email-address" selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputEmail} />
			<TextInput placeholder="Contraseña" value={this.state.password} onChangeText={(text) => this.setState({ password: text })} textContentType="password" secureTextEntry={true} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputPassword} />
			<Button title="Ingresar" onPress={this.onPressLogin} style={styles.btnLogin} />
            <Text style={styles.linkRegister} onPress={this.onPressLinkRegister}>Crear una cuenta nueva</Text>
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
  lblLogin: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 15
  },
  inputEmail: {
    width: '80%',
    marginBottom: 15,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  inputPassword: {
    width: '80%',
    marginBottom: 25,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  btnLogin: {
    marginVertical: 15,
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 6
  },
  linkRegister: {
      marginVertical: 30,
      color: '#1990B8'
  }
});