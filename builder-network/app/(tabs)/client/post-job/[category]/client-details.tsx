// app/post-job/[category]/client-details.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function ClientDetails() {
  const router = useRouter();
  const { category, email = 'marvixmarvixediting@gmail.com' } = useLocalSearchParams();

  const handleOptionPress = (option: string) => {
    // Example routing, customize per your logic
    router.push(`/client/post-job/${category}/verify-method?option=${option}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f9fff3]">
      <AppHeader onBackPress={() => router.back()} />
      
      <View className="p-6">
        {/* Heading */}
        <Text className="text-2xl font-bold text-gray-900 mb-2">Login to The</Text>
        <Text className="text-2xl font-bold text-gray-900 mb-4">Builder Network</Text>

        {/* Email section */}
        <View className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center gap-2">
            <Ionicons name="person-outline" size={20} color="black" />
            <Text className="text-base text-gray-800">{email}</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/client/change-email')}>
            <Text className="text-blue-600 text-base font-medium">change</Text>
          </TouchableOpacity>
        </View>

        {/* Options */}
        <TouchableOpacity
          onPress={() => handleOptionPress('email')}
          className="flex-row items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          <View className="flex-row items-center gap-3">
            <MaterialCommunityIcons name="email-outline" size={22} color="black" />
            <Text className="text-base text-gray-800">Get a code via email</Text>
          </View>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress('sms')}
          className="flex-row items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 bg-white"
        >
          <View className="flex-row items-center gap-3">
            <MaterialCommunityIcons name="message-text-outline" size={22} color="black" />
            <Text className="text-base text-gray-800">Get a code via SMS</Text>
          </View>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleOptionPress('password')}
          className="flex-row items-center justify-between border border-gray-200 rounded-lg p-4 bg-white"
        >
          <View className="flex-row items-center gap-3">
            <Feather name="unlock" size={22} color="black" />
            <Text className="text-base text-gray-800">Enter your password</Text>
          </View>
          <Feather name="chevron-right" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
