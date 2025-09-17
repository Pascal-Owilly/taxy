// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, role } = useAuth();

  const getRoleLabel = () => {
    switch (role) {
      case 'driver': return 'Driver';
      case 'conductor': return 'Conductor';
      case 'customer': return 'Customer';
      case 'admin': return 'Admin';
      default: return 'User';
    }
  };

  const handleLogin = async () => {
    if (!phone) return;

    setLoading(true);
    const success = await login(phone); // Always returns true now
    setLoading(false);

    if (success) {
      navigation.navigate('Otp', { phone });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('RoleSelection')}
      >
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome, {getRoleLabel()}</Text>
        <Text style={styles.subtitle}>Enter your phone number to continue</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+254</Text>
          <TextInput
            style={styles.input}
            placeholder="700 000 000"
            placeholderTextColor="#94a3b8"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            autoFocus
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.button, (!phone || loading) && styles.disabledButton]} 
          onPress={handleLogin}
          disabled={!phone || loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Sending OTP...' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  content: {
    flex: 1,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  prefix: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    fontSize: 16,
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