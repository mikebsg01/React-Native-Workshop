/** =======> Pantalla de Inicio de Sesión (Login) */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  onPressLogin = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.lblLogin}>Iniciar sesión</Text>
        <TextInput placeholder="Correo electrónico" keyboardType="email-address" selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputEmail} />
        <TextInput placeholder="Contraseña" textContentType="password" secureTextEntry={true} selectionColor="#f50057" underlineColorAndroid="#cfd8dc" style={styles.inputPassword} />
        <Button title="Ingresar" onPress={this.onPressLogin} style={styles.btnLogin} />
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

/** =======> Pantalla Scroll con Bloques (Tarjetas) */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];

export default class App extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        {cards.map(card => {
          return <View style={[styles.card, styles[card]]} key={card}>
            <Text style={styles.cardText}>Texto {card}</Text>
          </View>
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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

/** =======> Pantalla Roja */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Pantalla roja</Text>
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

/** =======> Pantalla Azul */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Pantalla azul</Text>
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