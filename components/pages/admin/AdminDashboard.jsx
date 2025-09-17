import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Initial dummy data
const initialDrivers = [
  { id: '1', name: 'James Wilson', license: 'DL-7845', contact: '555-1234', status: 'active' },
  { id: '2', name: 'Robert Chen', license: 'DL-9021', contact: '555-5678', status: 'active' },
  { id: '3', name: 'Michael Brown', license: 'DL-3456', contact: '555-9012', status: 'inactive' },
];

const initialConductors = [
  { id: '1', name: 'Sarah Johnson', empId: 'CTR-124', contact: '555-2345', status: 'active' },
  { id: '2', name: 'Emma Davis', empId: 'CTR-125', contact: '555-6789', status: 'active' },
  { id: '3', name: 'David Miller', empId: 'CTR-126', contact: '555-0123', status: 'inactive' },
];

const initialCustomers = [
  { id: '1', name: 'Alex Thompson', email: 'alex@example.com', phone: '555-1111', trips: 12 },
  { id: '2', name: 'Maria Garcia', email: 'maria@example.com', phone: '555-2222', trips: 8 },
  { id: '3', name: 'John Smith', email: 'john@example.com', phone: '555-3333', trips: 15 },
];

const initialParcels = [
  { id: '1', tracking: 'PKG-7842', sender: 'Alex Thompson', receiver: 'Maria Garcia', status: 'in-transit' },
  { id: '2', tracking: 'PKG-9015', sender: 'Global Tech', receiver: 'John Smith', status: 'delivered' },
  { id: '3', tracking: 'PKG-3467', sender: 'Sarah Johnson', receiver: 'Robert Chen', status: 'pending' },
];

// Admin Home Screen
const AdminHomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Admin Dashboard</Text>
    
    <View style={styles.statsContainer}>
      <View style={[styles.statCard, { backgroundColor: '#dbeafe' }]}>
        <FontAwesome5 name="bus" size={24} color="#3b82f6" />
        <Text style={styles.statValue}>8</Text>
        <Text style={styles.statLabel}>Active Drivers</Text>
      </View>
      
      <View style={[styles.statCard, { backgroundColor: '#dcfce7' }]}>
        <FontAwesome5 name="user-friends" size={24} color="#22c55e" />
        <Text style={styles.statValue}>12</Text>
        <Text style={styles.statLabel}>Conductors</Text>
      </View>
    </View>
    
    <View style={styles.statsContainer}>
      <View style={[styles.statCard, { backgroundColor: '#fef3c7' }]}>
        <Ionicons name="people" size={28} color="#f59e0b" />
        <Text style={styles.statValue}>342</Text>
        <Text style={styles.statLabel}>Customers</Text>
      </View>
      
      <View style={[styles.statCard, { backgroundColor: '#ede9fe' }]}>
        <MaterialIcons name="local-shipping" size={28} color="#8b5cf6" />
        <Text style={styles.statValue}>24</Text>
        <Text style={styles.statLabel}>Parcels Today</Text>
      </View>
    </View>
    
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Recent Activity</Text>
      <View style={styles.activityItem}>
        <View style={[styles.activityIcon, { backgroundColor: '#dbeafe' }]}>
          <FontAwesome5 name="plus" size={16} color="#3b82f6" />
        </View>
        <Text>New driver added: James Wilson</Text>
      </View>
      <View style={styles.activityItem}>
        <View style={[styles.activityIcon, { backgroundColor: '#dcfce7' }]}>
          <FontAwesome5 name="check" size={16} color="#22c55e" />
        </View>
        <Text>Parcel PKG-9015 delivered successfully</Text>
      </View>
      <View style={styles.activityItem}>
        <View style={[styles.activityIcon, { backgroundColor: '#fef3c7' }]}>
          <FontAwesome5 name="user" size={16} color="#f59e0b" />
        </View>
        <Text>New customer registered: John Smith</Text>
      </View>
    </View>
  </View>
);

