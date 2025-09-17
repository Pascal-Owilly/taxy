import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4ade80',
  },
  profileInfo: {
    marginLeft: 16,
  },
  greeting: {
    color: '#94a3b8',
    fontSize: 14,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 2,
  },
  rating: {
    color: '#eab308',
    fontSize: 14,
    marginTop: 4,
  },
  notificationButton: {
    backgroundColor: '#334155',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
  },
  statusCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  statusContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusTextContainer: {
    flex: 1,
  },
  statusText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  statusButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 120,
  },
  onlineButton: {
    backgroundColor: '#1e293b',
  },
  statusButtonText: {
    color: '#eab308',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  earningsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  earningsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  earningsCard: {
    backgroundColor: '#1e293b',
    width: '32%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  earningsType: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  earningsValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  earningsAmount: {
    color: '#4ade80',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripsContainer: {
    flex: 1,
    marginBottom: 46,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#334155',
  },
  tabText: {
    color: '#eab308',
    fontWeight: 'bold',
    zIndex: 2,
  },
  tripList: {
    flex: 1,
  },
  tripCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tripTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  tripTimeText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  tripRoute: {
    width: 24,
    alignItems: 'center',
    marginRight: 16,
  },
  routeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4ade80',
  },
  destinationDot: {
    backgroundColor: '#ef4444',
  },
  routeLine: {
    width: 2,
    height: 24,
    backgroundColor: '#4ade80',
    marginVertical: 4,
  },
  tripDetails: {
    flex: 1,
  },
  pickupLocation: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  destinationLocation: {
    color: '#94a3b8',
  },
  tripFare: {
    color: '#4ade80',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noTripsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  noTripsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  noTripsSubtext: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 8,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 16,
    paddingBottom: 24,
    marginHorizontal: -4,
  },
  
  // Map Screen Styles
  mapHeader: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  mapTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  mapSubtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 8,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  mapText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  mapHint: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 8,
  },
  mapControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 5,
  },    
  mapControlButton: {
    backgroundColor: '#334155',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '30%',
  },
  mapControlText: {
    color: 'white',
    marginTop: 8,
    fontWeight: 'bold',
  },
  
  // Parcels Screen Styles
  parcelsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  newParcelButton: {
    backgroundColor: '#4ade80',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  newParcelText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  parcelList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  parcelCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parcelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  parcelDetails: {
    marginLeft: 16,
  },
  parcelId: {
    color: 'white',
    fontWeight: 'bold',
  },
  parcelRoute: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 4,
  },
  parcelStatus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  parcelStatusText: {
    color: '#4ade80',
    fontWeight: 'bold',
  },
  parcelTime: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 30,

  },
  scanButton: {
    backgroundColor: '#4ade80',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  parcelTracker: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  trackerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  trackerSteps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepContainer: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    backgroundColor: '#4ade80',
  },
  inactiveStep: {
    backgroundColor: '#334155',
    borderWidth: 2,
    borderColor: '#64748b',
  },
  stepText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  activeStepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveStepText: {
    color: '#64748b',
  },
  
  // History Screen Styles
  historyTabs: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  historyTab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeHistoryTab: {
    backgroundColor: '#334155',
  },
  historyTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  historyList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  historyCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    backgroundColor: '#334155',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  historyDetails: {
    flex: 1,
  },
  historyTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  historyDate: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 4,
  },
  historyRoute: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 4,
  },
  historyAmount: {
    color: '#4ade80',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historySummary: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  summaryTitle: {
    color: '#94a3b8',
    fontSize: 16,
  },
  summaryAmount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  summaryNote: {
    color: '#4ade80',
    fontSize: 14,
  },
  
  // Profile Screen Styles
  profileHeader: {
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  profileHeaderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#4ade80',
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  profileRating: {
    color: '#eab308',
    fontSize: 16,
    marginTop: 8,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 4,
  },
  profileBody: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    marginBottom: 24,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  profileItemText: {
    color: 'white',
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#334155',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30,

  },
  logoutText: {
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
});