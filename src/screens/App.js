import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import Todo from './src/screens/Todo'
import New from './src/screens/New'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Todo" component={Todo} />
      <Stack.Screen name="New" component={New} />
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})