import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TabBar from '../components/TabBar';

export default class LoginScreen extends Component {

	static navigationOptions = {
        header: null
    };

	onPressLogin = () => {}

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.lblLogin}>Iniciar sesión</Text>
			<TextInput placeholder="Correo electrónico" keyboardType="email-address" selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputEmail} />
			<TextInput placeholder="Contraseña" textContentType="password" secureTextEntry={true} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputPassword} />
			<Button title="Ingresar" onPress={this.onPressLogin} style={styles.btnLogin} />
			<TabBar/>
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
  }
});