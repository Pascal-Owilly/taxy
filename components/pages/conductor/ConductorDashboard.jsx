import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Dummy data generators
const generateTickets = () => [
  { id: '1', passenger: 'John Mwangi', from: 'Nairobi CBD', to: 'Jomo Kenyatta Airport', fare: 250, status: 'Scanned', time: '08:30 AM' },
  { id: '2', passenger: 'Wanjiru Njeri', from: 'University of Nairobi', to: 'Central Station', fare: 175, status: 'Pending', time: '09:15 AM' },
  { id: '3', passenger: 'Samuel Otieno', from: 'Eastlands', to: 'Westlands', fare: 320, status: 'Scanned', time: '10:05 AM' },
  { id: '4', passenger: 'Grace Wambui', from: 'Kibera', to: 'Tech Park', fare: 280, status: 'Expired', time: '11:20 AM' },
];

const financialData = {
  today: { earnings: 4825, tickets: 22, cash: 3575, digital: 1250 },
  weekly: { earnings: 32780, tickets: 146, cash: 28030, digital: 4750 },
  transactions: [
    { id: '1', date: '2023-06-01', amount: 4260, type: 'Daily Summary' },
    { id: '2', date: '2023-05-31', amount: 3890, type: 'Daily Summary' },
    { id: '3', date: '2023-05-30', amount: 4520, type: 'Daily Summary' },
    { id: '4', date: '2023-05-29', amount: 5175, type: 'Daily Summary' },
  ]
};

const profileData = {
  name: 'Michael Mwangi',
  id: 'CTR-7842',
  route: 'Blue Line - Route 42',
  bus: 'Bus #KL-7890',
  contact: 'm.mwangi@transit.example.com',
  joined: '2022-03-15',
};

// Screen Components with Dummy Data
const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.greeting}>Good morning, Michael!</Text>
      <Text style={styles.date}>Monday, June 2, 2025</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Current Shift</Text>
      <View style={styles.row}>
        <FontAwesome5 name="route" size={20} color="#4b5563" />
        <Text style={styles.cardText}>Blue Line - Route 42</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome5 name="bus" size={20} color="#4b5563" />
        <Text style={styles.cardText}>Bus #KL-7890</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome5 name="clock" size={20} color="#4b5563" />
        <Text style={styles.cardText}>7:30 AM - 4:00 PM</Text>
      </View>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Today's Summary</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>22</Text>
          <Text style={styles.statLabel}>Tickets</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>KSh {financialData.today.earnings}</Text>
          <Text style={styles.statLabel}>Earnings</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);

const TicketsScreen = () => {
  const tickets = generateTickets();
  
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Recent Tickets</Text>
      
      <FlatList
        data={tickets}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.ticketCard}>
            <View style={styles.ticketHeader}>
              <Text style={styles.passenger}>{item.passenger}</Text>
              <Text style={[
                styles.status, 
                item.status === 'Scanned' ? styles.scanned : 
                item.status === 'Pending' ? styles.pending : styles.expired
              ]}>
                {item.status}
              </Text>
            </View>
            
            <Text style={styles.route}>{item.from} → {item.to}</Text>
            
            <View style={styles.ticketFooter}>
              <Text style={styles.fare}>KSh {item.fare}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const FinanceScreen = () => (
  <View style={styles.container}>
    <Text style={styles.screenTitle}>Financial Summary</Text>
    
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Today's Earnings</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>KSh {financialData.today.earnings}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{financialData.today.tickets}</Text>
          <Text style={styles.statLabel}>Tickets</Text>
        </View>
      </View>
      
      <View style={styles.paymentRow}>
        <View style={styles.paymentMethod}>
          <FontAwesome5 name="money-bill-wave" size={20} color="#10b981" />
          <Text style={styles.paymentText}>Cash: KSh {financialData.today.cash}</Text>
        </View>
        <View style={styles.paymentMethod}>
          <FontAwesome5 name="mobile-alt" size={20} color="#3b82f6" />
          <Text style={styles.paymentText}>Digital: KSh {financialData.today.digital}</Text>
        </View>
      </View>
    </View>
    
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    <FlatList
      data={financialData.transactions}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.transactionCard}>
          <View>
            <Text style={styles.transDate}>{item.date}</Text>
            <Text style={styles.transType}>{item.type}</Text>
          </View>
          <Text style={styles.transAmount}>KSh {item.amount}</Text>
        </View>
      )}
    />
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <View style={styles.profileHeader}>
      <Image 
        source={{ uri: 'https://imgs.search.brave.com/WDWlo_nvh6K8xEsJxh5OorM2WBG5JTxevWp4eOooUW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbWFuLWZhY2Ut/dmVjdG9yXzEwNzI4/NTctNzY0My5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw' }} 
        style={styles.avatar}
      />
      <Text style={styles.profileName}>{profileData.name}</Text>
      <Text style={styles.profileRole}>Conductor</Text>
    </View>
    
    <View style={styles.card}>
      <View style={styles.infoItem}>
        <FontAwesome5 name="id-badge" size={18} color="#4b5563" />
        <Text style={styles.infoText}>ID: {profileData.id}</Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome5 name="route" size={18} color="#4b5563" />
        <Text style={styles.infoText}>{profileData.route}</Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome5 name="bus" size={18} color="#4b5563" />
        <Text style={styles.infoText}>{profileData.bus}</Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome5 name="envelope" size={18} color="#4b5563" />
        <Text style={styles.infoText}>{profileData.contact}</Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome5 name="calendar-alt" size={18} color="#4b5563" />
        <Text style={styles.infoText}>Joined: {profileData.joined}</Text>
      </View>
    </View>
    
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Performance</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>98%</Text>
          <Text style={styles.statLabel}>On Time</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>142</Text>
          <Text style={styles.statLabel}>Days</Text>
        </View>
      </View>
    </View>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  date: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#4b5563',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  ticketCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  passenger: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  scanned: {
    backgroundColor: '#dcfce7',
    color: '#16a34a',
  },
  pending: {
    backgroundColor: '#fffbeb',
    color: '#ca8a04',
  },
  expired: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
  },
  route: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fare: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
  },
  time: {
    fontSize: 14,
    color: '#64748b',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 16,
    marginLeft: 8,
  },
  transactionCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transDate: {
    fontSize: 14,
    color: '#64748b',
  },
  transType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  transAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16a34a',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#e2e8f0',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  profileRole: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#4b5563',
    marginLeft: 12,
  },
});

// Tab Navigator with updated screens
export default function ConductorTabNavigator() {
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
        name="ConductorHome" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Tickets" 
        component={TicketsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="ticket-alt" size={24} color={color} />
          ),
          tabBarLabel: 'Tickets',
        }}
      />
      <Tab.Screen 
        name="Finance" 
        component={FinanceScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="money-bill-wave" size={24} color={color} />
          ),
          tabBarLabel: 'Finance',
        }}
      />
      <Tab.Screen 
        name="ConductorProfile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}