import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../../../styles';

export default function ParcelsScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#0f172a' }]}>
      <StatusBar style="light" />

      <View style={styles.parcelsHeader}>
        <Text style={styles.sectionTitle}>Active Deliveries</Text>
        <TouchableOpacity style={styles.newParcelButton}>
          <FontAwesome5 name="plus" size={16} color="white" />
          <Text style={styles.newParcelText}>New Delivery</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.parcelList}>
        {[1, 2, 3].map(id => (
          <View key={id} style={styles.parcelCard}>
            <View style={styles.parcelInfo}>
              <FontAwesome5 name="box" size={24} color="#4ade80" />
              <View style={styles.parcelDetails}>
                <Text style={styles.parcelId}>Parcel #TR{id}984</Text>
                <Text style={styles.parcelRoute}>Westlands to Karen</Text>
              </View>
            </View>

            <View style={styles.parcelStatus}>
              <Text style={styles.parcelStatusText}>In Transit</Text>
              <Text style={styles.parcelTime}>Estimated: 45 min</Text>
            </View>

            <TouchableOpacity style={styles.scanButton}>
              <FontAwesome5 name="qrcode" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.parcelTracker}>
          <Text style={styles.trackerTitle}>Delivery Progress</Text>
          <View style={styles.trackerSteps}>
            {['Processing', 'Picked Up', 'In Transit', 'Delivered'].map((step, index) => (
              <View key={step} style={styles.stepContainer}>
                <View
                  style={[
                    styles.stepCircle,
                    index < 2 ? styles.activeStep : styles.inactiveStep,
                  ]}
                >
                  {index < 2 && <FontAwesome5 name="check" size={12} color="white" />}
                </View>
                <Text
                  style={[
                    styles.stepText,
                    index < 2 ? styles.activeStepText : styles.inactiveStepText,
                  ]}
                >
                  {step}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
