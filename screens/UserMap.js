// import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import WebView from 'react-native-webview';

// const { width, height } = Dimensions.get('window');

// const UserMap = () => {
//   const mapUrl =
//     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016656.5075091985!2d73.49580932301718!3d10.53872537215472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1702184874702!5m2!1sen!2sin';

//   return (
//     <View style={styles.outer}>
//       <WebView
//         scalesPageToFit={true}
//         bounces={false}
//         javaScriptEnabled
//         style={{ height: 500, width: 500 }}
//         source={{
//           html: `
//             <!DOCTYPE html>
//             <html style="height: 100%;">
//               <head>
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//                 <style>
//                   body {
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     height: 100%;
//                     margin: 0;
//                   }
//                   #baseDiv {
//                     height: 100%;
//                   }
//                   iframe {
//                     width: 100%;
//                     height: 100%;
//                     border: 0;
//                   }
//                 </style>
//               </head>
//               <body>
//                 <div id="baseDiv">
//                   <iframe src="${mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//                 </div>
//               </body>
//             </html>
//           `,
//         }}
//         automaticallyAdjustContentInsets={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: height,
//     width: width,
//   },
// });

// export default UserMap;




import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SelectMap from './SelectMap';
import Map1 from './Map1';
import Map2 from './Map2';
import Map3 from './Map3';
import Map4 from './Map4';


const UserMap = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="SelectMap"
          component={SelectMap}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map1"
          component={Map1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map2"
          component={Map2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map3"
          component={Map3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map4"
          component={Map4}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  )
}

export default UserMap

const styles = StyleSheet.create({

})