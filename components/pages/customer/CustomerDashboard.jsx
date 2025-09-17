import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import BookRideScreen from './BookRideScreen';
import ParcelTracker from '../driver/ParcelTracker';
import HistoryScreen from '../driver/HistoryScreen';
import ProfileScreen from '../../auth/ProfileScreen';
import { View, Text, Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0f172a',
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 5,
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color, fontSize: focused ? 12 : 10, fontWeight: focused ? '600' : '400' }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === 'BookRide') iconName = 'map-marker-alt';
          else if (route.name === 'Parcels') iconName = 'box';
          else if (route.name === 'History') iconName = 'history';
          else if (route.name === 'Profile') iconName = 'user';

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome5 name={iconName} size={focused ? 22 : 18} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#4ade80',   // Uber uses greenish active
        tabBarInactiveTintColor: '#94a3b8', // Slate/gray
      })}
    >
      <Tab.Screen name="BookRide" component={BookRideScreen} />
      <Tab.Screen name="Parcels" component={ParcelTracker} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
