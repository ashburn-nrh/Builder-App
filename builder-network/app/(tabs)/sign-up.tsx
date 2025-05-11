import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const handleSignup = async () => {
    try {
      // Save role as tradesperson
      await AsyncStorage.setItem('userRole', 'tradesperson');

      // Navigate to tabs layout
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Failed to store user role:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-700">
      <AppHeader onBackPress={() => router.back()} />
      <View className="flex-1 px-6 pt-10 justify-center">
        <Text className="font-semibold text-3xl text-white text-center">
          The Reliable way to get {'\n'} work you want
        </Text>

        <View className="bg-blue-300 p-6 rounded-lg mt-6">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            View Local Trade Work
          </Text>

          <Text className="text-base text-gray-700 mb-4">
            Sign up to access job listings in your area and get connected with clients looking for your trade.
          </Text>

          <TouchableOpacity
            onPress={handleSignup}
            className="bg-blue-800 py-3 rounded-lg mt-2"
          >
            <Text className="text-center text-white font-semibold text-lg">
              Sign Up as Tradesperson
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
