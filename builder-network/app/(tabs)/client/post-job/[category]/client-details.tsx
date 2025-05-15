// app/post-job/[category]/client-details.tsx
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';

export default function ClientDetails() {
  const router = useRouter();
  const { category, state, district, area } = useLocalSearchParams();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleInvite = () => {
    router.push({
      pathname: `/client/post-job/${category}/invite`,
      params: { state, district, area, name, phone, email },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppHeader onBackPress={() => router.push('/(tabs)/client/post-job/[category]/work-area')} />
    <View className="flex-1 bg-primary p-6 justify-center">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Your Details</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        className="border rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        className="border rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border rounded-lg p-4 mb-6"
      />

      <TouchableOpacity onPress={handleInvite} className="bg-blue-600 p-4 rounded-lg">
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
