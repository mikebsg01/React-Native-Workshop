import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  state = {
    x: 0,
    y: 0,
    sum: 0,
    sub: 0,
    mult: 0,
    div: 'No se puede dividir entre cero'
  };

  async setNumbers() {

    await this.setState({ 
      x: (this.state.x == 0) ? 1 : this.state.x + 2,
      y: (this.state.y == 0) ? 2 : this.state.y + 2
    });

    if (this.state.y == 12) {
      this.setState({
        x: 0, y: 0
      });
    }

    this.setState({
      sum: this.state.x + this.state.y,
      sub: this.state.x - this.state.y,
      mult: this.state.x * this.state.y,
      div: (this.state.y == 0) ? 'No se puede dividir entre cero' : (this.state.x / this.state.y)
    });
  }

  onPressHandler = () => {
    this.setNumbers();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Impares: {this.state.x}</Text>
        <Text>Pares: {this.state.y}</Text>
        <Button title="Click me" onPress={this.onPressHandler} />
        <Text>Suma: {this.state.sum}</Text>
        <Text>Resta: {this.state.sub}</Text>
        <Text>Multiplicación: {this.state.mult}</Text>
        <Text>División: {this.state.div}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
