import React, { useState } from 'react';
import { Pressable, View, TextInput, Text, StyleSheet } from 'react-native';
import Colors from '../../res/colors';
import store from '../../libs/store';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handlerLogin = () => {
        store.dispatch({ type: 'LOGIN' });
    }

    return (
        <View style={styles.conteiner}>
            <TextInput
                style={styles.input}
                placeholder="User"
                placeholderTextColor={'#FEFEFE'}
                onChangeText={text => setUser(text)}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={'#FEFEFE'}
                onChangeText={text => setPassword(text)}
            />
            <Pressable
                style={styles.loginBtn}
                onPress={() => handlerLogin()}
            >
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: Colors.blackPearl,
        borderColor: Colors.white,
        borderRadius: 10,
        borderWidth: 0.3,
        margin: 5,
        width: 160,
        height: 40,
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Helvetica,Verdana,sans-serif',
        padding: 10
    },
    loginBtn: {
        marginTop: 20,
        padding: 8,
        width: 160,
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#272c40'
    },
    loginText: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default LoginForm;