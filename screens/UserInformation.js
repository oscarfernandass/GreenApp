import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-modern-datepicker';
import feedback from '../feedback.png';
const { width, height } = Dimensions.get('window');
import ModalView from './ModalView';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const UserInformation = () => {

  const showToast1 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Feedback Sent',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  // const[userName,setUserName]=useState('');
  const[feedback,setFeedback]=useState('');
  const[date,setDate]=useState('');
  const[location,setLocation]=useState('');

  const[visible,setVisible]=useState(false);
  return (
    <>
    <ModalView style={styles.uploadbox}
        visible={visible}
        name="Add Post"
        title={"Feed Back"}
        onDismiss={() => setVisible(false)}
        onSubmit={async () => {
          setVisible(false);
          
          let data = {
            "username" : await AsyncStorage.getItem("userUserName"),
            "feedback" : feedback,
            "datetime" : date,
            "location" : location
          }
          console.log(data);
          let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/user/feedback", data);
          let dt = await res.data;
          
          console.log(dt);

          showToast1();

        }}
        cancelable
        >

          <TextInput
            label="name"
            value={feedback}
            style={styles.inputText}
            placeholder='Enter FeedBack'
            placeholderTextColor='black'
            multiline
            numberOfLines={4}
            onChangeText={(text) => setFeedback(text)}
            mode="outlined"
            />
          <View style={styles.pick}>
           <DatePicker
           onSelectedChange={date => setDate(date)}
           style={{
             height:300,
            }}
            />
           </View>
           <TextInput
            style={styles.inputText}
            value={location}
            placeholder="Enter Location"
            placeholderTextColor="black"
            multiline
            numberOfLines={3} 
            onChangeText={(text) => setLocation(text)}
            />
          </ModalView>

    <View style={styles.container}>
      <Toast/>
      <Image style={styles.img} source={feedback}/>
      <TouchableOpacity style={styles.go}
      onPress={()=>{
        setVisible(true);
      }}
      >
        <Text style={styles.feed}>FeedBack</Text>
      </TouchableOpacity>
    </View>
      </>
  )
}

export default UserInformation

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:height-100,
        width:width,
        gap:15,
    },
    informText:{
        color:'black',
    },
    go:{
      backgroundColor:'black',
      borderRadius:12,
    },
    feed:{
      padding:15,
      fontSize:25,
      color:'white',

    },
    img:{
      width:150,
      height:150,
    },
    inputText:{
      borderRadius:10,
      borderColor:'black',
      borderWidth:1.5,
      color:'black',
      marginTop:10,
    },

})