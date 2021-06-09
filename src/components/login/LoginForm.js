import React from 'react';
import { Pressable, View, TextInput, Text, StyleSheet } from 'react-native';
import store from '../../libs/store';
import styles from '../../res/formStyle';

const LoginForm = () => {
    const handlerLogin = () => {
        store.dispatch({ type: 'LOGIN' });
    }

    return (
        <View style={style.container}>
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
                style={styles.button}
                onPress={() => handlerLogin()}
            >
                <Text style={styles.textButton}>Login</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoginForm;