import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from '../../../styles';

export default function TripTabs({ activeTab, setActiveTab, trips }) {
  return (
    <View style={styles.tripsContainer}>
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'trips' && styles.activeTab]}
          onPress={() => setActiveTab('trips')}
        >
          <Text style={styles.tabText}>Upcoming Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'parcels' && styles.activeTab]}
          onPress={() => setActiveTab('parcels')}
        >
          <Text style={styles.tabText}>Parcel Deliveries</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.tripList}>
        {trips.map(trip => (
          <View key={trip.id} style={styles.tripCard}>
            <View style={styles.tripTime}>
              <Entypo name="back-in-time" size={16} color="#4ade80" />
              <Text style={styles.tripTimeText}>{trip.time}</Text>
            </View>
            <View style={styles.tripRoute}>
              <View style={styles.routeDot} />
              <View style={styles.routeLine} />
              <View style={[styles.routeDot, styles.destinationDot]} />
            </View>
            <View style={styles.tripDetails}>
              <Text style={styles.pickupLocation}>{trip.pickup}</Text>
              <Text style={styles.destinationLocation}>{trip.destination}</Text>
            </View>
            <Text style={styles.tripFare}>{trip.fare}</Text>
          </View>
        ))}
        
        {trips.length === 0 && (
          <View style={styles.noTripsContainer}>
            <FontAwesome5 name="car" size={48} color="#94a3b8" />
            <Text style={styles.noTripsText}>No upcoming trips</Text>
            <Text style={styles.noTripsSubtext}>Go online to receive ride requests</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}