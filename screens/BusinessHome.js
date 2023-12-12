import { Text, StyleSheet, View,Dimensions,ScrollView,Image,TouchableOpacity,TextInput, BackHandler } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import animationData from '../welcome.json';
import ModalView from './ModalView';
import { useState,useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
// import Geolocation from '@react-native-community/geolocation';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-modern-datepicker';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer=createDrawerNavigator();
import Toast from 'react-native-toast-message';
const { width, height } = Dimensions.get('window');
const BusinessHome=()=>{
  const showToast1 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Booked Successfully',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };

  const[visible,setVisible]=useState(false);
  const[rewardName,setRewardName]=useState('');
  const[description,setDescription]=useState('');
  const[image,setImage]=useState('');
  const[coins,setCoins]=useState('');
  const[uploaded,setUploaded]=useState(false);

//   const[userName,setUserName]=useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('');
//   const [address, setAddress] = useState('');
//   const[date,setDate]=useState('');
//   const[latitude,setLatitude]=useState('');
//   const[longitude,setLongitude]=useState('');
const ImagePicker=()=>{
    let options={
        storageOptions:{
            path:'image',
        },
    };
    launchImageLibrary(options, response=>{
        setImage(response.assets[0].uri);
    });
    setUploaded(true);
}


  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Disable back button press
        return true;
      };

      // Add a listener for the back button press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Remove the listener when the screen loses focus or on component unmount
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );


  const showWelcome=()=>{

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Welocme',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  }
  useEffect(() => {
    showWelcome();
  }, []);
  // useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log('Latitude');
    //     console.log(position.coords.latitude);
    //     console.log('Longitude');
    //     console.log(position.coords.longitude);
    //     const la = JSON.stringify(position.coords.latitude);
    //     const lo = JSON.stringify(position.coords.longitude);
    //     setLatitude(la);
    //     setLongitude(lo);
    //   },
    //   (error) => console.log(error.message),
    //   {
    //     // enableHighAccuracy: true,
    //     timeout: 10000,
    //     // maximumAge: 1000,
    //   }
    // );
  // }, []);

    return (
      <>
      <ModalView style={styles.uploadbox}
        visible={visible}
        title={"Create Coupon"}
        onDismiss={() => setVisible(false)}
        onSubmit={() => {
          setVisible(false);
          showToast1();
          setImage('');
          setUploaded(false);
          
          
          
        }}
        cancelable
        >

            <TextInput
            label="name"
            value={rewardName}
            style={styles.inputText}
            placeholder='Reward Name'
            placeholderTextColor='black'
            onChangeText={(text) => setRewardName(text)}
            mode="outlined"
            />
            <TextInput
            style={styles.inputText}
            value={description}
            placeholder="Enter Description"
            placeholderTextColor="black"
            multiline
            numberOfLines={4} // You can adjust the number of lines as needed
            onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity onPress={()=>ImagePicker()} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
                {uploaded?(
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {/* <Text style={{color:'black'}}>Image Preview</Text> */}
            <Image  source={{uri:image}} style={styles.image} />
            </View>):null
                }
                <TextInput
        style={styles.inputText}
        value={coins}
        placeholder="Enter Coin Price"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(text) => setCoins(text)}
      />
          

          </ModalView>


      <ScrollView contentContainerStyle={styles.outer}>

        <View style={styles.first}>
        <LottieView source={require('../tree.json')} autoPlay loop={false} speed={3.0}   onError={console.error} style={{height:200,width:200}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage Free Nation</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.second}>
        <Image source={require('../garbage.png')}  style={{height:180,width:180}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Give Your Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.third}>
        <Image source={require('../trash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>

        <View style={styles.fourth}>
        <Image source={require('../cash.png')}  style={{height:160,width:160}} />
        <Text style={{color:'black', fontWeight:700,fontSize:20}}>Garbage</Text>
        <Text style={{color:'black', textAlign:'center',fontSize:15,}}>A garbage-free nation envisions a cleaner, healthier environment where waste is minimized and properly managed.</Text>
        </View>
        
      <Toast/>

      </ScrollView>
        <TouchableOpacity style={styles.create} onPress={()=>{
          setVisible(true);
          }}>
          <Text style={styles.book}>Create Coupon</Text>
        </TouchableOpacity>
      </>
    );
}
export default BusinessHome;

const styles = StyleSheet.create({
    outer:{
        alignItems:'center',
        width:width,
    },
    first:{
      backgroundColor:'white',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    second:{
      backgroundColor:'#f5fffa',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    third:{
      backgroundColor:'#fffff0',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    fourth:{
      backgroundColor:'#fff0f5',
      width:width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:5,
    },
    create:{
      backgroundColor:'black',
      // backgroundColor:'#408F45',
      borderRadius:25,
      position:'absolute',
      alignSelf:'center',
      top:540,
      
      
      // zIndex:1,
    },
    book:{
      fontSize:20,
      padding:18,
      color:'white',
    },
    inputText:{
      borderRadius:10,
      borderColor:'black',
      borderWidth:1.5,
      color:'black',
      marginTop:10,
    },
    pick:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
      borderWidth:1.5,
      marginTop:5,
      borderRadius:10,
    },
    textArea: {
      borderColor:'black',
      color:'black',
      marginTop:5,
      borderWidth:1.5,
      borderRadius:10,
      height: 100, // Adjust the height as needed
      textAlignVertical: 'top', // This makes the text start from the top
      paddingTop: 10, // Adjust the padding as needed
    },
    regText: {
      color: 'black',
      fontSize: 30,
    },
    image: {
        width: 160,
        height: 150,
        margin: 5,
        borderRadius: 5,
      },
      button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        marginTop:10,
        paddingVertical:16,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign:'center',
      },


})