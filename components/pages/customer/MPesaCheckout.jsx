import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function MPesaCheckout({ amount, onSuccess, onCancel }) {
  const [loading, setLoading] = useState(false);
  
  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Payment Successful',
        `KES ${amount} has been paid successfully`,
        [
          { text: 'OK', onPress: onSuccess }
        ]
      );
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Payment</Text>
      <Text style={styles.amount}>KES {amount}</Text>
      
      <Text style={styles.note}>
        You will receive a prompt on your phone to complete the payment
      </Text>
      
      <TouchableOpacity 
        style={styles.payButton}
        onPress={handlePayment}
        disabled={loading}
      >
        <Text style={styles.payButtonText}>
          {loading ? 'Processing...' : 'Pay with M-Pesa'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.cancelButton}
        onPress={onCancel}
        disabled={loading}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4ade80',
    textAlign: 'center',
    marginBottom: 24,
  },
  note: {
    textAlign: 'center',
    color: '#94a3b8',
    marginBottom: 32,
  },
  payButton: {
    backgroundColor: '#4ade80',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  payButtonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    padding: 16,
  },
  cancelButtonText: {
    color: '#ef4444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});