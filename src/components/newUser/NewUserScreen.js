import React, { useState } from 'react';
import { Pressable, View, TextInput, Text } from 'react-native';
import store from '../../libs/store';
import styles from '../../res/formStyle';

const NewUserScreen = () => {
    const [user, setUser] = useState('');
    const [passwords, setPassword] = useState({
        new: '',
        repeat: ''
    });

    const handlerLogin = () => {
        store.dispatch({ type: 'LOGIN' });
    }

    return (
        <View style={styles.container}>
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
                onChangeText={text => setPassword({ new: text })}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Repeat Password"
                placeholderTextColor={'#FEFEFE'}
                onChangeText={text => setPassword({ repeat: text })}
            />
            <Pressable
                style={styles.button}
                onPress={() => handlerLogin()}
            >
                <Text style={styles.textButton}>Create</Text>
            </Pressable>
        </View>
    );
}

export default NewUserScreen;