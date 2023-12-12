import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import user from '../business.png';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
const BusinessRegisterNextFinal = () => {
    const navigation=useNavigation();
    const [type, setType] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');
    

    const ImagePicker=()=>{

        let options={
            storageOptions:{
                path:'image',
            },
        };
        launchImageLibrary(options, response=>{
            setImages(response.assets[0].uri);
        });
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

          
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        placeholder="Enter Business Description"
        placeholderTextColor="black"
        multiline
        numberOfLines={4} // You can adjust the number of lines as needed
        onChangeText={(text) => setDescription(text)}
        />
        <TouchableOpacity onPress={()=>ImagePicker()} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {/* {images.map((image, index) => ( */}
            <Image  source={{uri:images}} style={styles.image} />
        {/* ))} */}
      </View>

      <TouchableOpacity style={styles.regButton} onPress={() =>{
          navigation.navigate('CleanerLogin');
          alert("Registration Successfull");
        }}>
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default BusinessRegisterNextFinal;

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
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 160,
    height: 150,
    margin: 5,
    borderRadius: 5,
  },
});

