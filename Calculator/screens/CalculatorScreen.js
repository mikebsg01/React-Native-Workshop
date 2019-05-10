import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const SECRET_KEY = 1234;

export default class CalculatorScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        operation: ''
    };

    eventTimer = null;

    onPressOpenParenthesis = () => {
        this.setState({
            operation: this.state.operation + '('
        });
    }

    onPressCloseParenthesis = () => {
        this.setState({
            operation: this.state.operation + ')'
        });
    }

    onPressDivision = () => {
        this.setState({
            operation: this.state.operation + '/'
        });
    }

    onPressMultiplication = () => {
        this.setState({
            operation: this.state.operation + '*'
        });
    }

    onPressSubtraction = () => {
        this.setState({
            operation: this.state.operation + '-'
        });
    }

    onPressAddition = () => {
        this.setState({
            operation: this.state.operation + '+'
        });
    }

    onPressInDelete = () => {
        this.setState({
            operation: this.state.operation.slice(0, -1)
        });

        this.eventTimer = setInterval(() => {
            this.setState({
                operation: this.state.operation.slice(0, -1)
            });
        }, 600);
    }

    onPressOutDelete = () => {
        clearInterval(this.eventTimer);
    }

    onPressNum = (num) => {
        return () => {
            this.setState({
                operation: this.state.operation + num.toString()
            });
        }
    }

    onPressPoint = () => {
        this.setState({
            operation: this.state.operation + '.'
        });
    }

    onPressEqual = () => {
        let result = '';

        try  {
            result = eval(this.state.operation);

            if (result === Infinity) {
                result = 'Error: division by zero is undetermined.';
            } else if (isNaN(result)) {
                result = 'Error';
            }

            this.setState({
                operation: result.toString()
            });
        } catch (e) {
            this.setState({
                operation: 'Syntax Error'
            });
        }

        if (result === SECRET_KEY) {
            this.props.navigation.navigate('SecretScreen');
        }
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.operationItem}>
                    <View style={styles.operationContainer}>
                        <TextInput
                            editable={false}
                            autoFocus={false}
                            style={styles.operationTextInput}
                            value={this.state.operation}
                        />
                    </View>
                </View>
                <View style={styles.buttonItem}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={this.onPressOpenParenthesis} style={[styles.button, styles.operationButtons]}>
                            <Text style={styles.operationButtonText}>(</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressCloseParenthesis} style={[styles.button, styles.operationButtons]}>
                            <Text style={styles.operationButtonText}>)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressMultiplication} style={[styles.button, styles.operationButtons]}>
                            <Icon name='close' iconStyle={styles.operationButtonText} />
                        </TouchableOpacity>
                        <TouchableOpacity onPressIn={this.onPressInDelete} onPressOut={this.onPressOutDelete} style={[styles.button, styles.deleteButton]}>
                            <Icon name='backspace' iconStyle={styles.deleteButtonText} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(7)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(8)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(9)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressAddition} style={[styles.button, styles.operationButtons]}>
                            <Icon name='add' iconStyle={styles.operationButtonText} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(4)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(5)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(6)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressSubtraction} style={[styles.button, styles.operationButtons]}>
                            <Icon name='remove' iconStyle={styles.operationButtonText} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(1)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(2)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(3)} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressDivision} style={[styles.button, styles.operationButtons]}>
                            <Text style={styles.operationButtonText}>/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressNum(0)} style={[styles.button, styles.numberButtons, styles.zeroButton]}>
                            <Text style={styles.numberButtonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressPoint} style={[styles.button, styles.numberButtons]}>
                            <Text style={styles.numberButtonText}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressEqual} style={[styles.button, styles.equalButton]}>
                            <Text style={[styles.operationButtonText, styles.equalButtonText]}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    operationItem: {
        backgroundColor: '#fff',
        flexBasis: '30%'
    },
    operationContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    operationTextInput: {
        padding: 8,
        paddingTop: 12,
        backgroundColor: '#fff',
        color: '#2a4975',
        fontSize: 32,
        textAlign: 'right',
        flexBasis: '100%'
    },
    buttonItem: {
        backgroundColor: '#2a4975',
        flexBasis: '70%',
    },
    buttonContainer: {
        padding: 12,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    button: {
        width: 60,
        height: 60,
        padding: 20,
        paddingTop: 18,
        marginHorizontal: 12,
        marginVertical: 8,
        elevation: 8,
        borderRadius: 50,
        flexBasis: '18%',
    },
    operationButtons: {
        backgroundColor: '#50a8ff',
        elevation: 8
    }, 
    operationButtonText: {
        color: '#fff',
        textAlign: 'center'
    },
    deleteButton: {
        backgroundColor: '#ff6763',
        color: '#fff',
        flexBasis: '19%',
        marginHorizontal: 10
    },
    deleteButtonText: {
        color: '#fff',
        textAlign: 'center'
    }, 
    numberButtons: {
        backgroundColor: '#fff',
    },
    numberButtonText: {
        textAlign: 'center',
        color: '#2a4975',
        fontWeight: 'bold'
    },
    zeroButton: {},
    equalButton: {
        paddingTop: 12,
        backgroundColor: '#0abe6d',
        color: '#fff',
        flexBasis: '42%',
    },
    equalButtonText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});