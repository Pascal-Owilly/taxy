import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FareCalculator from '../screens/payment/FareCalculator';

export default function ParcelForm({ onCreateParcel }) {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = () => {
    const fare = FareCalculator(parseFloat(distance) || 0);
    onCreateParcel({
      sender,
      receiver,
      pickup,
      destination,
      weight,
      fare
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sender Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Sender Name"
        placeholderTextColor="#94a3b8"
        value={sender}
        onChangeText={setSender}
      />
      
      <Text style={styles.sectionTitle}>Receiver Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Receiver Name"
        placeholderTextColor="#94a3b8"
        value={receiver}
        onChangeText={setReceiver}
      />
      <TextInput
        style={styles.input}
        placeholder="Receiver Phone"
        placeholderTextColor="#94a3b8"
        keyboardType="phone-pad"
      />
      
      <Text style={styles.sectionTitle}>Package Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        placeholderTextColor="#94a3b8"
        value={pickup}
        onChangeText={setPickup}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        placeholderTextColor="#94a3b8"
        value={destination}
        onChangeText={setDestination}
      />
      
      <View style={styles.row}>
        <View style={styles.halfInput}>
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            placeholderTextColor="#94a3b8"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
        <View style={styles.halfInput}>
          <TextInput
            style={styles.input}
            placeholder="Distance (km)"
            placeholderTextColor="#94a3b8"
            keyboardType="numeric"
            value={distance}
            onChangeText={setDistance}
          />
        </View>
      </View>
      
      {distance && (
        <View style={styles.farePreview}>
          <Text style={styles.fareText}>Estimated Fare: KES {FareCalculator(parseFloat(distance) || 0}</Text>
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={!sender || !receiver || !pickup || !destination}
      >
        <Text style={styles.submitButtonText}>Create Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  farePreview: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  fareText: {
    color: '#4ade80',
    fontWeight: 'bold',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#4ade80',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});