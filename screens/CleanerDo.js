import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CleanerDo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today's Work</Text>
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
    }
})