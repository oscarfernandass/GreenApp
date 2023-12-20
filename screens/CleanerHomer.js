import { TouchableOpacity, Text, Easing } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CleanerChatBot from './CleanerChatBot';
const Stack = createNativeStackNavigator();
import CleanerHome from './CleanerHome';
import CleanerInformation from './CleanerInformation';


const CleanerHomer = ({route}) => {
  const Nam=route.params.Name;

  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CleanerHome"
          component={CleanerHome}
          initialParams={{ Game: Nam }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerInformation"
          component={CleanerInformation}
          initialParams={{ Game: Nam }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CleanerChatBot"
          component={CleanerChatBot}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default CleanerHomer;


// import { StyleSheet, TouchableOpacity, ScrollTouchableOpacity, Dimensions,ScrollView,Image,Text ,View} from 'react-native';
// import React from 'react';

// const { height } = Dimensions.get('window');
// import greenLand from './greenLand.jpg';
// import greenPeople from './greenPeople.jpg';
// import Konari from './Konari.jpg';
// import trashBox from './trashBox.jpg';

// const App = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
      
//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={greenLand}/>
//         </View>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Green Land Kochi</Text>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Green People Kochi</Text>
//         </View>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={greenPeople}/>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={Konari}/>
//         </View>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Konari Waste Center</Text>
//         </View>

//       </TouchableOpacity>

//       <TouchableOpacity style={styles.Mapper}>

//         <View style={styles.textView}>
//         <Text style={styles.text}>Trash Box Kochi</Text>
//         </View>

//         <View style={styles.imgView}>
//         <Image style={styles.img} source={trashBox}/>
//         </View>

//       </TouchableOpacity>

     

//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 15, 
//     gap:10,
//     // Adjust the padding as needed
//   },
//   Mapper: {
//     backgroundColor: 'orange',
//     height: 120, // Adjust the height as needed
//     width: 300,
//     borderRadius: 10,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection:'row',
//     gap:5,
//   },
//   img:{
//     width:150,
//     height:120,
//     borderRadius:10,
//     // marginRight:140,
//   },
//   text:{
//     color:'black',
//     fontSize:24,
//     textAlign:'center',
//   },
//   imgView:{
//     width:150,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   textView:{
//     width:150,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     textAlign:'center',
//   }
// });
