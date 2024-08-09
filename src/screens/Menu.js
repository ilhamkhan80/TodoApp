import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Search from './src/screens/Search';
import Result from './src/screens/Result';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Result" component={Result} />
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})