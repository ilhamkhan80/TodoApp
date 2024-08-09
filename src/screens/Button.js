import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Button = () => {
  const navigation=useNavigation()
  return (
    <View>
         <Button
      title="search"
      />
     
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})