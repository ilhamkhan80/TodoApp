
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React,{useState,useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Weather = () => {
  const [city, setcity] = useState('lahore');
  const [data, setdata] = useState([]);

  useEffect(() => {
    currentweather()
  }, [])

  const API_KEY='163b073c16ca061971e8349c3ec913f1'
  const currentweather=async()=>{
  const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${API_KEY}$units=metric`,);
  const json =await response.json();

  setdata(json)
}

return (
  
    <View style={{flex:1,backgroundColor: '#00A2D3'}}>
      
      <View style={styles.style1}>
        <TouchableOpacity style={{marginRight:10}}  onPress={currentweather}>
      <AntDesign name='search1' size={25} color='black' /> 
      </TouchableOpacity>
      <TextInput style={styles.style}
      placeholder='search city'
      value={city}
      onChangeText={(text) => setcity(text)}>
      </TextInput>

     </View>
     
     
     
      <View style={{ alignItems: 'center' }}>
        <Image style={{width:'100%'}} source={require('../images/cloud1.png')} />
      </View>

     <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <FlatList data={[data]}
      renderItem={({item})=>{
     return(


        <Text style={styles.box3}>{parseInt(item?.main?.temp)}°C</Text>
    
   )}}/>
</View>

    <View style={{ alignItems: 'center' }}>
        <Text style={styles.box1} >Precipitations</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.box1} > Max.: 34º   Min.: 28º</Text>
      </View>
      <View style={styles.text2}>
        <View
          style={styles.text}>
          <Image source={require('../images/nounrain.png')} />
          <Text style={styles.box}>18%</Text>

        </View >
        <View
          style={styles.text} >
          <Image source={require('../images/nounhumaidty.png')} />
          <Text style={styles.box}>67%</Text>
        </View>
        <View
          style={styles.text} >
          <Image source={require('../images/nounwind.png')} />
          <Text style={styles.box}>28 km/h</Text>
        </View>
      </View>
      <ScrollView>
      <View>
        
      <View
        style={{
          marginTop: 15,
          width: '90%',
          height: '35%',
          backgroundColor: '#005FE5',
          alignSelf: 'center',
          borderRadius: 25,
          padding: 10,
          shadowOpacity: 20,
          elevation: 10,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }} >
          <Text style={styles.box}>Today</Text>
          <Text style={styles.box}>Mar,19</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          alignSelf: 'center',
          gap: 20

        }}>
        <View style={styles.input}>
            <Text style={styles.text3}>26°C</Text>
            <View>
              <Image source={require('../images/cloud1.png')} />
            </View>
            <Text style={styles.text3}>16:00</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.text3}>31°C</Text>
            <View>
              <Image source={require('../images/cloud3.png')} />
            </View>
            <Text style={styles.text3}>15:00</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.text3}>34°C</Text>
            <View>
              <Image source={require('../images/cloud1.png')} />
            </View>
            <Text style={styles.text3}>19:00</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.text3}>29°C</Text>
            <View>
              <Image source={require('../images/cloud1.png')} />
            </View>
            <Text style={styles.text3}>20:0</Text>
          </View>
          </View>
       </View>
    
       <View
        style={styles.Text}>
          <View style={styles.text4} >
          <Text style={styles.style}>Next Forecast</Text>
          <Image source={require('../images/calendar.png')} />
        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Monday</Text>
          <Image source={require('../images/Bigrain.png')} />
          <Text style={styles.box}>13°C  10°C</Text>

        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Tuesday</Text>
          <Image source={require('../images/light.png')} />
          <Text style={styles.box}>18°C  18°C</Text>
        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Wednesday</Text>
          <Image source={require('../images/Bigrain.png')} />
          <Text style={styles.box}>19°C  19°C</Text>

        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Thursday</Text>
          <Image source={require('../images/light.png')} />
          <Text style={styles.box}>13°C  10°C</Text>

        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Friday</Text>
          <Image source={require('../images/Bigrain.png')} />
          <Text style={styles.box}>20°C  10°C</Text>

        </View>
        <View style={styles.Text2} >
          <Text style={styles.box}>Saturday</Text>
          <Image source={require('../images/light.png')} />
          <Text style={styles.box}>15°C  10°C</Text>

        </View>
        
      
        
         
         </View>
        
         </View>
         </ScrollView>
        



      </View>
    
  )
}

export default Weather

const styles = StyleSheet.create({
  style:{color:'white',fontWeight:'bold',fontSize:20,},
  text:{
    paddingHorizontal: '5%',
    backgroundColor: '#00A2D3',
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    gap: 5
  },
  text2:{
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
    width: '90%',
    height: '7%',
    backgroundColor: '#016393',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'space-evenly'
  },
  style1:{flexDirection:'row',borderRadius:5,alignItems:'center',margin:10,},
  box:{ fontSize: 17, color: 'white', fontWeight: 'bold', },
  box1:{ fontSize: 20, color: 'white' },
  box3:{ fontWeight: 'bold', fontSize: 60, color: 'white' },
  input:{
    height: '70%',
    width: '19%',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 3},
    text3:{ color: 'white', fontSize: 17, },
    text4:{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 },
    Text:{
      marginTop: 15,
      width: '90%',
      height: '70%',
      backgroundColor: '#005FE5',
      alignSelf: 'center',
      borderRadius: 25,
      padding:15,
      shadowOpacity: 20,
      elevation: 10,
    },
    Text2:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
    

    }
})