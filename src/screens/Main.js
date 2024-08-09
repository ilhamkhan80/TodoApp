import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
const Main = () => {


const navigateToScreen = (id)=>{
  if(id==3){
    navigation.navigate('Result')
  }
  else null

}

  const menu = [
    {
      dish: 'Breakfast',
      image: require('../images/burger.png'),
      
    },
    {
      dish: 'Breakfast',
      image: require('../images/pasta.png'),
     

    },
    {
      dish: 'Breakfast',
      image: require('../images/green.png'),
     
    },
    {
      dish: 'Breakfast',
      image: require('../images/burger.png'),
     

    },]
   const Data=[{
    dish2:'SPicy Noddles ',
    image:require('../images/green.png'),
    text:'4.7',
    Text:'Found in 20 Resturents',
   id:'1'



   },
    { dish2:'Pasta Noddles ',
    image:require('../images/pasta.png'),
    text:'4.8',
    Text:'Found in 15 Resturents',
      id:'2'},
    
  
    { dish2:'Chicken ',
      image:require('../images/burger.png'),
      text:'4.7',
      Text:'Found in 10 Resturents',
      id:'3'},
  
  ]



  const navigation = useNavigation()
  return (
    <View style={{ backgroundColor: '#CECECE', flex: 1, }}>
      <View style={styles.style}>
        <View style={{ alignSelf: 'center' }}>
          <Entypo name='list' size={21} color='#656565' />
        </View>
        <View style={styles.Text}>
          <Entypo name='location-pin' size={20} color='#656565' />
          <Text style={{ fontWeight: 'light', fontSize: 17 }}>
            Mohammadpur, Dhaka</Text>
          <AntDesign name='down' size={20} color='#656565' />
        </View>
        <View>
          <Image source={require('../images/girl.png')} />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text >
          Good Morning
        </Text>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Bessie Copper
          </Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view}>
          <AntDesign name='search1' size={20} color='#656565' />
          <TextInput style={styles.textinput}
            placeholder='Search for lunch'>
          </TextInput>
        </View>
        <View style={styles.style2}>
          <FontAwesome name='sliders' size={20} />
        </View>
      </View>
      <View style={styles.view1}>
        <Text style={[styles.text, { fontSize: 24 }]}>
          Categorires
        </Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.text1}>
              More
            </Text>
          </TouchableOpacity>
        </View>
      </View>


      <FlatList
         data ={menu}
         horizontal={true}
         renderItem={({item}) =>
         <View style={styles.style3}>
        <Text style={styles.text1}>
          {item.dish}
        </Text>
        <Image style={{ marginLeft: 5,width:150,height:150 }} source={item.image} />
      </View>
            }
            />




      <View style={styles.view1}>
        <Text style={[styles.text, { fontSize: 24 }]}>
          Popular
        </Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.text1}>
              More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList 
      data={Data}
      horizontal={true}
      renderItem={({item})=>
      <TouchableOpacity onPress={()=>navigateToScreen(item.id)} style={{ flexDirection: 'row' }}>
        <View style={styles.view3}>
          <Image style={{ width: 120, height: 120}} source={item.image} />
          <View style={styles.box}>
            <Text style={styles.text1}>
              {item.text}
            </Text>
            <AntDesign name='star' color='yellow' />
          </View>
          <View style={styles.box1}>
            <Text style={[styles.text1, { fontSize: 18, margin: 5 }]}>
            {item.dish2}
            </Text>
            <View>
              <Text style={[styles.text1, { fontWeight: 'regular' }]}>
              {item.Text}
              </Text>
            </View>
          </View>
        </View>
    
      </TouchableOpacity>
       }
       />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <AntDesign name='home' color='red' size={30} />
        </TouchableOpacity>
        <AntDesign name='shoppingcart' size={30} />
        <EvilIcons name='comment' size={30} />
        <AntDesign name='user' size={30} />
      </View>


















    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  style: { backgroundColor: '#CECECE', padding: 10, flexDirection: 'row', gap: 25, },
  Text: { flexDirection: 'row', alignSelf: 'center' },
  view2: { flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'space-evenly' },
  view: { flexDirection: 'row', backgroundColor: 'white', width: '70%', borderRadius: 5, alignItems: 'center', margin: 10 },
  textinput: { fontWeight: 'regular', fontSize: 16, },
  style2: { justifyContent: 'centre', backgroundColor: 'white', width: '10%', height: 40, alignItems: 'center', borderRadius: 5, alignSelf: 'center', padding: 10, marginEnd: 10 },
  view1: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10 },
  text: { fontWeight: 'bold', fontSize: 16, color: 'black' },
  text1: { fontWeight: 'bold', fontSize: 14 },
  style3: { backgroundColor: 'white',justifyContent:'center',paddingHorizontal:10,paddingVertical:10,marginRight:10, marginLeft: 10, padding: 10, borderRadius: 10, },
  text1: { fontWeight: 'bold', fontSize: 13 },
  view3: { width: 190, height: 205, backgroundColor: '#FFD1DF', margin: 5, alignItems: 'center', borderRadius: 7 },
  box: { margin: 10, alignSelf: 'flex-start', flexDirection: 'row', gap: 10 },
  box1: { alignSelf: 'flex-start', flexDirection: 'column', backgroundColor: 'white', width: 190, height: 50, },






})