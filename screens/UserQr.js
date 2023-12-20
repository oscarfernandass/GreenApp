import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const UserQr = ({route}) => {
  const fame=route.params.name;
  return (
    <View style={styles.outer}>
      <QRCode value={fame} size={300} />
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
      <LottieView source={require('../scan.json')} autoPlay loop onError={console.error} style={{height:50,width:50}} />
      <Text style={{color:'black',fontWeight:'800',fontSize:20}}>Show the above Qr to Cleaner</Text>
      </View>
      <View>
        <Text style={{color:'black'}}>Upon successful enrollment in our Waste Management Contributor Program, you will receive a unique QR code associated with your account. This QR code serves as your identification and contribution tracker.</Text>
        <Text style={{color:'black'}}>Look for cleaners displaying our official badge and ID. These individuals have undergone a thorough verification process, ensuring they are authorized participants in our waste management initiative.</Text>
      </View>
    </View>
  );
};

export default UserQr;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    gap:20,
  },
});
