import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function ProfileSetupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [license, setLicense] = useState('');
  const [loading, setLoading] = useState(false);
  const { completeProfile } = useAuth();

  const handleComplete = async () => {
    if (!name || !vehicle || !license) {
      Alert.alert('Incomplete Profile', 'Please fill in all fields');
      return;
    }
    
    setLoading(true);
    const success = await completeProfile({ name, vehicle, license, isProfileComplete: true });
    setLoading(false);
    
    if (success) {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>
      <Text style={styles.subtitle}>Set up your driver profile to get started</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#94a3b8"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Vehicle Model"
        placeholderTextColor="#94a3b8"
        value={vehicle}
        onChangeText={setVehicle}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Driver's License Number"
        placeholderTextColor="#94a3b8"
        value={license}
        onChangeText={setLicense}
      />
      
      <TouchableOpacity 
        style={[styles.button, (!name || !vehicle || !license || loading) && styles.disabledButton]} 
        onPress={handleComplete}
        disabled={!name || !vehicle || !license || loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Saving...' : 'Complete Setup'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4ade80',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});