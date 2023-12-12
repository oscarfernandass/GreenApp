import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Linking , ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import LottieView from 'lottie-react-native';
  // App.propTypes = {
  //   someProp: StyleSheet.style,
  //   // other props
  // };

const CleanerQr=()=>{
  const[loading,setLoading]=useState(false);
  const[qrdata,setQrdata]=useState('');
  const[scanner,setScanner]=useState(false);
  const openQr = () => {
    setScanner(true);
  };
  const closeQr=()=>{
    setScanner(false);
  }
  const openner = (data) => {
    setQrdata(data.toString());
    try {
      const url = data.data.trim(); // Extract the URL from the data property
      if (Linking.canOpenURL(url)) {
        Linking.openURL(url);
        setLoading(false);
      } else {
        alert("Invalid link");
        setLoading(false);
      }
    } catch (error) {
      alert("Error: " + error.message);
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.outer}>
      {!scanner?(
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:15}}>
              <LottieView source={require('../scan.json')} autoPlay loop onError={console.error} style={{height:300,width:300}} />

            <Text style={styles.para}>Join the eco-conscious movement with our innovative waste disposal system. After responsibly submitting your waste, a quick scan of your unique QR code ensures transparent tracking and real-time updates on your environmental contributions. Embrace the convenience of technology while making a positive impact on the planet – it's recycling redefined, one scan at a time. Together, let's create a cleaner, greener future!</Text>
        <TouchableOpacity style={styles.buttone} onPress={openQr}>
        <Text style={styles.scanText}>Scan QR</Text>
      </TouchableOpacity>
      </View>
      )

:(
  <View style={styles.scannerContainer}>
  {loading ? <ActivityIndicator style={styles.loader} size="large" color="black" /> : null}
  <View style={styles.cam}>
  <QRCodeScanner
    flashMode={RNCamera.Constants.FlashMode.auto}
    onRead={(data)=>{
      setLoading(true);
      openner(data);
    }}
    cameraStyle={styles.cameraStyle}
    reactivate={true}
    reactivateTimeout={4000}
    bottomContent={
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:width}}>
      <TouchableOpacity style={styles.button} onPress={closeQr}>
        <Text style={styles.scanText}>Close</Text>
      </TouchableOpacity>
      </View>
    }

  />
  </View>
</View>

      )}

    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex:2,
  },
  button: {
    color:'white',
    backgroundColor: '#408F45',
    borderRadius: 20,
    marginLeft:40,
    marginTop:170,
    paddingHorizontal:20,
    paddingVertical:10,
    // Add padding to make the touchable area larger
},
buttone: {
    // position:'absolute',
    // alignSelf:'center',
    // bottom:0,
    backgroundColor: '#408F45',
    borderRadius: 20,
    // marginLeft:40,
    paddingHorizontal:20,
    paddingVertical:10,
    // marginTop:150,
    // padding: 10, // Add padding to make the touchable area larger
},
loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -20, // Adjust these values based on the size of your ActivityIndicator
    marginLeft: -20,
  },
  scanText: {
    fontSize: 30,
    color: 'white',
  },
  scannerContainer: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  para:{
    color:'black',
    textAlign:'center',
    width:width-10,
    fontSize:15,

  },
  cameraStyle:{
    width:400,
    height:100,
  },
//   cam:{
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',

//   }
});
export default CleanerQr;