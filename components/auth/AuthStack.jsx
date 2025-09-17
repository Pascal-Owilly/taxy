// AuthStack.tsx
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
    </Stack.Navigator>
  );
}

// LoginScreen.tsx
const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/send-otp/', { phone });
    navigation.navigate('Otp', { phone });
  };

  return (
    <View>
      <TextInput
        placeholder="254700000000"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Continue" onPress={handleSubmit} />
    </View>
  );
};