import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

export default class App extends React.Component {

    state = {
        displayValue: '0'
    }

    addDigit = n => {
        this.setState({ displayValue: n })
    }

    clearMemory = () => {
        this.setState({ displayValue: '0' })
    }

    setOperation = operation => {

    }

    render() {
        return (
            <View style={style.container}>
                <Display value={this.state.displayValue} />
                <View style={style.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory} ></Button>
                    <Button label='/'></Button>
                    <Button label='7'></Button>
                    <Button label='8'></Button>
                    <Button label='9'></Button>
                    <Button label='*'></Button>
                    <Button label='4'></Button>
                    <Button label='5'></Button>
                    <Button label='6'></Button>
                    <Button label='-'></Button>
                    <Button label='1'></Button>
                    <Button label='2'></Button>
                    <Button label='3'></Button>
                    <Button label='+'></Button>
                    <Button label='0'></Button>
                    <Button label='.'></Button>
                    <Button label='='></Button>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})