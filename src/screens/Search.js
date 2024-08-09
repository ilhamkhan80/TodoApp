import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from  'react-native-vector-icons/Entypo'
import AntDesign from  'react-native-vector-icons/AntDesign'
import FontAwesome from  'react-native-vector-icons/FontAwesome'
import { useNavigation, useNavigationBuilder } from '@react-navigation/native'
const Search = () => {
const navigation = useNavigation()
  return (
    <View style={{backgroundColor:'#CECECE',flex:1,}}>
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
      <View style={styles.view2}>
      <View style={styles.view} >
       <AntDesign  name='search1'size={20} color='#656565'/> 
       <TextInput style={styles.textinput}
       placeholder='Search for lunch'>
       </TextInput>
       </View>
       <View style={styles.style2}>
       <FontAwesome  name='sliders' size={20}/>
       </View>
       </View>


       <View style={styles.view1}>
        <Text style={styles.text}>
        Search results
        </Text>
        <View>
          <TouchableOpacity>
          <Text style= {styles.text1}>
          See More
          </Text>
          </TouchableOpacity>
        </View>
       </View>
        

       <View style={styles.text2}>
       <Image source={require('../images/green.png')}/>
      <View style={{flexDirection:'column',rowGap:5}}>
        <Text style={styles.text}>Vegetable Curry</Text>
      
       <View>
        <Text style={styles.textinput}>
        Found in 15 nearby restuarents
        </Text>
       </View>
       <View style={{flexDirection:'row',gap:10}}>
        <Text style={[styles.text,{fontSize:21}]}>
        $5.99
        </Text>
        <View>
          <Text style={styles.textinput}>
          /person
        </Text>
        </View>

        <View style={{flexDirection:'row',gap:10}}>
          <Text style={styles.text}>4.7    
          </Text>
          <View>
          <AntDesign name='star' color='yellow'/>
          </View>
        </View>
       </View>
       
       </View>



       </View>
       <View style={{marginTop:10}}>
       <View style={styles.text2}>
       <Image source={require('../images/burger.png')}/>
      <View style={{flexDirection:'column',rowGap:5}}>
        <Text style={styles.text}>Fried Plantain</Text>
      
       <View>
        <Text style={styles.textinput}>
        Found in 15 nearby restuarents
        </Text>
       </View>
       <View style={{flexDirection:'row',gap:10}}>
        <Text style={[styles.text,{fontSize:21}]}>
        $4.99
        </Text>
        <View>
          <Text style={styles.textinput}>
          /person
        </Text>
        </View>

        <View style={{flexDirection:'row',gap:10}}>
          <Text style={styles.text}>4.8 
          </Text>
          <View>
          <AntDesign name='star' color='yellow'/>
          </View>
        </View>
       </View>
       
       </View>



       </View>
       </View>
       <View style={{marginTop:10}}>
       <View style={styles.text2}>
        
       <Image source={require('../images/pasta.png')}/>
    
      <View style={{flexDirection:'column',rowGap:5}}>
        <Text style={styles.text}>Chicken Pasta</Text>
      
       <View>
        <Text style={styles.textinput}>
        Found in 15 nearby restuarents
        </Text>
       </View>
       <View style={{flexDirection:'row',gap:10}}>
        <Text style={[styles.text,{fontSize:21}]}>
        $6.99
        </Text>
        <View>
          <Text style={styles.textinput}>
          /person
        </Text>
        </View>

        <View style={{flexDirection:'row',gap:10}}>
          <Text style={styles.text}>4.9  
          </Text>
          <View>
          <AntDesign name='star' color='yellow'/>
          </View>
        </View>
       </View>
       
       </View>



       </View>
       </View>

      <View style={styles.view1}>
     <Text style={[styles.text,{fontSize:24}]}>
     Neighbour's Search
     </Text>
     <View>
      <TouchableOpacity>
      <Text style= {styles.text1}>
      More
      </Text>
      </TouchableOpacity>
     </View>
     </View>

     
     <View style={{flexDirection:'row'}}>
     <View style={styles.style3}>
      <Text style={styles.text1}>
        Pizza
      </Text>
      <Image style={{marginLeft:5}}source={require('../images/burger.png')}/>
     </View>


     
     
     <View style={styles.style3}>
     
      <Text style={styles.text1}>
        Pasta
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
      <Image source={require('../images/pasta.png')}/>
      </TouchableOpacity>
     </View>

     <View style={styles.style3}>
      <Text style={styles.text1}>
        noddles
      </Text>
      <Image source={require('../images/green.png')}/>
     </View>
     
     </View>

     </View>
     












        

       

      




      
      
      





    
  )
}

export default Search

const styles = StyleSheet.create({ 
style:{backgroundColor:'#CECECE',padding:10,flexDirection:'row',gap:25,},
Text:{flexDirection:'row',alignSelf:'center'},
view:{flexDirection:'row',backgroundColor:'white',width:'70%',borderRadius:5,alignItems:'center',margin:10},
textinput:{fontWeight:'regular',fontSize:16,},
view1:{flexDirection:'row',justifyContent:'space-between',padding:10,marginTop:10},
text:{fontWeight:'bold',fontSize:16,color:'black'},
text1:{fontWeight:'bold',fontSize:14},
text2:{backgroundColor:'white',width:'90%',padding:5,alignSelf:'center',borderRadius:8,flexDirection:'row'},
style2:{justifyContent:'centre',backgroundColor:'white',width:'10%',height:40,alignItems:'center',borderRadius:5,alignSelf:'center',padding:10,marginEnd:10},
view2:{flexDirection:'row',justifyContent:'space-between',justifyContent:'space-evenly'},
style3:{backgroundColor:'white',width:'35%',marginLeft:10,padding:10,borderRadius:10,}

})