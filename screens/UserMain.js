import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHomer from './UserHomer.js';
import UserMap from './UserMap.js';
import UserReward from './UserReward.js';
import UserQr from './UserQr.js';
import UserCommMain from './UserCommMain.js';
import { Dimensions,Image ,TouchableOpacity,Alert} from 'react-native';
import homeIcon from '../homeIcon.png';
import mapIcon from '../mapIcon.png';
import rewardIcon from '../rewardIcon.png';
import qrIcon from '../qrIcon.png';
import profileIcon from '../profileIcon.png';
import logger from '../logger.png';
import group from '../group.png';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserRewardMain from './UserRewardMain.js';
const Tab = createBottomTabNavigator();
const UserMain =({route}) => {
  const navigate=useNavigation();
  const name ="Hi " +route?.params?.userName;
  const bot=route?.params?.userName;

  return (
      <Tab.Navigator>

        <Tab.Screen
          name={name}
          component={UserHomer}
          initialParams={{ name:bot }}
          options={({ navigation }) => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
              source={focused ? homeIcon : homeIcon}
              style={{ width: size, height: size, tintColor: color }}
              />
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 16 }}
                  onPress={() =>{
                    Alert.alert(
                      'Logout',
                      'Do you want to logout?',
                      [
                        {
                          text: 'Cancel',
                          style: 'cancel',
                        },
                        {
                          text: 'Logout',
                          onPress: () => {
                            navigation.navigate('Selection');
                            alert('Logged Out');
                            AsyncStorage.removeItem('userLoggedIn');
                          },
                        },
                      ],
                      { cancelable: true }
                    );
                  }}
                  >
                  <Image source={logger} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => navigation.navigate('UserInformation')}
                >
                  <Image source={profileIcon} style={{ width: 37, height: 37 }} />
                </TouchableOpacity>
              )
            })}
        />

        <Tab.Screen
         name='UserMap' 
         component={UserMap}
         options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? mapIcon : mapIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={mapIcon} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />

        <Tab.Screen
         name='UserCommMain' 
         component={UserCommMain}
         options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? group : group}
              style={{ width: 37, height: 37, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={group} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />

        <Tab.Screen 
        name='UserRewardMain' 
        component={UserRewardMain}
        
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? rewardIcon : rewardIcon}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={rewardIcon} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />

        <Tab.Screen 
        name='UserQR' 
        component={UserQr}
        initialParams={{ name:bot }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={focused ? qrIcon : qrIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <Image source={qrIcon} style={{ width: 37, height: 37 }} />
            </TouchableOpacity>
          )
        }}
         />
        
      </Tab.Navigator>
  );
};

export default UserMain;
