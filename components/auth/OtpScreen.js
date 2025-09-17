// OtpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function OtpScreen({ navigation, route }) {
  const { phone } = route.params; 
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyOtp, role } = useAuth();

  const handleVerify = async () => {
    if (otp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter a 6-digit code');
      return;
    }

    setLoading(true);
    const success = await verifyOtp(otp, phone); // Always true in demo
    setLoading(false);

    if (success) {
      switch (role) {
        case 'admin':
          navigation.navigate('AdminDashboard');
          break;
        case 'driver':
          navigation.navigate('DriverDashboard');
          break;
        case 'conductor':
          navigation.navigate('ConductorDashboard');
          break;
        case 'customer':
          navigation.navigate('CustomerDashboard');
          break;
        default:
          navigation.navigate('ProfileSetup'); 
      }
    } else {
      Alert.alert('Verification Failed', 'The OTP you entered is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone</Text>
      
      <TextInput
        style={styles.input}
        placeholder="------"
        placeholderTextColor="#94a3b8"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        maxLength={6}
        textAlign="center"
        fontSize={24}
        autoFocus
      />
      
      <TouchableOpacity 
        style={[styles.button, (otp.length !== 6 || loading) && styles.disabledButton]} 
        onPress={handleVerify}
        disabled={otp.length !== 6 || loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Verifying...' : 'Verify'}
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
    height: 60,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    marginBottom: 32,
    letterSpacing: 8,
  },
  button: {
    backgroundColor: '#4ade80',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
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