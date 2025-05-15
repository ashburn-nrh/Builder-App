// app/post-job/[category]/work-area.tsx
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';

export default function WorkArea() {
  const router = useRouter();
  const { category } = useLocalSearchParams();

  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');

  const handleNext = () => {
    router.push({
      pathname: `/client/post-job/${category}/client-details`,
      params: { state, district, area },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppHeader onBackPress={() => router.push('/(tabs)/client/post-job/[category].tsx')} />
    <View className="flex-1 bg-primary p-6 justify-center">
      <Text className="text-2xl font-bold mb-4 text-gray-800">Where is the work?</Text>

      <TextInput
        placeholder="State"
        value={state}
        onChangeText={setState}
        className="border rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="District"
        value={district}
        onChangeText={setDistrict}
        className="border rounded-lg p-4 mb-4"
      />
      <TextInput
        placeholder="Area"
        value={area}
        onChangeText={setArea}
        className="border rounded-lg p-4 mb-6"
      />

      <TouchableOpacity onPress={handleNext} className="bg-blue-600 p-4 rounded-lg">
        <Text className="text-white text-center font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
