import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { FontAwesome5 } from '@expo/vector-icons';
import LoginScreen from './LoginScreen'; 

export default function RoleSelectionScreen({ navigation }) {
  const { selectRole } = useAuth();
  
  const roles = [
    { id: 'driver', title: 'Driver', icon: 'bus-alt', color: '#10b981' },
    { id: 'conductor', title: 'Conductor', icon: 'ticket-alt', color: '#f59e0b' },
    { id: 'customer', title: 'Customer', icon: 'user', color: '#8b5cf6' },
    { id: 'admin', title: 'Admin', icon: 'user-cog', color: '#4f46e5' },
  ];

  const handleRoleSelect = async (roleId) => {
    await selectRole(roleId);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MatatuPro</Text>
      <Text style={styles.subtitle}>Continue as:</Text>
      
      <View style={styles.rolesContainer}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[styles.roleCard, { backgroundColor: role.color }]}
            onPress={() => handleRoleSelect(role.id)}
          >
            <View style={styles.iconContainer}>
              <FontAwesome5 name={role.icon} size={36} color="white" />
            </View>
            <Text style={styles.roleTitle}>{role.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 MatatuPro. All rights reserved.</Text>
      </View>
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#94a3b8',
    marginBottom: 40,
    textAlign: 'center',
  },
  rolesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  roleCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 16,
  },
  roleTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#64748b',
    textAlign: 'center',
    fontSize: 12,
  },
});