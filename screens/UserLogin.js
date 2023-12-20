import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView,Image } from 'react-native';
import user from '../user.png';
import {useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const UserLogin = ({route}) => {
  const navigation=useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const[loader,setLoader]=useState(false);
  const showToast3 = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Registration Success',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  const showToast1 = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'User not found',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
  const showToast2 = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Incorrect Password',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };

  useEffect(() => {
    // Check if showToast parameter is true
    if (route.params?.showToast1) {
      showToast3();
    }
   
  }, [route.params?.showToast1]);

  const fillin = () => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Please Fill All Attributes',
      // Optional, add more lines if needed
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      // backgroundColor: 'green', // Set your desired background color
    });
  };
    
    const handleLogin =async () => {
      if(userName==='' || password===''){
        fillin();
      }
      else{
        setLoader(true);
        let data ={
          "username" : userName,
          "password" : password
        }

        
        let res = await axios.post("https://bullfrog-rich-recently.ngrok-free.app/auth/public/signin", data);
        console.log(data);
        let dt = await res.data;

        console.log(dt["status"]);
        if(dt["status"]==="Incorrect Password"){
          setLoader(false);
          showToast2();
        }
        else if(dt["status"]==="User not found"){
          setLoader(false);
          showToast1();
        }
        else{
          await AsyncStorage.setItem('userLoggedIn', 'true');
          await AsyncStorage.setItem('userUserName', userName); 
          navigation.navigate('UserMain',{userName: userName});
          setLoader(false);
        }

        //  LOG  Incorrect Password
        //  LOG  User not found
        //  LOG  Login Successful
      
      }

  };
  const handleRegister = () => {
    navigation.navigate('UserRegister');
  };

  return (
    <>
    <Toast/>
      {loader?(
        <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{ height: 90,
          width: 90,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginLeft: -45, // Half of the element's width
          marginTop: -45, // Half of the element's height
        }} />
      ):(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      >
        <Toast/>
      <Image source={user} style={styles.userImg}></Image>
      <TextInput
        style={styles.input}
        placeholder="Enter User Name"
        onChangeText={(text) => setUserName(text)}
        placeholderTextColor={'black'}
        value={userName}
        keyboardType="name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor={'black'}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        />

      <TouchableOpacity style={styles.logButton} onPress={handleLogin}>
        <Text style={styles.logButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.regButton} onPress={handleRegister}>
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={{zIndex:1,marginTop:-90}}>
    <LottieView source={require('../plant.json')} autoPlay loop onError={console.error} style={{height:100,width:100,position: 'relative',
  top: 115,
  alignSelf: 'center',
  height: 100,
  width: 650,
  marginBottom: -50,
  }} />
  </View>

    </KeyboardAvoidingView>
      )}
    
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    backgroundColor: 'white',
    gap: 16,
    zIndex: 2,  // Set a lower zIndex for the container
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 60,
    width: 250,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
  },
  logButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 250,
  },
  logButtonText: {
    color: 'white',
    fontSize: 25,
  },
  regButton: {
    backgroundColor: '#408F45',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 250,
    zIndex: 2,  // Set a higher zIndex for the buttons
  },
  regButtonText: {
    color: 'white',
    fontSize: 25,
  },
  userImg: {
    height: 150,
    width: 150,
    zIndex: 3,  // Set an even higher zIndex for the image
  },
});


export default UserLogin;
