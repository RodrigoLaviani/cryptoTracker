import React, { useState } from 'react';
import { Pressable, View, TextInput, Text } from 'react-native';
import store from '../../libs/store';
import styles from '../../res/formStyle';


const NewPasswordScreen = () => {
    const [passwords, setPassword] = useState({
        old: '',
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
                placeholder="Old Password"
                placeholderTextColor={'#FEFEFE'}
                onChangeText={text => setPassword({ old: text })}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="New Password"
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
                <Text style={styles.textButton}>Change</Text>
            </Pressable>
        </View>
    );
}

export default NewPasswordScreen;