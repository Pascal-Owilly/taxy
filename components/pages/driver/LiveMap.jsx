import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../../../styles';

export default function MapScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#0f172a', flex: 1 }]}>
      <StatusBar style="light" />
      
      <View style={styles.mapHeader}>
        <Text style={styles.mapTitle}>Live Navigation</Text>
        <Text style={styles.mapSubtitle}>Tracking current route to JKIA</Text>
      </View>

      <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden', marginHorizontal: 10 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -1.319167,   
            longitude: 36.9275,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: -1.319167, longitude: 36.9275 }}
            title="JKIA"
            description="Jomo Kenyatta International Airport"
          />
        </MapView>
      </View>

      <View style={styles.mapControls}>
        <TouchableOpacity style={styles.mapControlButton}>
          <FontAwesome5 name="search" size={20} color="white" />
          <Text style={styles.mapControlText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapControlButton}>
          <FontAwesome5 name="route" size={20} color="white" />
          <Text style={styles.mapControlText}>Route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapControlButton}>
          <FontAwesome5 name="layer-group" size={20} color="white" />
          <Text style={styles.mapControlText}>Layers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
