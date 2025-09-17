import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';

export default function StatusCard() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => setIsOnline(!isOnline);
  
  const statusCardStyle = isOnline
    ? [styles.statusCard, { backgroundColor: '#16a34a' }]
    : [styles.statusCard, { backgroundColor: '#64748b' }];

  return (
    <View style={statusCardStyle}>
      <View style={styles.statusContent}>
        <View style={styles.statusTextContainer}>
          <Text style={styles.statusText}>
            {isOnline ? 'You are ONLINE' : 'You are OFFLINE'}
          </Text>
          <Text style={styles.statusSubtext}>
            {isOnline ? 'Accepting trip requests' : 'Go online to start earning'}
          </Text>
        </View>
        
        <TouchableOpacity 
          style={[styles.statusButton, isOnline && styles.onlineButton]}
          onPress={toggleOnlineStatus}
        >
          <Text style={styles.statusButtonText}>
            {isOnline ? 'GO OFFLINE' : 'GO ONLINE'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}