// Driver Management Screen
const DriversScreen = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newDriver, setNewDriver] = useState({
    name: '',
    license: '',
    contact: '',
    status: 'active'
  });

  const addDriver = () => {
    if (newDriver.name && newDriver.license) {
      setDrivers([...drivers, { ...newDriver, id: String(drivers.length + 1) }]);
      setNewDriver({ name: '', license: '', contact: '', status: 'active' });
      setModalVisible(false);
    }
  };

  const toggleStatus = (id) => {
    setDrivers(drivers.map(driver => 
      driver.id === id 
        ? { ...driver, status: driver.status === 'active' ? 'inactive' : 'active' } 
        : driver
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.screenTitle}>Driver Management</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={drivers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <View style={[
                  styles.statusBadge,
                  item.status === 'active' ? styles.activeBadge : styles.inactiveBadge
                ]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.listSubtitle}>License: {item.license}</Text>
            <Text style={styles.listSubtitle}>Contact: {item.contact}</Text>
          </View>
        )}
      />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Driver</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={newDriver.name}
            onChangeText={text => setNewDriver({...newDriver, name: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="License Number"
            value={newDriver.license}
            onChangeText={text => setNewDriver({...newDriver, license: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={newDriver.contact}
            onChangeText={text => setNewDriver({...newDriver, contact: text})}
            keyboardType="phone-pad"
          />
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#6b7280' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#3b82f6' }]}
              onPress={addDriver}
            >
              <Text style={styles.buttonText}>Add Driver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Conductor Management Screen
const ConductorsScreen = () => {
  const [conductors, setConductors] = useState(initialConductors);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newConductor, setNewConductor] = useState({
    name: '',
    empId: '',
    contact: '',
    status: 'active'
  });

  const addConductor = () => {
    if (newConductor.name && newConductor.empId) {
      setConductors([...conductors, { ...newConductor, id: String(conductors.length + 1) }]);
      setNewConductor({ name: '', empId: '', contact: '', status: 'active' });
      setModalVisible(false);
    }
  };

  const toggleStatus = (id) => {
    setConductors(conductors.map(conductor => 
      conductor.id === id 
        ? { ...conductor, status: conductor.status === 'active' ? 'inactive' : 'active' } 
        : conductor
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.screenTitle}>Conductor Management</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={conductors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <View style={[
                  styles.statusBadge,
                  item.status === 'active' ? styles.activeBadge : styles.inactiveBadge
                ]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.listSubtitle}>Employee ID: {item.empId}</Text>
            <Text style={styles.listSubtitle}>Contact: {item.contact}</Text>
          </View>
        )}
      />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Conductor</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={newConductor.name}
            onChangeText={text => setNewConductor({...newConductor, name: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Employee ID"
            value={newConductor.empId}
            onChangeText={text => setNewConductor({...newConductor, empId: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            value={newConductor.contact}
            onChangeText={text => setNewConductor({...newConductor, contact: text})}
            keyboardType="phone-pad"
          />
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#6b7280' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#3b82f6' }]}
              onPress={addConductor}
            >
              <Text style={styles.buttonText}>Add Conductor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Customer Management Screen
const CustomersScreen = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Customer Management</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search customers..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredCustomers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <Text style={styles.listTitle}>{item.name}</Text>
            <Text style={styles.listSubtitle}>{item.email}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.listSubtitle}>Phone: {item.phone}</Text>
              <Text style={styles.tripCount}>{item.trips} trips</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// Parcel Management Screen
const ParcelsScreen = () => {
  const [parcels, setParcels] = useState(initialParcels);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newParcel, setNewParcel] = useState({
    tracking: '',
    sender: '',
    receiver: '',
    status: 'pending'
  });

  const addParcel = () => {
    if (newParcel.tracking && newParcel.sender && newParcel.receiver) {
      setParcels([...parcels, { ...newParcel, id: String(parcels.length + 1) }]);
      setNewParcel({ tracking: '', sender: '', receiver: '', status: 'pending' });
      setModalVisible(false);
    }
  };

  const toggleStatus = (id) => {
    setParcels(parcels.map(parcel => 
      parcel.id === id 
        ? { ...parcel, status: parcel.status === 'pending' ? 'delivered' : 'pending' } 
        : parcel
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.screenTitle}>Parcel Management</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={parcels}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>{item.tracking}</Text>
              <TouchableOpacity onPress={() => toggleStatus(item.id)}>
                <View style={[
                  styles.statusBadge,
                  item.status === 'pending' ? styles.inactiveBadge : styles.activeBadge
                ]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.listSubtitle}>Sender: {item.sender}</Text>
            <Text style={styles.listSubtitle}>Receiver: {item.receiver}</Text>
          </View>
        )}
      />

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Parcel</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Tracking Number"
            value={newParcel.tracking}
            onChangeText={text => setNewParcel({...newParcel, tracking: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Sender Name"
            value={newParcel.sender}
            onChangeText={text => setNewParcel({...newParcel, sender: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Receiver Name"
            value={newParcel.receiver}
            onChangeText={text => setNewParcel({...newParcel, receiver: text})}
          />
          
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#6b7280' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, { backgroundColor: '#3b82f6' }]}
              onPress={addParcel}
            >
              <Text style={styles.buttonText}>Add Parcel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Admin Tab Navigator
export default function AdminTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e293b',
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarActiveTintColor: '#f59e0b',
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tab.Screen 
        name="AdminHome" 
        component={AdminHomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen 
        name="Drivers" 
        component={DriversScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bus" size={24} color={color} />
          ),
          tabBarLabel: 'Drivers',
        }}
      />
      <Tab.Screen 
        name="Conductors" 
        component={ConductorsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-friends" size={20} color={color} />
          ),
          tabBarLabel: 'Conductors',
        }}
      />
      <Tab.Screen 
        name="Customers" 
        component={CustomersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={24} color={color} />
          ),
          tabBarLabel: 'Customers',
        }}
      />
      <Tab.Screen 
        name="Parcels" 
        component={ParcelsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-shipping" size={24} color={color} />
          ),
          tabBarLabel: 'Parcels',
        }}
      />
    </Tab.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 24,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#3b82f6',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e293b',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  activityIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  listSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tripCount: {
    backgroundColor: '#dbeafe',
    color: '#3b82f6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: '#dcfce7',
  },
  inactiveBadge: {
    backgroundColor: '#fee2e2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});