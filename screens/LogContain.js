import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const LogContain = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.Mapper}>
{/* <LottieView source={require('../cleaner.json')} autoPlay loop onError={console.error} style={{height:100,width:120,marginTop:10}} /> */}

<View style={styles.textView}>
  <Text style={styles.text}>{props.text}</Text>
</View>

<View style={styles.textView}>
  <Text style={styles.text}>{props.time} Units Collected</Text>
</View>

</TouchableOpacity>
</>
  )
}

export default LogContain

const styles = StyleSheet.create({
    Mapper: {
        backgroundColor: '#408F45',
        height: 80, // Adjust the height as needed
        width: 300,
        borderRadius: 10,
        // marginBottom: 15,
        marginTop:15,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        borderColor:'black',
        borderWidth:0.4,
        // flexWrap:'wrap',
        // gap:5,

      },
      text:{
        color:'black',
        fontSize:20,
        textAlign:'center',
        color:'white',
      },
      imgView:{
        width:120,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:25,
        // marginRight:-10,
    },
    textView:{
        width:150,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // textAlign:'center',
        // marginRight:0,
        fontSize:20,
    }
    
})