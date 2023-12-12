import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.informText}>UserInformation</Text>
    </View>
  )
}

export default UserInformation

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