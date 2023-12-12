import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import user from '../business.png';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const UserRegister = () => {
  const navigation=useNavigation();
  const [type, setType] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');


  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

          <TextInput
            style={styles.input}
            value={businessName}
            placeholder="Enter your Full Name"
            placeholderTextColor="black"
            onChangeText={(text) => setBusinessName(text)}
          />
      <View style={styles.input}>

      <Picker
        selectedValue={type}
        style={styles.picker}
        
        onValueChange={(itemValue) => handleTypeChange(itemValue)}
      >
        <Picker.Item label="Select Business Type" value="" />
        <Picker.Item label="Supervisor" value="Supervisor" />
        <Picker.Item label="Worker" value="Worker" />
      </Picker>
        </View>

      <TextInput
        style={styles.input}
        value={mobile}
        placeholder="Enter your Mobile Number"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter your Email (Optional)"
        placeholderTextColor="black"
        onChangeText={(text) => setEmail(text)}
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

      <TouchableOpacity style={styles.regButton} onPress={() =>{
        navigation.navigate('BusinessRegisterNextFinal');
        // alert("Registration Successfull");
      }}>
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
  picker: {
    height: 60,
    width: '90%',
    borderRadius: 8,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
    marginRight:50,
    marginVertical: 10,
  },
  input: {
    height: 55,
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 17,
    marginVertical: 10,
    justifyContent:'center',
    alignItems:'center',
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

export default UserRegister;