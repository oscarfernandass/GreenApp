import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native'
import React from 'react'

const ImageContain = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.Mapper}>

<View style={styles.imgView}>
  <Image style={styles.img} source={props.image} />
</View>

<View style={styles.textView}>
  <Text style={styles.text}>{props.text}</Text>
</View>

</TouchableOpacity>
    </View>
  )
}

export default ImageContain

const styles = StyleSheet.create({
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
        // marginRight:140,
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