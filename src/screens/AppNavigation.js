import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Weather from './src/screens/Weather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNavigation from './src/screens/BottomNavigation'
const Bottom = createBottomTabNavigator()
const Stack= createNativeStackNavigator()

const App = () => {
  return (
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name='Weather' component={Weather}/>
    <Stack.Screen name='bottom' component={BottomNavigation}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})