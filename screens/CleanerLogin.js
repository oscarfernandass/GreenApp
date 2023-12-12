import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView,Image } from 'react-native';
import user from '../cleaner.png';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
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
  
  const handleLogin = () => {
    if(userName==='' || password===''){
      fillin();
    }
    else{
      navigation.navigate('CleanerMain',{userName:userName});
    }
    
  };
  const handleRegister = () => {
    console.log('Email:', userName);
    console.log('Password:', password);
  };

  return (
    <>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >
        <Toast style={{zIndex:1}}/>
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

      <TouchableOpacity style={styles.regButton} onPress={()=>{
        navigation.navigate('CleanerRegister');
      }}>
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
    
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
    backgroundColor: 'white',
    gap:16,
    zIndex:2,
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
    borderColor:'black',
    borderWidth:2,
    fontSize:17,
  },
  logButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:10,
    width:250,
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
    paddingHorizontal:10,
    paddingVertical:10,
    width:250,
  },
  regButtonText: {
    color: 'white',
    fontSize: 25,
  },
  userImg:{
    height:150,
    width:150,
  }
});

export default UserLogin;
