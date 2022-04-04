import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardScreen from './views/Screen';
//import OnBoardScreennn from './views/screen2';
import OnBoardScreenL from './views/scrren3';
/*import Login from './views/login';
import App1 from './views/App1';*/
const Stack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoardScreen'>
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
