import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView,Image } from 'react-native';
import user from '../user.png';
import {useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLogin = () => {
  const navigation=useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  

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
      await AsyncStorage.setItem('userLoggedIn', 'true');
      await AsyncStorage.setItem('userName', userName); 
        navigation.navigate('UserMain',{userName: userName});
      }

  };
  const handleRegister = () => {
    console.log('Email:', userName);
    console.log('Password:', password);
    navigation.navigate('UserRegister');
  };

  return (
    <>
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
{/* <LottieView source={require('../plant.json')} autoPlay loop onError={console.error} style={{height:100,width:100,position: 'absolute',
  bottom: 0,
  zIndex:1,
  alignSelf: 'center',
  height: 150,
  width: 1500,
  pointerEvents: 'none',
  marginBottom: -30,}} /> */}
    
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
