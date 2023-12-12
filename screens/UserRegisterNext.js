import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import user from '../user.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const UserRegisterNext = ({route}) => {
    const navigation=useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async () => {
    navigation.navigate('UserLogin');

    let data = {
      "username" : route.params.username,
      "password" : route.params.password,
      "mobile" : mobileNumber,
      "email" : email,
      "full_name" : fullName
    }
    let res = await axios.post("https://localhost:8000/auth/public/signup", data);
    let dt = await res.data();

    console.log(dt["status"]);
  }

    

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

      <TextInput
        style={styles.input}
        value={fullName}
        placeholder="Enter your Full Name"
        placeholderTextColor="black"
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your Email"
        placeholderTextColor="black"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={mobileNumber}
        placeholder="Enter your Mobile Number"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(text) => setMobileNumber(text)}
      />
      <TextInput
  style={[styles.input, styles.textArea]}
  value={address}
  placeholder="Enter your Address"
  placeholderTextColor="black"
  multiline
  numberOfLines={4} // You can adjust the number of lines as needed
  onChangeText={(text) => setAddress(text)}
/>
      
      <TouchableOpacity style={styles.regButton} onPress={handleSubmit} >
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: '90%',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
    marginVertical: 10,
  },
  regButton: {
    backgroundColor: '#408F45',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
  },
  regButtonText: {
    color: 'white',
    fontSize: 25,
  },
  userImg: {
    height: 150,
    width: 150,
  },
  regText: {
    color: 'black',
    fontSize: 30,
  },
  textArea: {
    height: 100, // Adjust the height as needed
    textAlignVertical: 'top', // This makes the text start from the top
    paddingTop: 10, // Adjust the padding as needed
  }
});

export default UserRegisterNext;
