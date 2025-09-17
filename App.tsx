import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './components/context/AuthContext';

import LoginScreen from './components/auth/LoginScreen';
import RoleSelectionScreen from './components/auth/RoleSelectionScreen';
import OtpScreen from './components/auth/OtpScreen';
import ProfileScreen from './components/auth/ProfileScreen';

import ConductorDashboard from './components/pages/conductor/ConductorDashboard';
import DriverDashboard from './components/pages/driver/DriverDashboard';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import CustomerDashboard from './components/pages/customer/CustomerDashboard';
import TabNavigator from './components/pages/TabNavigator'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />

          {/* Dashboards for different user roles */}
          <Stack.Screen name="ConductorDashboard" component={ConductorDashboard} />
          <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />

          {/* Optional: your old tab navigator if you still want it */}
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
