import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BusinessInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.informText}>BusinessInformation</Text>
    </View>
  )
}

export default BusinessInformation;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    informText:{
        color:'black',
    }
})