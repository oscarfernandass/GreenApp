import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CleanerInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.informText}>CleanerInformation</Text>
    </View>
  )
}

export default CleanerInformation;

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