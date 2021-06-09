import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NewPasswordStack from './../newPassword/NewPasswordStack';
import NewUserStack from './../newUser/NewUserStack';

const Stack = createStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown: false
            }
        }>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Change Password" component={NewPasswordStack} />
            <Stack.Screen name="NewUser" component={NewUserStack} />
        </Stack.Navigator >
    )
}

export default LoginStack;