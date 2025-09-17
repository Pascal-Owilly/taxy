import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../../../styles';

export default function HistoryScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#0f172a' }]}>
      <StatusBar style="light" />
      <Text style={[styles.sectionTitle, { marginHorizontal: 16 }]}>Trip History</Text>
      
      <View style={styles.historyTabs}>
        <TouchableOpacity style={[styles.historyTab, styles.activeHistoryTab]}>
          <Text style={styles.historyTabText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyTab}>
          <Text style={styles.historyTabText}>Parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyTab}>
          <Text style={styles.historyTabText}>Earnings</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.historyList}>
        {[1, 2, 3, 4, 5].map(id => (
          <View key={id} style={styles.historyCard}>
            <View style={styles.historyIcon}>
              <FontAwesome5 name={id % 2 === 0 ? "car" : "box"} size={20} color="#4ade80" />
            </View>
            <View style={styles.historyDetails}>
              <Text style={styles.historyTitle}>
                {id % 2 === 0 ? 'Passenger Trip' : 'Parcel Delivery'}
              </Text>
              <Text style={styles.historyDate}>May {28-id}, 2023 • 08:3{id} AM</Text>
              <Text style={styles.historyRoute}>Nairobi CBD to {id % 2 === 0 ? 'JKIA' : 'Westlands'}</Text>
            </View>
            <Text style={styles.historyAmount}>KES {id % 2 === 0 ? '1,200' : '850'}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.historySummary}>
        <Text style={styles.summaryTitle}>Weekly Earnings</Text>
        <Text style={styles.summaryAmount}>KES 24,850</Text>
        <Text style={styles.summaryNote}>+12% from last week</Text>
      </View>
    </View>
  );
}