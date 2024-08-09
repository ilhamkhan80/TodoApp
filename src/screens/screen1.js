import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Weather = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <Button title='Login' onPress={()=>{navigation.navigate('bottom')}}/>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({})