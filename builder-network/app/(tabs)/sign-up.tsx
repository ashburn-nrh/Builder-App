import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  const handleSignup = async () => {
    if (!firstName || !lastName || !phone || password.length < 6) {
      Alert.alert('Error', 'Please fill all fields and use a password with at least 6 characters.');
      return;
    }

    try {
      // Save user role
      await AsyncStorage.setItem('userRole', 'tradesperson');
      await AsyncStorage.setItem('marketingOptIn', marketingOptIn.toString());
      // You could store other data here too, e.g. phone, name

      // Navigate to tabs layout
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Failed to store user role:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-700">
      <AppHeader onBackPress={() => router.back()} />

      <View className="flex-1 px-6 pt-10">
        <Text className="font-semibold text-3xl text-white text-center mb-6">
          The Reliable way to get {'\n'} work you want
        </Text>

        <View className="bg-blue-300 p-6 rounded-lg">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Sign Up as Tradesperson
          </Text>

          {/* First Name */}
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            className="bg-white rounded-lg p-3 mb-3"
          />

          {/* Last Name */}
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            className="bg-white rounded-lg p-3 mb-3"
          />

          {/* Phone Number */}
          <TextInput
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            className="bg-white rounded-lg p-3 mb-3"
          />

          {/* Password */}
          <TextInput
            placeholder="Password (Min 6 characters)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white rounded-lg p-3 mb-4"
          />

          {/* Marketing Communication Checkbox */}
          <View className="flex-row items-center mb-4">
            <Switch
              value={marketingOptIn}
              onValueChange={setMarketingOptIn}
              thumbColor={marketingOptIn ? '#2563eb' : '#ccc'}
            />
            <Text className="ml-3 text-gray-800">I would like to receive marketing communication</Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            onPress={handleSignup}
            className="bg-blue-800 py-3 rounded-lg"
          >
            <Text className="text-center text-white font-semibold text-lg">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

