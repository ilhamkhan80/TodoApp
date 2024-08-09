import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chats from './BottomScreens/Chats'
import Calls from './BottomScreens/Calls'
const BottomNavigation = () => {
  const Bottom=createBottomTabNavigator()
  return (
    <Bottom.Navigator>
    <Bottom.Screen name='Chat' component={Chats}/>
    <Bottom.Screen name='Call' component={Calls}/>

    </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})