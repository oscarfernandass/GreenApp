import { Text, StyleSheet, View,Dimensions,TouchableOpacity,ScrollView,Image,FlatList} from 'react-native'
import { useEffect, useState } from 'react';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import greenLand from '../greenLand.jpg';
import greenPeople from '../greenPeople.jpg';
import Konari from '../Konari.jpg';
import trashBox from '../trashBox.jpg';
import axios from 'axios';
import ImageContain from './ImageContain';
import UserVoucher from './UserVoucher';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserReward = () => {
  const [coins, setCoins] = useState(0);
  const [rewards, setRewards] = useState([]);
  const[uri,setUri]=useState('');
  const [logs, setLogs] = useState([]);
  const[loader,setLoader]=useState(false);
  const[refreshing,setRefreshing]=useState(false);
  const navigation=useNavigation();
  const handleRefresh=()=>{
    setRefreshing(true);
    getRewards();
    getCoins();
    setRefreshing(false);
  }

  const getRewards = async () => {
    try {
      setLoader(true);
      const res = await axios.get("https://bullfrog-rich-recently.ngrok-free.app/rewards/view/all");
      const dt = await res.data;
      // console.log(dt);
      setLogs(dt);

      var base64Icon = `data:image/png;base64,${dt[0]["image"]}`
      setUri(base64Icon);
      setLoader(false);
    } catch (error) {
      console.error('Error fetching rewards:', error);
    }
    setLoader(false);
  };

  const getCoins = async () => {
    let res = await axios.get(`https://bullfrog-rich-recently.ngrok-free.app/getcoins/${await AsyncStorage.getItem("userUserName")}`);
    let dt = res.data;

    console.log(dt);

    setCoins(dt["coins"]);
  }

  useEffect(() => {
    getCoins();
    getRewards();
  }, []);
  const handles=()=>{
    getCoins();
    getRewards();
  }

  return (
    <View style={styles.outer}>
      <View style={styles.coiner}>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: width, gap: -5 }}>
          <LottieView source={require('../coin.json')} autoPlay loop onError={console.error} style={{ height: 90, width: 90 }} />
          <Text style={styles.coin}>{coins}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'green', height: 60, width: 130, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}
        onPress={()=>{
          navigation.navigate('UserVoucher');
        }}
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Vouchers</Text>
        </TouchableOpacity>
      </View>
      {loader?(
         <LottieView source={require('../welcomee.json')} autoPlay loop onError={console.error} style={{ height: 70,
          width: 70,
          alignSelf:'center',
          justifyContent:'center',
          marginTop:50,
           // Half of the element's width
           // Half of the element's height
        }} />
      ):(
      <FlatList showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            style={styles.flat}
            data={logs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <ImageContain
                businessName = {item.businessName}
                name = {item.name}
                points = {item.points}
                description = {item.description}
                image = {item.image}
                handles={handles}
                />
              </View>
            )}
            />
      )}
       
        
      
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