import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './navigation/Navigator';

export default class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Navigator></Navigator>
            </View>
        );
    }
};

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});