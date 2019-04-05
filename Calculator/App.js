import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    onPressDivision() {}
    onPressMultiplication() {}
    onPressSubtraction() {}
    onPressDelete() {}
    onPress7() { alert('Hello world :3'); }
    onPress8() {}
    onPress9() {}

    render() {
        return ( 
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressDivision} style={styles.operationButtons}>
                    <Text style={styles.operationButtonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressMultiplication} style={styles.operationButtons}>
                    <Text style={styles.operationButtonText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressDelete} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>&lt;</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress7} style={styles.numberButtons}>
                    <Text style={styles.numberButtonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress8} style={styles.numberButtons}>
                    <Text style={styles.numberButtonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress9} style={styles.numberButtons}>
                    <Text style={styles.numberButtonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressSubtraction} style={styles.operationButtons}>
                    <Text style={styles.operationButtonText}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a4975',
        alignItems: 'center',
        justifyContent: 'center',
    },
    operationButtons: {
        width: 60,
        height: 60,
        backgroundColor: '#50a8ff',
        padding: 20,
        borderRadius: 50,
        elevation: 8
    }, 
    operationButtonText: {
        color: '#fff',
        textAlign: 'center'
    },
    deleteButton: {
        width: 60,
        height: 60,
        backgroundColor: '#ff6763',
        padding: 20,
        borderRadius: 50,
        color: '#fff',
        elevation: 8
    },
    deleteButtonText: {
        color: '#fff',
        textAlign: 'center'
    }, 
    numberButtons: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        color: '#000',
        padding: 20,
        borderRadius: 50,
        elevation: 8
    },
    numberButtonText: {
        textAlign: 'center'
    }
});