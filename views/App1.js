import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './Screen';
import OnBoardScreenL from './scrren3';
const Stack = createStackNavigator();

const App1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreenOn" component={OnBoardScreen} />
        <Stack.Screen name="BoardScreenOnL" component={OnBoardScreenL} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App1;