import { View, Text, StyleSheet, Dimensions,TouchableOpacity,Image} from 'react-native';
import React,{useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import user from '../user.png';
import cleaner from '../cleaner.png';
import business from '../business.png';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Selection = () => {



  // useEffect(() => {
    const checkUserLoginStatus = async () => {
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        navigation.navigate('UserMain',{userName: storedUserName});
        const storedUserName = await AsyncStorage.getItem('userName');
        // SplashScreen.hide();
      }
      else{
        navigation.navigate('UserLogin');
      }
    };
    
    // checkLoginStatus();
  // }, []);
  const navigation=useNavigation();
  return (
    <>

    <View style={styles.outer}>
       <LottieView source={require('../planet.json')} autoPlay loop onError={console.error} style={{position: 'absolute',
  top: -50,
  alignSelf: 'center',
  height: 190,
  width: 500,}} />

      <TouchableOpacity style={styles.boxer} onPress={()=>checkUserLoginStatus()}>
        <Image style={styles.img} source={user}></Image>
        <View style={{width:150, justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.userText}> USER </Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.boxer} onPress={()=>navigation.navigate('CleanerLogin')}>
        <Image style={styles.img} source={cleaner}></Image>
        <View style={{width:150, justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.userText}> WORKER </Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.boxer} onPress={()=>navigation.navigate('BusinessLogin')}>
        <Image style={styles.img} source={business}></Image>
        <View style={{width:150, justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.userText}> BUSINESS </Text>
        </View>
      </TouchableOpacity>  

<LottieView source={require('../planet.json')} autoPlay loop onError={console.error} style={{position: 'absolute',
  bottom: -30,
  alignSelf: 'center',
  height: 190,
  width: 500,}} />
    </View>
    
    </>
  );
}

export default Selection;

const styles = StyleSheet.create({
  outer: {
    height: height,
    width: width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    gap:20,
  },
  selectText:{
    color:'black',
    fontFamily:'monospace',
    fontSize:50,

  },
  boxer:{
    backgroundColor:'#408F45',
    height:150,
    width:300,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  img:{
    height:100,
    width:100,
  },
  userText:{
    fontSize:30,
    fontFamily:'sans-serif-light',
    color:'white',

  }
});
