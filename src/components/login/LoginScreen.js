import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import Colors from '../../res/colors';

const LoginScreen = ({ navigation }) => {

    const handlerNewPassword = () => {
        navigation.navigate('Change Password');
    }

    const handlerNewUser = () => {
        navigation.navigate('NewUser');
    }

    return (
        <View style={styles.conteiner}>
            <Text style={styles.titleText}>Cryptotracker</Text>
            <LoginForm></LoginForm>
            <Pressable
                style={styles.changePassBtn}
                onPress={() => handlerNewPassword()}
            >
                <Text style={styles.btnText}>Change Password</Text>
            </Pressable>
            <Pressable
                style={styles.newUserBtn}
                onPress={() => handlerNewUser()}
            >
                <Text style={styles.btnText}>New User</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Colors.charade,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        marginBottom: 70,
        color: Colors.white,
        fontSize: 35,
        fontWeight: 'bold'
    },
    changePassBtn: {
        marginTop: 100
    },
    newUserBtn: {
        marginTop: 15
    },
    btnText: {
        fontWeight: 'bold'
    }
})

export default LoginScreen;