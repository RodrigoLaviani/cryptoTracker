import React from 'react';
import Colors from '../../res/colors';
import NewUserScreen from './NewUserScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const NewUserStack = () => {
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
            <Stack.Screen name="New User" component={NewUserScreen} />
        </Stack.Navigator>
    );
}


export default NewUserStack;