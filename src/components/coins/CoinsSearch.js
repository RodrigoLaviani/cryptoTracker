import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../../res/colors';

class CoinsSearch extends Component {

    render() {
        return (
            <TextInput
                style={styles.inputText}
                onChangeText={text => this.props.onChange(text)}
                placeholder={'Coins search'}
                placeholderTextColor={'#BBBBBB'}
            />
        );
    };
};

const styles = StyleSheet.create({
    inputText: {
        margin: 6,
        borderColor: '#FFF',
        borderWidth: 0.3,
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
        height: 50,
        backgroundColor: Colors.charade,
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default CoinsSearch;