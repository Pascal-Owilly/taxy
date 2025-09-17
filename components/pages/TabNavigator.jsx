import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import DriverDashboard from './driver/DriverDashboard';
import RoleSelectionScreen from '../auth/RoleSelectionScreen';
import LiveMap from './driver/LiveMap';
import ParcelTracker from './driver/ParcelTracker';
import HistoryScreen from './driver/HistoryScreen';
import ProfileScreen from '../auth/ProfileScreen';
import styles from '../../styles';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#4ade80',
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={RoleSelectionScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Map" 
        component={LiveMap} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marker-alt" size={24} color={color} />
          ),
          tabBarLabel: 'Map',
        }}
      />
      <Tab.Screen 
        name="Parcels" 
        component={ParcelTracker} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shipping-fast" size={24} color={color} />
          ),
          tabBarLabel: 'Parcels',
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" size={24} color={color} />
          ),
          tabBarLabel: 'History',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}