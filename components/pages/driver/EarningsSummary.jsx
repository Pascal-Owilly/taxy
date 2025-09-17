import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';

export default function EarningsSummary() {
  const earningsData = [
    { id: 1, type: 'Completed Trips', value: 12, amount: 'KES 15,400' },
    { id: 2, type: "Today's Earnings", value: null, amount: 'KES 8,650' },
    { id: 3, type: 'Online Time', value: '4h 22m', amount: null },
  ];

  return (
    <View style={styles.earningsContainer}>
      <Text style={styles.sectionTitle}>Today's Summary</Text>
      <View style={styles.earningsGrid}>
        {earningsData.map(item => (
          <View key={item.id} style={styles.earningsCard}>
            <Text style={styles.earningsType}>{item.type}</Text>
            {item.value && <Text style={styles.earningsValue}>{item.value}</Text>}
            {item.amount && <Text style={styles.earningsAmount}>{item.amount}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
}