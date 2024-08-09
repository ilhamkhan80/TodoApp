import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import AntDesign  from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Todo= () => {
const[ischecked,setischecked]=useState(false);
const navigation = useNavigation()


  return (
    
    <View style={{flex:1,backgroundColor:'#DBECF6'}}>

      
        <View style={styles.style1}>
      <TouchableOpacity>
     <AntDesign name='leftcircleo' size={30} color='white'/>
     </TouchableOpacity>
     <View style={styles.style2}>
    <Text style={styles.style3}>
    October 20, 2022
    </Text>
    <Text style={styles.style4}>My Todo List</Text>
    </View>
    </View>
    <View style={styles.container}>
    <Image source={require('../images/study.png')}/>
    <Text style={styles.textbox}>
    Study lesson
    </Text>

     <CheckBox value={ischecked} onValueChange={()=> setischecked(!ischecked)}/>

     </View>
     
     <View style={styles.container}>
    <Image source={require('../images/cup.png')}/>
    
    <Text style={styles.textbox}>
    Run 5k
     </Text>
     
      
    
    
   

     
     <CheckBox value={ischecked} onValueChange={()=> setischecked(!ischecked)}/>
    
     </View>
    
     <View style={styles.container}>
    <Image source={require('../images/list.png')}/>
    
    <Text style={styles.textbox}>
    Go to party
     </Text>
     
     <CheckBox value={ischecked} onValueChange={()=> setischecked(!ischecked)}/>
     </View>
    <View>
   <Text style={styles.box}>
   Completed
   </Text>
    </View>
    <View>
    <View style={styles.container}>
    <Image source={require('../images/list.png')}/>
    
    <Text style={styles.textbox}>
    Game meetup
     </Text>
     
     <CheckBox value={ischecked} onValueChange={()=> setischecked(!ischecked)}/>
     </View>
     
     <View style={styles.container}>
    <Image source={require('../images/study.png')}/>
    
    <Text style={styles.textbox}>
    Take out trash
     </Text>
     
     <CheckBox value={ischecked} onValueChange={()=> setischecked(!ischecked)}/>
     </View>
    
     </View>

     
    <View style={styles.box3}> 
     <TouchableOpacity style={styles.text} onPress={()=>navigation.navigate('New')}>
        <Text style={styles.text1}>
        Add New Task
        </Text>
     </TouchableOpacity>

    </View>


    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
style1:{backgroundColor:'#4A3780',padding:10,
flexDirection:'row'},

style2:{alignContent:'center',
alignSelf:'center',padding:20,
alignItems:'center',justifyContent:'center',marginLeft:10},

style3:{color:'white',fontWeight:'semibold',fontSize:16},

style4:{color:'white',fontSize:30,fontWeight:'bold',padding:10},


textbox:{fontWeight:'semi bold',fontSize:16,color:'black',width:'80%'},


container:{backgroundColor:'white',flexDirection:'row',margin:1,padding:15,borderRadius:20},

box:{color:'black',fontWeight:'semi-bold',fontSize:16,padding:20},
box3:{justifyContent:'center',alignItems:'center',
alignSelf:'center',width:'90%',marginTop:10},
text:{backgroundColor:'#4A3780',width:'80%',borderRadius:20,height:40,justifyContent:'center'},
text1:{fontWeight:'bold',fontSize:16,color:'white',
alignSelf:'center',alignItems:'center',
justifyContent:'center'},






})