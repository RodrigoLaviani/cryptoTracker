import React from 'react';
import Colors from '../../res/colors';
import NewPasswordScreen from './NewPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const NewPasswordStack = () => {
    return (
        <Stack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl
                },
                headerTintColor: Colors.white,
                headerTitleAlign: 'center'
            }
        }>
            <Stack.Screen name="Change Password" component={NewPasswordScreen} />
        </Stack.Navigator>
    );
}


export default NewPasswordStack;