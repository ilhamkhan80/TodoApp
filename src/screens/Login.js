import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Weather from './Weather'

const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
      <TextInput style={styles.style}
      placeholder='Email'>
      </TextInput>
      <View>
      <TextInput style={styles.style}
      placeholder='Password'
      keyboardType='number-pad'>
      </TextInput>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate(Weather)}}>
     <Text> save</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({ style:{fontWeight:'bold',fontSize:20},
})