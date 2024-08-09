import { Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign  from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const New = () => {
  
  const navigation=useNavigation();
  return (
    <View>
 <View style={styles.style}>
    <TouchableOpacity onPress={()=>navigation.navigate('Todo')}>
 <AntDesign name='closecircleo' size={30} color='white'/>
 </TouchableOpacity>
 <View style={styles.container}>
      <Text style={styles.text}>Add New Task</Text>
    </View>
 </View>
<View style={{padding:20}}>
    <Text style={[styles.text,{color:'black'}]}>
    Task Title
</Text>
<TextInput style={styles.text1}
placeholder='Task Tittle'>
</TextInput>
</View>
<View style={{flexDirection:'row',gap:15}}>
<Text style={[styles.text,{color:'black',padding:10}]}>
Category
</Text>

<Image source={require('../images/list.png')}/>
<Image source={require('../images/study.png')}/>
<Image source={require('../images/cup.png')}/>

</View>
<View >
<Text style={[styles.text,{color:'black'}]}>
    Notes
</Text>
</View>

<View  style={styles.box}>
<TextInput style={{padding:50,color:'black'}}
placeholder='Notes'

>
</TextInput>
</View>

<View style={{flexDirection:'row',padding:20,gap:30}}>
<Text style={[styles.text,{color:'black',padding:10,}]}>
      Date
 </Text>
 <View >
    <Text style={[styles.text,{color:'black',padding:10}]}>
        Time
    </Text>
 </View>
 </View>
 <View style={styles.box1}>
 <View style={styles.Text}>
    <TextInput
    placeholder='Date' >
    </TextInput>
    <Image source={require('../images/input.png')}/>
 </View>
 <View style={styles.Text}>
    <TextInput
    placeholder='Time' >
    </TextInput>
    <Image source={require('../images/vector.png')}/>
 </View>
 </View>


<View style={styles.Text2}>
<TouchableOpacity style={styles.container1} onPress={()=> navigation.navigate('Todo')}>
    <Text style={styles.text}>
   save
    </Text>
</TouchableOpacity>


</View>













    </View>
   

    
    
  )
}

export default New

const styles = StyleSheet.create({
style:{padding:20,backgroundColor:'#4A3780'},
container:{backgroundColor:'#4A3780',alignItems:'center',},
text:{fontSize:16,fontWeight:'semibold',color:'white'},
text1:{color:'black',fontWeight:'regular',backgroundColor:'white',margin:5,fontSize:16, borderRadius:5,borderColor:'#DBDBDB'},
box:{width:'80%',alignSelf:'center',height:'30%',alignSelf:'flex-start'},
box1:{flexDirection:'row',gap:10,justifyContent:'space-evenly'},
Text:{flexDirection:'row',alignItems:'center',gap:20,padding:10,borderRadius:5,width:'40%'},
Text2:{justifyContent:'center',alignItems:'center',
    alignSelf:'center',width:'90%',marginTop:10,},
  container1:{padding:10,borderRadius:15,backgroundColor:'#4A3780',alignItems:'center',width:'90%',justifyContent:'center',}

})