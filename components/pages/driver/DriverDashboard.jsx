import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, StatusBar, Text } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StatusCard from './StatusCard';
import EarningsSummary from './EarningsSummary';
import TripTabs from './TripTabs';
import LiveMap from './LiveMap';
import ParcelTracker from './ParcelTracker';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from '../../auth/ProfileScreen';

import styles from '../../../styles';

const Tab = createBottomTabNavigator();

function DashboardContent({ navigation }) {
  const [activeTab, setActiveTab] = useState('trips');

  const upcomingTrips = [
    { id: 1, time: '08:30 AM', pickup: 'Nairobi CBD', destination: 'JKIA', fare: 'KES 1,200' },
    { id: 2, time: '10:15 AM', pickup: 'Westlands', destination: 'Karen', fare: 'KES 850' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#0f172a' }]}>
      <StatusBar style="light" />

      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={{ uri: 'https://imgs.search.brave.com/JTfDSpoIKzhgyuAPF9-hDFQVX5PvtNEvmx99t91ns80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/eW91bmctbWFuLXdp/dGgtZ2xhc3Nlcy1p/bGx1c3RyYXRpb25f/MTMwOC0xNzQ3MDYu/anBnP3NlbXQ9YWlz/X2l0ZW1zX2Jvb3N0/ZWQmdz03NDA' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>David Kamau</Text>
            <Text style={styles.rating}>⭐ 4.92 (128 ratings)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color="#fff" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <StatusCard />
      <EarningsSummary />
      <TripTabs activeTab={activeTab} setActiveTab={setActiveTab} trips={upcomingTrips} />
    </ScrollView>
  );
}

export default function DriverDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navBar,
        tabBarActiveTintColor: '#4ade80',
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardContent}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tachometer-alt" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={LiveMap}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marker-alt" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Parcels"
        component={ParcelTracker}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shipping-fast" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
