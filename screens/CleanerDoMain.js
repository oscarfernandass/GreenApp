import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import CleanerDo from './CleanerDo'
const Stack = createNativeStackNavigator();
const CleanerDoMain = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="CleanerDo"
          component={CleanerDo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  )
}

export default CleanerDoMain

const styles = StyleSheet.create({

})