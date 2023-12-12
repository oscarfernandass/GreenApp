import { Text, StyleSheet, View,Dimensions,TouchableOpacity,ScrollView,Image } from 'react-native'
import { useState } from 'react';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import greenLand from '../greenLand.jpg';
import greenPeople from '../greenPeople.jpg';
import Konari from '../Konari.jpg';
import trashBox from '../trashBox.jpg';

const UserReward = () => {
  const [coins, setCoins] = useState(49);

  return (
    <View style={styles.outer}>
      <View style={styles.coiner}>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: width, gap: -5 }}>
          <LottieView source={require('../coin.json')} autoPlay loop onError={console.error} style={{ height: 90, width: 90 }} />
          <Text style={styles.coin}>{coins}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'green', height: 60, width: 130, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 25 }}>Vouchers</Text>
        </TouchableOpacity>
      </View>
      
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity style={styles.Mapper}>

            <View style={styles.imgView}>
              <Image style={styles.img} source={greenLand} />
            </View>

            <View style={styles.textView}>
              <Text style={styles.text}>Green Land Kochi</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.Mapper}>

            <View style={styles.textView}>
              <Text style={styles.text}>Green People Kochi</Text>
            </View>

            <View style={styles.imgView}>
              <Image style={styles.img} source={greenPeople} />
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.Mapper}>

            <View style={styles.imgView}>
              <Image style={styles.img} source={Konari} />
            </View>

            <View style={styles.textView}>
              <Text style={styles.text}>Konari Waste Center</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.Mapper}>

            <View style={styles.textView}>
              <Text style={styles.text}>Trash Box Kochi</Text>
            </View>

            <View style={styles.imgView}>
              <Image style={styles.img} source={trashBox} />
            </View>

          </TouchableOpacity>

        </ScrollView>
      
    </View>
  );
};
export default UserReward;

const styles = StyleSheet.create({
    outer:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        height:height,
        width:width,
        gap:10,
    },
    coiner:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
    },
    coin:{
      fontSize:50,
      color:'gold',
      fontWeight:'900'
    },
    redeem:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
    },
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f3f4',
      paddingHorizontal: 15,
      paddingVertical: 15,
      paddingTop: 15, // Add some top padding
      gap: 10,
      // Adjust the padding as needed
    },
    Mapper: {
      backgroundColor: 'orange',
      height: 120, // Adjust the height as needed
      width: 300,
      borderRadius: 10,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      gap:5,
    },
    img:{
      width:150,
      height:120,
      borderRadius:10,
    },
    text:{
      color:'black',
      fontSize:24,
      textAlign:'center',
    },
    imgView:{
      width:150,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    textView:{
      width:150,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
    }

})