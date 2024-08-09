import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Result = () => {
const navigation=useNavigation()
  return (
    <View>
        
      <View style={styles.style}>
     <View style={{alignSelf:'center'}}>
      <Entypo name='list' size={21} color='#656565'/>
     </View>
    <View style={styles.Text}>
     <Entypo name='location-pin'size={20} color='#656565'/>
     <Text style={{fontWeight:'light',fontSize:17}}>
      Mohammadpur, Dhaka</Text>
     <AntDesign name='down' size={20} color='#656565'/>
      </View>
      <View>
     <Image source={require('../images/girl.png')}/>
      </View>
      </View>
      
      
      <View style={styles.text1}>
      
      <View style={styles.view}>
      <AntDesign name='heart' color='#EA4335'size={30} style={{marginTop:10,backgroundColor:'white'}} />
      </View>
     <Image style={{width:320,height:320,}} source={require('../images/burger.png')}/>
     
 
     
   </View>
    <View style={styles.view1}>
   <Text styles={styles.container}> 
    2.5 Km
   </Text>
   <View>
    
    <Text >
       5 Mins
    </Text>
     </View>

   </View>
   <View style={styles.view2}>
  <Text style={styles.input}>
  Shrimps Pasta
  </Text>
  <View style={styles.input2}>
  <TouchableOpacity>
    <Image source={require('../images/minus.png')}/>
  </TouchableOpacity>
  
  <Text style={styles.input3}>
    2
  </Text>
  
  <TouchableOpacity>
  <Image source={require('../images/plus.png')}/>
  </TouchableOpacity>
  

  </View>
   
   </View>
 <View style={[styles.view1,{padding:10}]}>
 <Text style={[styles.container,{fontWeight:'bold'}]}>
    4.8   
    
 </Text>
 <AntDesign name='star' color='yellow'/>
 <Text style={styles.container}> .5k+ Rating </Text>

 </View>

 <View style={{padding:10}}>
    <Text style={[styles.container,{fontWeight:'medium'}]}>Vulputate tincidunt convallis pulvinar egestas consequat, aliquam lectus nibh. Leo purus nisi, nibh condimentum aliquam eu quis. Ultrices arcu pharetra.</Text>
<View style={{margin:5}}>
    <Text style={[styles.container,{fontWeight:'medium'}]}>
    Convallis pulvinar egestas consequat
    </Text>
</View>

 </View>
 
 

 <View style={styles.input4}>



 <View style={{padding:10}}>
    <Text style={[ styles.input3,{fontSize:26}]}>
    $19.99
    </Text>
 </View>
 
 <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
 <Text style={styles.style1}>
 Check out

 </Text>
 </TouchableOpacity>
 </View>

 

 























    </View>



  )
}

export default Result

const styles = StyleSheet.create({
style:{backgroundColor:'#CECECE',padding:10,flexDirection:'row',gap:25,},
Text:{flexDirection:'row',alignSelf:'center'},
text1:{alignSelf:'center',backgroundColor:'#F691AC',padding:8,justifyContent:'center',
alignContent:'center',alignItems:'center',marginTop:10,width:'95%',height:'50%'},
view:{alignSelf:'flex-end',width:40,height:40,alignItems:'flex-end'},
view1:{flexDirection:'row',padding:20,gap:10},
container:{fontWeight:'Regular',fontSize:14,color:'black'},
view2:{flexDirection:'row',padding:5,justifyContent:'space-between'},
input:{fontWeight:'bold',fontSize:26,color:'black'},
input2:{flexDirection:'row',alignItems:'flex-end',gap:5,backgroundColor:'white'},
input3:{fontWeight:'bold',fontSize:18,},
input4:{flexDirection:'row',justifyContent:'space-evenly',borderRadius:10,opacity:10,shadowOpacity:20},
style1:{color:'white',backgroundColor:'#F55A51',padding:20,borderRadius:10,alignSelf:'flex-end',fontWeight:'bold',fontSize:18}
})