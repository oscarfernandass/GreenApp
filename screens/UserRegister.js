import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import user from '../user.png';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const UserRegister = () => {
  const navigation=useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  useEffect(() => {
    function check(a, b) {
      if (a !== '' && b !== '') {
        return a === b;
      }
      return false;
    }

    const match = check(password, confirmpass);
    setPasswordsMatch(match);
  }, [password, confirmpass]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.content}>
        <Image source={user} style={styles.userImg} />
        <Text style={styles.regText}>Registration</Text>
      </View>

      <TextInput
        style={styles.input}
        value={username}
        placeholder="Enter your UserName"
        placeholderTextColor="black"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter your password"
        placeholderTextColor="black"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={confirmpass}
        placeholder="Confirm password"
        placeholderTextColor="black"
        secureTextEntry
        onChangeText={(text) => setConfirmpass(text)}
      />
      {passwordsMatch !== null && (
        <Text style={{ color: passwordsMatch ? 'green' : 'red' }}>
          {passwordsMatch ? 'Password Matched' : 'Password Mismatch'}
        </Text>
      )}

      <TouchableOpacity style={styles.regButton} onPress={() =>{
        navigation.navigate('UserRegisterNext', {"username" : username, "password" : password});
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
});

export default UserRegister;
