import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Screens/HomeScreen';
import Searchscreen from './Screens/Searchscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          
          // tabBarLabel: 'Home',
          tabBarShowLabel:false,

          title:'Technical Abhi News',
          headerTitleAlign:'center',
          headerTitleStyle:{
            color:'tomato',
            fontSize:30,
            fontWeight:'bold',
          },

          tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={50} />
          ),
          tabBarStyle:{
            backgroundColor:'white',
            height:80,
            paddingBottom:10,
          }

        }}
      />
      <Tab.Screen name="Search" component={Searchscreen}
        options={{
          // tabBarLabel: 'Search',
          tabBarShowLabel:false,
          title:'Technical Abhi News',
          headerTitleAlign:'center',
          
          headerTitleStyle:{
            color:'tomato',
            fontSize:30,
            fontWeight:'bold',
          },
          tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={50} />
          ),
          tabBarStyle:{
            backgroundColor:'white',
            height:80,
            paddingBottom:10,
          }
        }}
       />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

