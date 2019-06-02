import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Button } from 'react-native';


const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class RegisterScreen extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null
    };

    constructor(props) {
        super(props);
        this.onPressRegister = this.onPressRegister.bind(this);
        this.passValidation = this.passValidation.bind(this);
        this.storeUser = this.storeUser.bind(this);
    }

    storeUser = async (user) => {
        try {
            delete user.confirmPassword;
            let users = JSON.parse(await AsyncStorage.getItem('users')) || [];
            users.push(user);
            await AsyncStorage.setItem('users', JSON.stringify(users));
            alert('El usuario fue registrado exitosamente! :)');
            return true;
        } catch (error) {
            alert('Ocurrió un error al almacenar los datos.');
        }

        return false;
    };

    passValidation(user) {
        if (! user.firstName) {
            alert('El campo nombre es requerido.');
            return false;
        }

        if (! user.lastName) {
            alert('El campo apellido(s) es requerido.');
            return false;
        }

        if (! user.email) {
            alert('El campo correo electrónico es requerido.');
            return false;
        }

        if (! regexEmail.test(user.email)) {
            alert('El correo electrónico es incorrecto.');
            return false;
        }

        if (! user.password) {
            alert('El campo contraseña es requerido.');
            return false;
        }

        if (user.password !== user.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return false;
        }

        return true;
    }

    onPressRegister() {
        const user = {
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            email: this.state.email.trim(),
            password:  this.state.password,
            confirmPassword: this.state.confirmPassword
        };

        if (this.passValidation(user) && this.storeUser(user)) {
            const { navigation } = this.props;
            navigation.navigate('LoginScreen');
        }
    }

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.lblLogin}>Registro</Text>
            <TextInput placeholder="Nombre" value={this.state.firstName} onChangeText={(text) => this.setState({ firstName: text })} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputFirstName} />
            <TextInput placeholder="Apellido(s)" value={this.state.lastName} onChangeText={(text) => this.setState({ lastName: text })} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputLastName} />
			<TextInput placeholder="Correo electrónico" value={this.state.email} onChangeText={(text) => this.setState({ email: text })} keyboardType="email-address" selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputEmail} />
			<TextInput placeholder="Contraseña" value={this.state.password} onChangeText={(text) => this.setState({ password: text })} textContentType="password" secureTextEntry={true} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputPassword} />
            <TextInput placeholder="Confirmar Contraseña" value={this.state.confirmPassword} onChangeText={(text) => this.setState({ confirmPassword: text })} textContentType="password" secureTextEntry={true} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputConfirmPassword} />
			<Button title="Registrarte" onPress={this.onPressRegister} style={styles.btnRegister} />
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
  inputFirstName: {
    width: '80%',
    marginBottom: 15,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  inputLastName: {
    width: '80%',
    marginBottom: 15,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
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
    marginBottom: 15,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  inputConfirmPassword: {
    width: '80%',
    marginBottom: 25,
    height: 40,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  btnRegister: {
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