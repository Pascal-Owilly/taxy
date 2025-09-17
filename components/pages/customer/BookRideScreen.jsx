import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BookRideScreen() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [notes, setNotes] = useState('');
  const [pickupCoord, setPickupCoord] = useState(null);
  const [dropoffCoord, setDropoffCoord] = useState(null);
  const [selecting, setSelecting] = useState('pickup');
  const [driverAssigned, setDriverAssigned] = useState(null);

  const dummyDriver = {
    name: 'James Mwangi',
    rating: '4.9',
    vehicle: 'Toyota Axio',
    plate: 'KDA 123X',
    image: 'https://i.pravatar.cc/150?img=31',
  };

  const handleMapPress = (e) => {
    const coord = e.nativeEvent.coordinate;
    if (selecting === 'pickup') {
      setPickupCoord(coord);
      setPickup(`Lat: ${coord.latitude.toFixed(4)}, Lng: ${coord.longitude.toFixed(4)}`);
    } else {
      setDropoffCoord(coord);
      setDropoff(`Lat: ${coord.latitude.toFixed(4)}, Lng: ${coord.longitude.toFixed(4)}`);
    }
  };

  const handleBookRide = () => {
    if (!pickup || !dropoff) {
      Alert.alert('Missing Info', 'Please provide pickup and drop-off locations.');
      return;
    }

    setDriverAssigned(dummyDriver);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#0f172a' }]}>
      <Text style={styles.header}>Book a Ride</Text>

      <MapView
        style={styles.map}
        onLongPress={handleMapPress}
        initialRegion={{
          latitude: -1.2921,
          longitude: 36.8219,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {pickupCoord && <Marker coordinate={pickupCoord} title="Pickup" pinColor="green" />}
        {dropoffCoord && <Marker coordinate={dropoffCoord} title="Drop-off" pinColor="red" />}
      </MapView>

      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            selecting === 'pickup' && styles.switchButtonActive,
          ]}
          onPress={() => setSelecting('pickup')}
        >
          <Text style={styles.switchText}>Set Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.switchButton,
            selecting === 'dropoff' && styles.switchButtonActive,
          ]}
          onPress={() => setSelecting('dropoff')}
        >
          <Text style={styles.switchText}>Set Drop-off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome5 name="map-marker-alt" color="#94a3b8" size={18} />
        <TextInput
          placeholder="Pickup Location"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={pickup}
          onChangeText={setPickup}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome5 name="location-arrow" color="#94a3b8" size={18} />
        <TextInput
          placeholder="Drop-off Location"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={dropoff}
          onChangeText={setDropoff}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome5 name="sticky-note" color="#94a3b8" size={18} />
        <TextInput
          placeholder="Additional Notes"
          placeholderTextColor="#94a3b8"
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>

      <TouchableOpacity onPress={handleBookRide} style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Request Ride</Text>
      </TouchableOpacity>

      {driverAssigned && (
        <View style={styles.driverCard}>
          <Text style={styles.sectionTitle}>Driver Assigned</Text>
          <View style={styles.driverInfo}>
            <FontAwesome5 name="user-tie" size={30} color="#4ade80" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                {driverAssigned.name}
              </Text>
              <Text style={{ color: '#94a3b8' }}>
                ⭐ {driverAssigned.rating} • {driverAssigned.vehicle}
              </Text>
              <Text style={{ color: '#94a3b8' }}>Plate: {driverAssigned.plate}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: '600',
  },
  map: {
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchButton: {
    flex: 1,
    padding: 10,
    borderColor: '#94a3b8',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  switchButtonActive: {
    backgroundColor: '#4ade80',
  },
  switchText: {
    color: '#0f172a',
    fontWeight: '600',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
  input: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#4ade80',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  primaryButtonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '600',
  },
  driverCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#f1f5f9',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
