import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import LoginScreen from './src/components/login/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/libs/store';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [hasPermission, setHasPermission] = useState(false);

  store.subscribe(() => {
    let data = store.getState();
    setHasPermission(data);
  });

  return (
    <NavigationContainer>
      {
        !hasPermission ?
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name={'Login'}
              component={LoginScreen}
            />
          </Stack.Navigator>
          :
          <Tabs.Navigator
            tabBarOptions={{
              tintColor: "#fefefe",
              style: {
                backgroundColor: Colors.blackPearl
              }
            }}
          >
            <Tabs.Screen
              name='Coins'
              component={CoinsStack}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Image
                    style={{ tintColor: color, width: size, height: size }}
                    source={require('../cryptoTracker/src/assets/bank.png')}
                  />
                )
              }}
            />
            <Tabs.Screen
              name='Favorites'
              component={FavoritesStack}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Image
                    style={{ tintColor: color, width: size, height: size }}
                    source={require('../cryptoTracker/src/assets/star.png')}
                  />
                )
              }}
            />
          </Tabs.Navigator>
      }


    </NavigationContainer>
  );
};

export default App;
