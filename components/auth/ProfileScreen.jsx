import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../../styles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#0f172a' }]}>
      <StatusBar style="light" />
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://imgs.search.brave.com/JTfDSpoIKzhgyuAPF9-hDFQVX5PvtNEvmx99t91ns80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/eW91bmctbWFuLXdp/dGgtZ2xhc3Nlcy1p/bGx1c3RyYXRpb25f/MTMwOC0xNzQ3MDYu/anBnP3NlbXQ9YWlz/X2l0ZW1zX2Jvb3N0/ZWQmdz03NDA' }} 
          style={styles.profileHeaderImage}
        />
        <Text style={styles.profileName}>David Kamau</Text>
        <Text style={styles.profileRating}>⭐ 4.92 (128 ratings)</Text>
        
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>142</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>98%</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3.2k</Text>
            <Text style={styles.statLabel}>KM</Text>
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.profileBody}>
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          {[
            { icon: 'user', text: 'Personal Information' },
            { icon: 'shield-alt', text: 'Security' },
            { icon: 'credit-card', text: 'Payment Methods' },
            { icon: 'money-bill-wave', text: 'Earnings & Payouts' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.profileItem}>
              <FontAwesome5 name={item.icon} size={20} color="#94a3b8" />
              <Text style={styles.profileItemText}>{item.text}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#64748b" />
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          {[
            { icon: 'cog', text: 'App Settings' },
            { icon: 'map-marker-alt', text: 'Navigation Preferences' },
            { icon: 'bell', text: 'Notifications' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.profileItem}>
              <FontAwesome5 name={item.icon} size={20} color="#94a3b8" />
              <Text style={styles.profileItemText}>{item.text}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#64748b" />
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          {[
            { icon: 'headset', text: 'Help Center' },
            { icon: 'comments', text: 'Contact Support' },
            { icon: 'exclamation-circle', text: 'Report an Issue' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.profileItem}>
              <FontAwesome5 name={item.icon} size={20} color="#94a3b8" />
              <Text style={styles.profileItemText}>{item.text}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#64748b" />
            </TouchableOpacity>
          ))}
        </View>
        
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => navigation.replace('RoleSelection')}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
}