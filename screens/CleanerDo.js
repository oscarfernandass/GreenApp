import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import CleanerDoList from './CleanerDoList'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
const CleanerDo = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>

        <View style={styles.inner}>
        <LottieView source={require('../work.json')} autoPlay loop onError={console.error} style={{height:90,width:70}} />
        <Text style={styles.text}>Today's Work</Text>
        </View>

        <ScrollView>


      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      <CleanerDoList name={"hi"} date={"hello"} address={"rbrb"}
      latitude={10.9367228} longitude={76.9564628}
      />
      

        </ScrollView>
    </View>
  )
}

export default CleanerDo

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'black',
        marginTop:15,
        fontSize:20,
    },
    inner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    }
})