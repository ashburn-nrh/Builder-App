import AppHeader from '@/components/AppHeader';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    Alert.alert('Login', `Logging in with: ${email}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary ">
      <AppHeader onBackPress={() => router.push('/(tabs)')} />
      {/* Header */}
      <View className="px-6 pt-4">
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-lg">
          <Text className="text-black">Menu ☰</Text>
        </TouchableOpacity>
      </View>

      {/* Login Title */}
      <Text className="text-3xl font-bold text-black mb-2">
        Login to The Builder Network
      </Text>
      <Text className="text-base text-gray-600 mb-6">
        Enter your email to continue
      </Text>

      {/* Email Input */}
      <Text className="text-black font-semibold mb-1">Email *</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        className="border border-gray-300 rounded-md px-4 py-3 mb-6 text-black"
        value={email}
        onChangeText={setEmail}
      />

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 py-4 rounded-md mb-10"
      >
        <Text className="text-white font-semibold text-center text-lg">
          Log in
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="border-t border-gray-300 mb-6" />

      {/* New User Section */}
      <Text className="text-lg font-semibold text-black mb-2">
        New to The Builder Network?
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/(tabs)/client/post-job')}>
      <Text className="text-black mb-1">
        <Text className="underline text-blue-600">Post your job</Text> to find a tradesperson
      </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/tradesperson/sign-up')}>
      <Text className="text-black">
        <Text className="underline text-blue-600">Sign up</Text> to join as a tradesperson
      </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
