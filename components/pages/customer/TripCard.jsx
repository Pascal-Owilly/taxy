import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TripCard({ type, date, from, to, fare, status }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <FontAwesome5 
          name={type === 'trip' ? "car" : "box"} 
          size={20} 
          color="#4ade80" 
        />
        <Text style={styles.date}>{date || 'Today'}</Text>
      </View>
      
      <View style={styles.route}>
        <View style={styles.routePoint}>
          <View style={styles.pointMarker} />
          <Text style={styles.routeText}>{from}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.routePoint}>
          <View style={[styles.pointMarker, styles.destinationMarker]} />
          <Text style={styles.routeText}>{to}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.fare}>{fare}</Text>
        <View style={[styles.status, status === 'Completed' || status === 'Delivered' ? styles.completedStatus : styles.pendingStatus]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    color: '#94a3b8',
  },
  route: {
    marginBottom: 16,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  pointMarker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4ade80',
    marginRight: 12,
  },
  destinationMarker: {
    backgroundColor: '#ef4444',
  },
  routeText: {
    color: 'white',
    flex: 1,
  },
  divider: {
    height: 20,
    width: 2,
    backgroundColor: '#334155',
    marginLeft: 5,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fare: {
    color: '#4ade80',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  completedStatus: {
    backgroundColor: '#dcfce7',
  },
  pendingStatus: {
    backgroundColor: '#fef3c7',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});